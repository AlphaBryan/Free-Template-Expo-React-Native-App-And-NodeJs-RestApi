import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 321;
const guidelineBaseHeight = 680;

export const verticalScale = (size : number) => (height / guidelineBaseHeight) * size;
export const scale = (size : number): number => (width / guidelineBaseWidth) * size;

export const vs = verticalScale;
export const s = scale;
