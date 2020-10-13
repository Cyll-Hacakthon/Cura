import React from 'react';
import Style from './GradientBackground.style';
import {LinearGradient} from 'expo-linear-gradient';

interface IGradientBackgroundProps {
  children: React.ReactElement | Array<React.ReactElement>;
  type?: 'Light' | 'Dark';
  style?: object;
}

const GradientBackground = ({
  children,
  style,
  type,
}: IGradientBackgroundProps) => {
  const gradientTypeMap = {
    Light: '#41CCA2',
    Dark: '#09835E',
  };
  const selectedSecColor = type ? gradientTypeMap[type] : '#09835E';

  return (
    <LinearGradient
      colors={['#2EF442', selectedSecColor]}
      style={{...Style.fullScreen, ...Style.container, ...style}}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
