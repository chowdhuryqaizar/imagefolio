import React from 'react';
import Logo from '../imagefolio.png';

const Title = () => {
  return (
    <div className="title">
      <h2>imagefolio
      <br></br>
      <img src={Logo} alt="imagefolio"></img>
      <br></br>
      Your Personal Media Portfolio
      </h2>
    </div>
  )
}

export default Title;