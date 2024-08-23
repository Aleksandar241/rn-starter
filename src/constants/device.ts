import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const Device = {
  WIDTH: width,
  HEIGHT: height,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
};

export default Device;
