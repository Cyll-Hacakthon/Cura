import React from 'react';
import Style from './GradientBackground.style';
import {LinearGradient} from 'expo-linear-gradient';

interface IGradientBackgroundProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

const GradientBackground = ({children}: IGradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={['#2EF442', '#09835E']}
      style={(Style.fullScreen, Style.container)}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
