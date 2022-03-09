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

  const uniqueKeyMap = (value: string, index?: number) => {
    const count = index ? index : Math.round(Math.random() * 1000000);
    return CryptoJS.AES.encrypt(
      value,
      value + count + Math.floor(Math.random() * 1000000)
    ).toString();
  };

  return {
    uniqueKeyMap,
    decryptSting,
    encryptObj,
    CryptoJS,
  };
};
