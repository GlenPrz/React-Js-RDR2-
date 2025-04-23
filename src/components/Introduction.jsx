import React from 'react'
import '../styles/intro.css'; // Import your CSS file here
// This is a simple introduction component for the game Red Dead Redemption 2

function Introduction() {
  return (
    <div className='intro-body'>
        <div className='intro-content'>
            <h1>Introduction</h1>
            <p>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. It is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. Set in 1899, it follows Arthur Morgan, an outlaw and member of the Van der Linde gang, as he tries to survive against government forces and rival gangs.</p>
            <p>The game is played from a third-person perspective and features an open world environment for players to explore. Players can engage in various activities such as hunting, fishing, and horseback riding, as well as interact with non-playable characters (NPCs) and complete missions.</p>

            <button className='btn btn-center'>Read More</button>
        </div>
    </div>
  )
}

export default Introduction