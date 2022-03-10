import React, { useMemo, useState } from 'react';
import SignInScreenView from './SignInScreenView';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { SignInSendData } from './types';
import { signIn } from '../../../axios/authorization';
import { useSecret } from '../../../hooks/useSecret';
import { stringOnlyNum } from '../../../constants/regExp';
import { useAsyncStorage } from '../../../hooks/useAsyncStorage';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { userSlice } from '../../../store/reducers/userSlice/userSlice';
import { fetchUserLogin } from '../../../store/reducers/userSlice/asyncAction';

const SingInScreen = () => {
  const dispatch = useAppDispatch();
  const { encryptObj } = useSecret();
  const { setItemStorage } = useAsyncStorage();
  const { control, handleSubmit, watch, setError } = useForm();

  const [viewPassword, setViewPassword] = useState<boolean>(true);

  const currentFormData = watch() as SignInSendData;
  const activeButton = useMemo(
    () => !!(currentFormData.phone?.length && currentFormData.password?.length),
    [currentFormData]
  );

  const onSubmit: SubmitHandler<SignInSendData | FieldValues> = async (data) => {
    data.phone = `+${stringOnlyNum(data.phone)}`;
    const { phone, password } = data;
    if (phone && password) {
      const secretData = encryptObj(data);
      const test = await dispatch(fetchUserLogin(secretData));
      console.log(test);
      // signIn({ phone: secretData.phone, password: secretData.password }).then(
      //   (res) => {
      //     console.log(res);
      //     if (res.isset !== undefined) {
      //       setError('password', {
      //         type: 'string',
      //         message: 'Некоррестные данные',
      //       });
      //     }
      //     if (res.idUser) {
      //       setItemStorage('UserId', res.idUser).then(() =>
      //         console.log('success')
      //       );
      //     }
      //   }
      // );
    }
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

export default React.memo(SingInScreen);
