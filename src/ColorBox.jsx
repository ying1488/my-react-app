import { useState } from 'react';
import "./ColorBox.css";


export default function ColorBox({colors}){
 const [color, setColor] = useState (randomChoice(colors));
 
  function randomChoice(arr){
    const idx = Math.floor(Math.random() * colors.length);
    return arr[idx]
  }
  
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
};
  return (
  <div 
    className="ColorBox" 
    onClick={changeColor}
    style={{ backgroundColor:color }}
  ></div>
  );
}