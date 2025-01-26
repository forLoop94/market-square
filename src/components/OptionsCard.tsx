import React, { ReactElement } from 'react';
import { FiHeart } from "react-icons/fi";

interface IOptionscardsProps {
  currentPrice: number,
  oldPrice: number,
  children:[ReactElement<'h3'>, ReactElement<'p'>, ReactElement<'button'>, ReactElement<'img'>?];
}

const OptionsCard: React.FC<IOptionscardsProps> = ({ currentPrice, oldPrice, children }) => {
  return (
    <div>
      <img src="" alt="" />
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
