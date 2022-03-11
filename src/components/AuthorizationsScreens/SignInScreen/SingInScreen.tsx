import React, { useMemo, useState } from 'react';
import SignInScreenView from './SignInScreenView';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { useSecret } from '../../../hooks/useSecret';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { getTypeResponse } from '../../../services/services';
import { stringOnlyNum } from '../../../constants/regExp';
import { FetchType } from '../../../types/fetchTypes';
import {
  fetchUserSignIn,
  ISignInReq,
} from '../../../store/reducers/userSlice/asyncAction';

const SingInScreen = () => {
  const dispatch = useAppDispatch();
  const { encryptObj } = useSecret();
  const { control, handleSubmit, watch, setError } = useForm();

  const [viewPassword, setViewPassword] = useState<boolean>(true);

  const currentFormData = watch() as ISignInReq;
  const activeButton = useMemo(
    () => !!(currentFormData.phone?.length && currentFormData.password?.length),
    [currentFormData]
  );

  const onSubmit: SubmitHandler<ISignInReq | FieldValues> = async (data) => {
    data.phone = `+${stringOnlyNum(data.phone)}`;
    const { phone, password } = data;
    if (phone && password) {
      const secretData = encryptObj(data);
      const response = await dispatch(fetchUserSignIn(secretData));
      const type = getTypeResponse(response.type) as FetchType;
      if (type === 'rejected') {
        setError('password', {
          type: 'string',
          message: 'Некорректные данные',
        });
      }
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
