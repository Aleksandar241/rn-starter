import React, {FC} from 'react';

import {SXButton, SXForm, SXScreen} from '@components';
import {AUTOMATION_TEST_IDS} from '@e2e';

import useViewModel from './useViewModel';

const Login: FC<AuthNavigatorParams['LoginScreen']> = () => {
  const {control, handleSubmit} = useViewModel();

  return (
    <SXScreen>
      <SXForm.TextInput
        name="email"
        control={control}
        testID={AUTOMATION_TEST_IDS.LOGIN_EMAIL_INPUT}
      />
      <SXForm.TextInput name="password" control={control} />
      <SXButton title="Submit" onPress={handleSubmit} />
    </SXScreen>
  );
};

export default Login;
