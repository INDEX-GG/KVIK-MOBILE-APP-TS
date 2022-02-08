import { useSize } from './useSize';

export const useAdaptiveFont = () => {
  const { isTablet } = useSize();
  return {
    t: isTablet ? 12 : 10,
    sm: isTablet ? 14 : 12,
    little: isTablet ? 16 : 14,
    Mt: isTablet ? 18 : 16,
    Msm: isTablet ? 20 : 18,
    Mlittle: isTablet ? 22 : 20,
  };
};
