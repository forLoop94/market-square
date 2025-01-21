import React from 'react';
import styles from '../css/Card.module.css';
import { backgrounds } from '../utilities/card-backgrounds';

interface CardProps {
  background: keyof typeof backgrounds;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ background, width = "300px", height = "200px", children }) => {
  const dynamicStyle = {
    backgroundImage: `url(${backgrounds[background]})`,
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

