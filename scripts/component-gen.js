const fs = require('fs');
const { execSync } = require('child_process');

const PREFIX = 'SX';
const COMPONENTS_PATH = './src/components';

let componentName = process.argv[2];

let testID = process.argv[2];
if (!componentName.startsWith(PREFIX)) {
  testID = `${PREFIX}-${testID.replace(/([A-Z])/g, '-$1')}`.toUpperCase();
  componentName = `${PREFIX}${componentName.charAt(0).toUpperCase() + componentName.slice(1)}`;
} else {
  testID =
    `${PREFIX}-${testID.slice(0, 2).replace(/([A-Z])/g, '-$1')}`.toUpperCase();
}

if (!componentName) {
  throw new Error('Component name is required');
}

// Generate folder
const basePath = `${COMPONENTS_PATH}/${componentName}`;
fs.mkdirSync(basePath);

// Generate index.ts file
const indexPath = `${basePath}/index.ts`;
const indexContent = `export { default as ${componentName} } from './${componentName}.view';\n`;

fs.writeFileSync(indexPath, indexContent);
execSync(`npx prettier --write ${indexPath}`);

// Generate styles.ts file
const stylesPath = `${basePath}/styles.ts`;
const stylesContent = `import \{StyleSheet\} from 'react-native'; const styles = StyleSheet.create({});\n\nexport default styles;\n`;

fs.writeFileSync(stylesPath, stylesContent);
execSync(`npx prettier --write ${stylesPath}`);

// Generate types.ts file
const typesPath = `${basePath}/types.ts`;
const typesContent = `import type \{FC\} from 'react';\n export type ViewModelProps = {};\n\n type Props = ViewModelProps & {\n testID?: string; \n};\n\n  export type ${componentName}Props = FC<Props>; \n`;

fs.writeFileSync(typesPath, typesContent);
execSync(`npx prettier --write ${typesPath}`);

// Generate useViewModel.ts file
const viewModelPath = `${basePath}/useViewModel.ts`;
const viewModelContent = `import type \{ViewModelProps\} from './types';\n\n const useViewModel = ({}: ViewModelProps) => \{\n return {};\n};\n\nexport default useViewModel;\n`;

fs.writeFileSync(viewModelPath, viewModelContent);
execSync(`npx prettier --write ${viewModelPath}`);

// Generate useViewModel.test.ts file
const viewModelTestPath = `${basePath}/useViewModel.test.ts`;
const viewModelTestContent = `import {renderHook} from '@testing-library/react-hooks';\n import useViewModel from './useViewModel';\n\n describe('useViewModel', () => { \nit('should render hook correctly', () => {\nconst {result} = renderHook(() => useViewModel({}));\n});\n
});`;

fs.writeFileSync(viewModelTestPath, viewModelTestContent);
execSync(`npx prettier --write ${viewModelTestPath}`);

// Generate Component.view.tsx file
const componentViewPath = `${basePath}/${componentName}.view.tsx`;
const componentContent = `import React from 'react';\nimport {View} from 'react-native';\nimport styles from './styles';\nimport type {${componentName}Props} from './types';\nimport useViewModel from './useViewModel';\n\nconst ${componentName}: ${componentName}Props = ({testID = \'${testID}\', ...rest}) => {\nconst {} = useViewModel(rest);\n\n return <View testID={testID}></View>;\n};\n\nexport default ${componentName};\n`;

fs.writeFileSync(componentViewPath, componentContent);
execSync(`npx prettier --write ${componentViewPath}`);

// Generate Component.view.test.tsx file
const componentViewTestPath = `${basePath}/${componentName}.view.test.tsx`;
const componentTestContent = `import React from 'react';\nimport {render} from '@testing-library/react-native';\n import ${componentName} from './${componentName}.view';\n\n describe('${componentName}', \() => {\n it('should render correctly', () => {\nconst {getByTestId} = render(<${componentName} testID={\'${testID}\'}/>);\n\nexpect(getByTestId(\'${testID}\')).toBeDefined();\n});\n});\n`;

fs.writeFileSync(componentViewTestPath, componentTestContent);
execSync(`npx prettier --write ${componentViewTestPath}`);

// Generate Component.stories.tsx file
const componentStoryPath = `${basePath}/${componentName}.stories.tsx`;
const componentStoryContent = `import React from 'react';\nimport {StyleSheet} from 'react-native';\n\n import {action} from '@storybook/addon-actions';\n import {Meta, StoryFn} from '@storybook/react'; \n\n import {${PREFIX}Screen} from '../${PREFIX}Screen';\n import ${componentName} from './${componentName}.view';\n import type {${componentName}Props} from './types';\n\n export default \{\n title: '${componentName}',\n component: ${componentName},\n decorators: \[(Story) => <${PREFIX}Screen style={styles.container}><Story /></${PREFIX}Screen>\],\n} as Meta;\n\nconst styles = StyleSheet.create({\ncontainer: {\nflex: 1,\njustifyContent: 'center',\nalignItems: 'center',\n},\n});\n\nconst Template: StoryFn<${componentName}Props> = args => (\n<${componentName} {...args} />);\n\nexport const Default = Template.bind({});\nDefault.args = {};\n\n`;

fs.writeFileSync(componentStoryPath, componentStoryContent);
execSync(`npx prettier --write ${componentStoryPath}`);

// Update index.ts file
const indexFilePath = `${COMPONENTS_PATH}/index.ts`;
fs.appendFileSync(indexFilePath, `export * from './${componentName}';\n`);
execSync(`npx prettier --write ${indexFilePath}`);
