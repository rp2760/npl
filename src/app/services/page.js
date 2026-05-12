import React from 'react'
import Image from 'next/image'
import PlayerNumberGenerator from '../components/PlayerNumberGenerator'


const services = () => {
  return (
<>
    <div className='text-3xl mt-10 text-center' >---Our Main services---</div>

     <PlayerNumberGenerator />
  
  <main className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-5xl  w-full rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-auto relative">
          <Image
            src="/gully-cricket-peace.png" // 💡 Save the image with this name in /public folder
            alt="Kids playing gully cricket peacefully"
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            🏏 Bringing Peace to the Pitch
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Gully cricket isn’t just a game — it’s a brotherhood of bouncers, boundaries, and banter. But often, debates over who plays first spoil the fun.
          </p>
          <p className="text-gray-700 text-lg mt-3 leading-relaxed">
            This <span className="font-semibold text-green-600">Random Number Generator</span> was built to end those fights and bring fairness to the field. Let technology decide who’s up next, and let the game flow with laughter and love.
          </p>
          <p className="text-gray-700 text-lg mt-3 leading-relaxed">
            No more bias, no more shouting — just cricket the way it was meant to be: <span className="italic text-blue-500">peaceful, playful, and full of joy. 🕊️</span>
          </p>
        </div>
      </div>
    </main>
  </>
  )

}
export default services;