import React from 'react';
import {useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';

import {fireEvent, render, screen} from '@testing-library/react-native';

import {createControlledComponent} from './utils';

type TestFormValues = {
  testField: string;
};

const MockComponent = ({
  onChange,
  value,
  error,
}: {
  onChange: (value: string) => void;
  value: string;
  error?: string;
}) => (
  <View>
    <TextInput testID="mock-input" value={value} onChangeText={onChange} />
    {error && <Text testID="error-message">{error}</Text>}
  </View>
);

const ControlledMockComponent = createControlledComponent(MockComponent, {
  changeField: 'onChangeText' as any,
  valueField: 'value',
});

const TestForm = () => {
  const {control, handleSubmit} = useForm<TestFormValues>({
    defaultValues: {testField: ''},
  });

  const onSubmit = (data: TestFormValues) => {
    console.log(data);
  };

  return (
    <View>
      <ControlledMockComponent name="testField" control={control as any} />
      <Text testID="submit-button" onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
};

describe('createControlledComponent', () => {
  it('should render the controlled component with initial value', () => {
    render(<TestForm />);

    const input = screen.getByTestId('mock-input');

    expect(input.props.value).toBe('');
  });

  it('should update the value when the user types', () => {
    render(<TestForm />);

    const input = screen.getByTestId('mock-input');

    fireEvent.changeText(input, 'Hello');

    expect(input.props.value).toBe('Hello');
  });
});
