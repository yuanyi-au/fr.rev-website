import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          和我们一起探索革命时期的法国
        </p>
        <p className='footer-subscription-text'>
          订阅获取文章更新通知
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='邮件地址'
            />
            <Button buttonStyle='btn--outline'>订阅</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>关于我们</h2>
            <Link to='/'>参与人员</Link>
            <Link to='/'>感谢人员</Link>
            <Link to='/'>友情链接</Link>
            <Link to='/'>联系我们</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
