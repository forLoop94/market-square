import React, { ReactElement } from 'react';
import { FiHeart } from "react-icons/fi";
import CardImage from './CardImage'
import images from '../assets/cardImages';

interface IOptionscardsProps {
  imagekey: keyof typeof images,
  text: string,
  width: string,
  height: string,
  top?: string,
  right?: string,
  left?: string,
  bottom?: string,
  currentPrice: number,
  oldPrice: number,
  children:[ReactElement<'h3'>, ReactElement<'p'>, ReactElement<'button'>];
}

const OptionsCard: React.FC<IOptionscardsProps> = ({ imagekey, text, width, height, top, right, left, bottom, currentPrice, oldPrice, children }) => {
  return (
    <div>
      <CardImage imageKey={ imagekey } text={ text }  width={ width } height={ height } top={ top } right={ right } left={ left } bottom={ bottom } />
      <FiHeart />
      <div>
        <h2>Now { `${currentPrice}` }</h2>
        <span>{ `${oldPrice}` }</span>
      </div>
      <div >
        {children}
      </div>
    </div>
  )
}

export default OptionsCard
