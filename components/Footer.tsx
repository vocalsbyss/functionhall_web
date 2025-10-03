import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Anjani Function Hall</h3>
            <p className="text-gray-300">
              Your perfect venue for celebrations and events.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-300">Instagram: @anjanihall</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; 2023 Anjani Function Hall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
