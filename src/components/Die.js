import React from 'react';

const Die = (props) => {
    const {firstDieStatus, secondDieStatus} = props;
    const firstDieImg = require(`./assets/${firstDieStatus}.png`);
    const secondDieImg = require(`./assets/${secondDieStatus}.png`);
    return(
        
        <div style={{ display: 'block', margin: 20 }}>
          <img src={firstDieImg} className="die" alt="Die one" />
          <img src={secondDieImg} className="die" alt="Die two" />
        </div>

    );
};

export default Die;