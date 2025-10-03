import React, { useState, useEffect } from 'react'

interface Photo {
  id: number
  url: string
  caption?: string
}

interface Event {
  id: number
  title: string
  desc: string
  date: string
}

interface Subscriber {
  id: number
  email: string
  createdAt: string
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [photos, setPhotos] = useState<Photo[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [newEvent, setNewEvent] = useState({ title: '', desc: '', date: '' })
  const [uploadFile, setUploadFile] = useState<File | null>(null)

  useEffect(() => {
    if (isLoggedIn) {
      fetchPhotos()
      fetchEvents()
      fetchSubscribers()
    }
  }, [isLoggedIn])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      if (res.ok) {
        setIsLoggedIn(true)
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  const fetchPhotos = async () => {
    const res = await fetch('/api/gallery')
    const data = await res.json()
    setPhotos(data)
  }

  const fetchEvents = async () => {
    // Assuming an API to fetch events, for now use static
    setEvents([
      { id: 1, title: 'Garba Dance', desc: 'Traditional dance', date: '2023-10-15' },
    ])
  }

  const fetchSubscribers = async () => {
    // Assuming an API to fetch subscribers, for now use static
    setSubscribers([
      { id: 1, email: 'user@example.com', createdAt: '2023-01-01' },
    ])
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadFile) return
    const formData = new FormData()
    formData.append('file', uploadFile)
    try {
      const res = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        alert('Photo uploaded successfully')
        fetchPhotos()
      } else {
        alert('Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
    }
  }

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Assuming an API to add event
      alert('Event added (placeholder)')
      setNewEvent({ title: '', desc: '', date: '' })
      fetchEvents()
    } catch (error) {
      console.error('Add event error:', error)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Manage Gallery</h2>
        <form onSubmit={handleUpload} className="mb-4">
          <input
            type="file"
            onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
            className="mb-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Upload Photo</button>
        </form>
        <div className="grid grid-cols-4 gap-4">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.caption} className="w-full h-24 object-cover rounded" />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>
        <form onSubmit={handleAddEvent} className="mb-4 space-y-2">
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={newEvent.desc}
            onChange={(e) => setNewEvent({ ...newEvent, desc: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Event</button>
        </form>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="border p-2 mb-2 rounded">
              {event.title} - {event.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Subscribers</h2>
        <ul>
          {subscribers.map((sub) => (
            <li key={sub.id} className="border p-2 mb-2 rounded">
              {sub.email} - {sub.createdAt}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Admin
