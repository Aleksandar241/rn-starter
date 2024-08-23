import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/graphql/schema.graphql',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/index.tsx': {
      // preset: 'import-types',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  require: ['ts-node/register'],
  hooks: {afterOneFileWrite: ['prettier --write']},
};

export default config;
