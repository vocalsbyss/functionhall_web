import React from 'react'
import EventCard from '../components/EventCard'

const events = [
  { id: 1, title: 'Garba Dance', description: 'Traditional Gujarati folk dance performance.', date: '2023-10-15T18:00:00Z' },
  { id: 2, title: 'Independence Day Celebrations', description: 'Patriotic songs and cultural programs.', date: '2023-08-15T10:00:00Z' },
  { id: 3, title: 'Get-togethers', description: 'Community gatherings and social events.', date: '2023-11-20T19:00:00Z' },
]

const Entertainments = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Anjani Entertainments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Entertainments
