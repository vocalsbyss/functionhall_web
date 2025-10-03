import React from 'react'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-12">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-64 sm:h-96">
          <img
            src="https://via.placeholder.com/1200x400?text=Anjani+Function+Hall+Banner" // Placeholder image URL
            alt="Anjani Function Hall Banner"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Anjani Function Hall</h1>
            <p className="text-lg max-w-2xl text-center mb-6">
              Your perfect venue for celebrations, events, and cultural programs.
            </p>
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
