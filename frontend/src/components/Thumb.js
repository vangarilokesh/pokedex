import React from "react";

const PokemonThumb = ({
  image,
  name,
  type,
  height,
  weight,
  base_exp,
  _callback,
}) => {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <p>Type: {type}</p>
      </div>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Base Experience: {base_exp}</p>
    </div>
  );
};

export default PokemonThumb;
