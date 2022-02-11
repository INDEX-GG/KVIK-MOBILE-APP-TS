import React, { useEffect, useState } from 'react';
import SignInScreenView from './SignInScreenView';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { SignInSendData } from './types';

const SingInScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  useEffect(() => {
    console.log(watch());
  }, [watch]);

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
