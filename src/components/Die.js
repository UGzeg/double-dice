import React from 'react';

const Die = (props) => {
    const {firstDieStatus, secondDieStatus} = props;
    const firstDieImg = require(`../assets/${firstDieStatus}.png`);
    const secondDieImg = require(`../assets/${secondDieStatus}.png`);
    return(
        
        <div style={{ display: 'block', margin: 20 }}>
          <img src={firstDieImg} className="die" alt="Die one" onClick={props.roll} />
          <img src={secondDieImg} className="die" alt="Die two" onClick={props.roll} />
        </div>

    );
};

export default Die;