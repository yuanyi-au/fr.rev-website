import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
      
function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-title'>
      <h1 style={{color:'blue', fontFamily: 'LiSu'}}>法国</h1>
      <h1 style={{color:'white', fontFamily: 'LiSu'}}>大</h1>
      <h1 style={{color:'red', fontFamily: 'LiSu'}}>革命</h1>
      </div>
      <p>1789-1799</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          开始历史之旅
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
