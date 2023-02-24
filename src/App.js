import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='main-container'>
      <div>
        <div className='notifications'>
          <div className='notification-bar'>
            <div style={{ fontWeight: "800", marginRight: '10px', fontSize: '20px' }}>Notifications</div>
            <div className='notification-number'>3</div>
          </div>
          <div className='mark-as-read'>Mark all as read</div>
        </div>
      </div>
    </div>
  );
}

export default App;
