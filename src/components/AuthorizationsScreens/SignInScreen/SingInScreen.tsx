import React, { useMemo, useState } from 'react';
import SignInScreenView from './SignInScreenView';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { SignInSendData } from './types';

const SingInScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const [viewPassword, setViewPassword] = useState<boolean>(true);

  const currentFormData = watch() as SignInSendData;
  const activeButton = useMemo(
    () => !!(currentFormData.phone?.length && currentFormData.password?.length),
    [currentFormData]
  );

  const onSubmit: SubmitHandler<SignInSendData | FieldValues> = (data) => {
    console.log(data);
  };

  const handleChangeViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handlePressButton = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <SignInScreenView
      activeButton={activeButton}
      passwordData={{
        viewPassword: viewPassword,
        setViewPassword: handleChangeViewPassword,
      }}
      formData={{
        control,
        handlePressButton,
      }}
    />
  );
};

export default SingInScreen;
