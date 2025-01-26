import React from 'react';
import { FiHeart } from "react-icons/fi";

interface IOptionscardsProps {
  currentPrice: number,
  oldPrice: number
}

const OptionsCard: React.FC<IOptionscardsProps> = ({ currentPrice, oldPrice }) => {
  return (
    <div>
      <img src="" alt="" />
      <FiHeart />
      <div>
        <h2>Now { `${currentPrice}` }</h2>
        <span>{ `${oldPrice}` }</span>
      </div>
    </div>
  )
}

export default OptionsCard
