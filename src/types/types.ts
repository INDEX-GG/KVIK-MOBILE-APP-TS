
export type AppLocation =
  | 'PlaceOfferNewAd'
  | 'Product'
  | 'Settings'
  | 'LocationSearch'
  | 'NotificationScreen'
  | 'ClearSearchResultScreen'
  | 'LicenseScreen'
  | 'PrivacyPolicyScreen'
  | 'KvikUseScreen'
  | 'OfferUseScreen'
  | 'SignInScreen'
  | 'RegistrationScreen'
  | 'MessageScreen'
  | 'MainScreen'
  | 'PlaceOfferScreen'
  | 'FavoriteScreen'
  | 'AccountScreen'
  | 'PlaceOfferAdditionalFields';

export type onChangeText = (text: string) => void;

export type NumberType = 'int' | 'float'
