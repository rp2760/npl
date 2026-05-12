'use client'
import React, { useState } from 'react'

const PlayerNumberGenerator = () => {
  const [showInput, setShowInput] = useState(false)
  const [players, setPlayers] = useState([''])
  const [results, setResults] = useState([])

  const addPlayer = () => {
    setPlayers([...players, ''])
  }

  const removePlayer = (index) => {
    const updated = [...players]
    updated.splice(index, 1)
    setPlayers(updated)
  }

  const handleChange = (index, value) => {
    const updated = [...players]
    updated[index] = value
    setPlayers(updated)
  }

  const generateRandomOrder = () => {
    const shuffled = [...players]
      .filter((p) => p.trim() !== '')
      .sort(() => 0.5 - Math.random())
    setResults(shuffled)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4">
      {!showInput && (
        <button
          onClick={() => setShowInput(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
            Player Number Generator
        </button>
      )}

      {showInput && (
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Enter Player Names</h2>

          {players.map((player, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={player}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Player ${index + 1}`}
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 text-black"
              />
              {players.length > 1 && (
                <button
                  onClick={() => removePlayer(index)}
                  className="ml-2 text-red-500 font-bold hover:text-red-700"
                >
                  ×
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addPlayer}
            className="bg-gray-100 px-4 py-2 mt-2 text-black text-sm  rounded-md hover:bg-gray-200 transition"
          >
            + Add Player
          </button>

          <div className="text-center mt-6">
            <button
              onClick={generateRandomOrder}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Generate Random Order
            </button>
          </div>

          {results.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-center mb-3 text-black">Final Result</h3>
              <ul className="space-y-2">
                {results.map((player, index) => (
                  <li key={index} className="text-black font-medium text-lg">
                    {index + 1}
                    {index === 0
                      ? 'st'
                      : index === 1
                      ? 'nd'
                      : index === 2
                      ? 'rd'
                      : 'th'}{' '}
                    - {player}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PlayerNumberGenerator
