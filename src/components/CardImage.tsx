import React from 'react'
import styles from '../css/Card.module.css';
import images from '../assets/cardImages';

interface ICardImageProps {
  imageKey: keyof typeof images;
  text: string,
  width: string,
  height: string,
  top?: string,
  right?: string,
  left?: string,
  bottom?: string
}

const cardImage: React.FC<ICardImageProps> = ({ imageKey, text, width, height, top, right, left, bottom }) => {
  const dynamicStyle = {
    width: width,
    height: height,
    top: top,
    right: right,
    left: left,
    bottom: bottom
  }

  return (
    <div>
      <img src={images[imageKey]} alt={text} className={styles["card-image"]} style={ dynamicStyle } />
    </div>
  )
}

export default cardImage
