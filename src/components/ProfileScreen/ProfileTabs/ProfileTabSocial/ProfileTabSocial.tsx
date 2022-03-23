import React from 'react';
import NavigationSection from '../../../../UI/NavigationSection/NavigationSection';

const ProfileTabSocial = () => {
  return (
    <NavigationSection
      title={'Социальные сети'}
      pushName={'ClearSearchResultScreen'}
    />
  );
};

export default React.memo(ProfileTabSocial);
