export default function Die({numSides}){
  
  const roll = Math.floor(Math.random()*numSides)+1;
  return <p>{numSides} sided roll: {roll}</p>;
}