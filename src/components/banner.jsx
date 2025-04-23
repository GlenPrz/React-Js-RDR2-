import React from 'react';
import '../styles/banner.css'; // Import your CSS file here

function Rdr2_Banner() {
  return (
    <div>
        <div className="container-fluid d-inline-flex banner">
            <div className='left-banner '>
                <div className='top-overlay'>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
                <div className='banner-content'>
                    
                    <div className='logo'>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                    </div>
                    <div className='short-intro'>
                        <h1>Red Dead Redemption 2</h1>
                        <p>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.</p>
                    </div>
                </div>
            </div>
            <div className='right-banner'>
                <div className='top-overlay'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
                <div className='bottom-overlay'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
            </div>

        </div>
    </div>
  );
}

export default Rdr2_Banner;