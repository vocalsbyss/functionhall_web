import React from 'react'

const DiningHall = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dining Hall</h1>
      <p className="mb-4">
        Our Dining Hall has a capacity of 200 guests, ideal for banquets, dinners, and social events.
      </p>
      <img
        src="https://via.placeholder.com/800x400?text=Dining+Hall" // Placeholder image URL
        alt="Dining Hall"
        className="w-full rounded-lg shadow-md"
      />
    </div>
  )
}

export default DiningHall
