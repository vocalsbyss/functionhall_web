import React from 'react'
import Image from 'next/image'

interface Photo {
  id: number
  url: string
  caption?: string
}

interface GalleryGridProps {
  photos: Photo[]
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={photo.url}
            alt={photo.caption || 'Gallery photo'}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {photo.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid
