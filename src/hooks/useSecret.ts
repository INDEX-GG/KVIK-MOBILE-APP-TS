import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/constants';

export const useSecret = () => {
  const encryptObj = (obj: Object) => {
    const secretObj = {} as any;
    for (const [key, value] of Object.entries(obj)) {
      secretObj[key] = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    }
    return secretObj;
  };

  const decryptSting = (str: string) => {
    return str;
  };

  return {
    decryptSting,
    encryptObj,
    CryptoJS,
  };
};
