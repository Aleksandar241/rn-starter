import { SXCheckbox } from '../SXCheckbox';
import { SXRadio } from '../SXRadio';
import { SXSwitch } from '../SXSwitch';
import { SXTextInput } from '../SXTextInput';
import { createControlledComponent } from './utils';

export * from './utils';

const TextInput = createControlledComponent(SXTextInput, {
  changeField: 'onChange',
});

const Checkbox = createControlledComponent(SXCheckbox, {
  changeField: 'onPress',
});

const Switch = createControlledComponent(SXSwitch, {
  changeField: 'onSwitch',
});

const Radio = createControlledComponent(SXRadio, {
  changeField: 'onPress',
  valueField: 'selected',
});

export default {
  TextInput,
  Checkbox,
  Switch,
  Radio,
};
