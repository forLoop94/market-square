import React, { ReactElement } from 'react';
import styles from '../css/Card.module.css';
import { backgroundColors, backgroundImages } from '../utilities/card-backgrounds';

interface CardProps {
  background?: keyof typeof backgroundImages;
  bgColor?: keyof typeof backgroundColors,
  width?: string;
  height?: string;
  children: [ReactElement<'h2'>, ReactElement<'p'>, ReactElement<'button'>];
}

const Card: React.FC<CardProps> = ({ background, bgColor, width = "300px", height = "200px", children }) => {
  const dynamicStyle = {
    backgroundImage: background ? `url(${backgroundImages[background]})` : '',
    backgroundColor: bgColor ? `${backgroundColors[bgColor]}` : '',
    width: width,
    height: height,
  };

  return (
    <div className={styles.card} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default Card;

