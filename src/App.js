import React from 'react';
import './App.scss';

import markImage from './Assets/images/avatar-mark-webber.webp';

function App() {
  return (
    <div className='main-container'>
      <div>
        <div className='notifications'>
          <div className='all-nav'>
            <div className='notification-bar'>
              <div style={{ fontWeight: "800", marginRight: '10px', fontSize: '20px' }}>Notifications</div>
              <div className='notification-number'>3</div>
            </div>
            <div className='mark-as-read'>Mark all as read</div>
          </div>
          <div className='single-feed'>
            <div className='image-info'>
              <img src={markImage} alt="mark" />
              <div>
                <div className='info'><strong style={{ color: "black", marginRight: "2px" }}>Mark Webber</strong> reacted to your recent post <strong>My first tournament today!</strong></div>
                <div className='post-time'>1m ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
