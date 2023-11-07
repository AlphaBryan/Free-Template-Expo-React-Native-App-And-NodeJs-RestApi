import React from 'react';
import { SvgXml } from 'react-native-svg';
import { IconProps, SvgImageProps } from './types';


// Check if theres an default min padding to make it clickable 
const SvgImage: React.FC<SvgImageProps> = ({ xml, ...props }) => (
  <SvgXml xml={xml} {...props} />
);


export function HomeIcon(props: IconProps){
  const svgMarkup = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="${props.color}" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M15 18H9" stroke="${props.color}" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;

  return (
    <SvgImage
      xml={svgMarkup}
      width={props.size}
      {...props}
    />
  );
}
export function UserIcon(props: IconProps){
  const svgMarkup = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="6" r="4" stroke="${props.color}" stroke-width="1.5"/>
  <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="${props.color}" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;

  return (
    <SvgImage
      xml={svgMarkup}
      width={props.size}
      {...props}
    />
  );
}