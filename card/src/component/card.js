import React from 'react';

const Card = (props) => {
    const { name, suite, image } = props;
    return (
        <div className="Card">
            <div className="th">
            <h1>{name} <br/>{suite}</h1>
            </div>
            <div className="img">
            <img src={image} alt={`${name}  ${suite}`} />
            </div>
            
        </div>
    );
};
export default Card;
