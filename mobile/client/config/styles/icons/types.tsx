export interface SvgImageProps {
    xml: string;
    marginTop?: number;
    [key: string]: any; // Allow any additional props
  }
  
export interface IconProps {
    size: number;
    color: string;
    onPress?: () => void;
    style?: object;
    [key: string]: any; // Allow any additional props
  }