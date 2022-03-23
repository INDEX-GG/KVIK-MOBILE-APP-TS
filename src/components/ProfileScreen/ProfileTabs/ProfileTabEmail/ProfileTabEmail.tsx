import React from 'react';
import NavigationSection from '../../../../UI/NavigationSection/NavigationSection';

const ProfileTabEmail = () => {
  return (
    <NavigationSection title={'Почта'} pushName={'ClearSearchResultScreen'} />
  );
};

export default React.memo(ProfileTabEmail);
