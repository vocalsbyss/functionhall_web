import React, { useEffect, useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'

interface Photo {
  id: number
  url: string
  caption?: string
}

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error('Failed to fetch gallery photos:', err))
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Anjani Gallery</h1>
      <GalleryGrid photos={photos} />
    </div>
  )
}

export default Gallery
