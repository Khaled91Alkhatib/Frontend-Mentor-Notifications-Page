import React, { useState } from 'react';
import './App.scss';

import markImage from './Assets/images/avatar-mark-webber.webp';
import angelaImage from './Assets/images/avatar-angela-gray.webp';
import jacobImage from './Assets/images/avatar-jacob-thompson.webp';
import rizkyImage from './Assets/images/avatar-rizky-hasanuddin.webp';
import kimberlyImage from './Assets/images/avatar-kimberly-smith.webp';
import nathanImage from './Assets/images/avatar-nathan-peterson.webp';
import annaImage from './Assets/images/avatar-anna-kim.webp';

import chessImage from './Assets/images/image-chess.webp';

function App() {
  const [allRead, setAllRead] = useState(false);

  return (
    <div className='main-container'>
      <div>
        <div className='notifications'>
          <div className='all-nav'>
            <div className='notification-bar'>
              <div style={{ fontWeight: "800", marginRight: '10px', fontSize: '20px' }}>Notifications</div>
              <div className='notification-number'>
                {allRead === true ? 0 : 3}
              </div>
            </div>
            <button onClick={() => setAllRead(true)} className='mark-as-read'>Mark all as read</button>
          </div>
          <div className='single-feed'>
            {allRead === true ?
              <>
                <div className='image-info'>
                  <img src={markImage} alt="mark" />
                  <div>
                    <div className='info'><strong className='name'>Mark Webber</strong> reacted to your recent post <strong className='group'>&nbsp; My first tournament today!</strong></div>
                    <div className='post-time'>1m ago</div>
                  </div>
                </div>

                <div className='image-info'>
                  <img src={angelaImage} alt="mark" />
                  <div>
                    <div className='info'><strong className='name'>Angela Gray</strong> followed you</div>
                    <div className='post-time'>5m ago</div>
                  </div>
                </div>

                <div className='image-info'>
                  <img src={jacobImage} alt="mark" />
                  <div>
                    <div className='info'><strong className='name'>Jacob Thompson</strong> has joined your group <strong className='group'>&nbsp; Chess Club</strong></div>
                    <div className='post-time'>1 day ago</div>
                  </div>
                </div>
              </>
              :
              <>
                <div className='image-info unread-post'>
                  <img src={markImage} alt="mark" />
                  <div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                      <div className='info'><strong className='name'>Mark Webber</strong> reacted to your recent post <strong className='group'>&nbsp; My first tournament today!</strong></div>
                      <div className='unread-dot' />
                    </div>
                    <div className='post-time'>1m ago</div>
                  </div>
                </div>

                <div className='image-info unread-post' >
                  <img src={angelaImage} alt="mark" />
                  <div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                      <div className='info'><strong className='name'>Angela Gray</strong> followed you</div>
                      <div className='unread-dot' />
                    </div>
                    <div className='post-time'>5m ago</div>
                  </div>
                </div>

                <div className='image-info unread-post'>
                  <img src={jacobImage} alt="mark" />
                  <div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                      <div className='info'><strong className='name'>Jacob Thompson</strong> has joined your group <strong className='group'>&nbsp; Chess Club</strong></div>
                      <div className='unread-dot' />
                    </div>
                    <div className='post-time'>1 day ago</div>
                  </div>
                </div>
              </>
            }

            <div className='image-info'>
              <img src={rizkyImage} alt="mark" />
              <div>
                <div className='info'><strong className='name'>Rizky Hasanuddin</strong> sent you a private message</div>
                <div className='post-time'>5 days ago</div>
                <div className='message'>
                  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                  I'm already having lots of fun and improving my game.
                </div>
              </div>
            </div>

            <div className='image-info'>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                  <img src={kimberlyImage} alt="mark" />
                  <div>
                    <div className='info'><strong className='name'>Kimberly Smith</strong> commented on your picture</div>
                    <div className='post-time'>1 week ago</div>
                  </div>
                </div>
                <div>
                  <img style={{ marginLeft: '40px' }} src={chessImage} alt="chess" />
                </div>
              </div>
            </div>

            <div className='image-info'>
              <img src={nathanImage} alt="mark" />
              <div>
                <div className='info'><strong className='name'>Nathan Peterson</strong> reacted to your recent post <strong className='group'>&nbsp; 5 end-game strategies to increase your win rate</strong></div>
                <div className='post-time'>2 weeks ago</div>
              </div>
            </div>

            <div style={{ paddingBottom: '0', marginBottom: '0' }} className='image-info'>
              <img src={annaImage} alt="mark" />
              <div>
                <div className='info'><strong className='name'>Anna Kim</strong> left the group <strong className='group'>&nbsp; Chess Club</strong></div>
                <div className='post-time'>5m ago</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;