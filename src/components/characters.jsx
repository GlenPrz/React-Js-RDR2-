import React from 'react'
import '../styles/intro.css'; // Import your CSS file here

function characters() {
  return (
    <div className='char-body'>
        <div className='slider-container'>
            <div className='slider'>
                <div className='slide'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
                <div className='slide'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
                <div className='slide'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Red_Dead_Redemption_2_cover_art.jpg/220px-Red_Dead_Redemption_2_cover_art.jpg" alt="Logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default character