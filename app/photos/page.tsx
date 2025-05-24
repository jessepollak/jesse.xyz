import Link from "next/link"
import Image from "next/image"

export default function Photos() {
  // Array of photos with their paths and alt text
  const photos = [
    {
      id: 1,
      src: "/photos/courtyard.jpg",
      alt: "Courtyard with ivy-covered walls and a building with arched windows",
    },
    {
      id: 2,
      src: "/photos/library.jpg",
      alt: "Interior of a multi-level library with wooden bookshelves",
    },
    {
      id: 3,
      src: "/photos/rocky-coast.jpg",
      alt: "Rocky coastline with ocean waves and sunlight",
    },
    {
      id: 4,
      src: "/photos/wooden-structure.jpg",
      alt: "Wooden triangular structure against a cloudy sky",
    },
    {
      id: 5,
      src: "/photos/twisted-trees.jpg",
      alt: "Landscape with twisted, moss-covered trees on a grassy hillside",
    },
    {
      id: 6,
      src: "/photos/beach-piggyback.jpg",
      alt: "Two people at the beach, one giving the other a piggyback ride",
    },
    {
      id: 7,
      src: "/photos/wooden-sign.jpg",
      alt: "Wooden sign reading 'PLEASE PEOPLE & DOG DRIVE CROSSING SLOWLY' with a ONE WAY arrow",
    },
    {
      id: 8,
      src: "/photos/forest-reading.jpg",
      alt: "Person in a blue hat reading a small yellow book while sitting on a forest floor",
    },
    {
      id: 9,
      src: "/photos/sunset-portrait.jpg",
      alt: "Person in a floral dress holding glasses during golden hour with sunset in the background",
    },
    {
      id: 10,
      src: "/photos/tree-silhouette.jpg",
      alt: "Silhouette of tree branches against a deep blue sky with sun creating a starburst effect",
    },
    {
      id: 11,
      src: "/photos/art-gallery.jpg",
      alt: "Person viewing an art installation with hanging cords in a minimalist gallery space",
    },
    {
      id: 12,
      src: "/photos/dog-on-roof.jpg",
      alt: "Small dog barking from the edge of a rooftop against a blue sky with clouds",
    },
    {
      id: 13,
      src: "/photos/beach-soldiers.jpg",
      alt: "Two soldiers in camouflage uniforms standing on a beach looking out at turquoise waters",
    },
    {
      id: 14,
      src: "/photos/wall-planters.jpg",
      alt: "Succulent plants growing in repurposed plastic bottles mounted on a white brick wall",
    },
    {
      id: 15,
      src: "/photos/rustic-shed.jpg",
      alt: "Weathered wooden shed with blue-tinted siding, a red metal roof, and a wooden door with colorful curtain",
    },
    {
      id: 16,
      src: "/photos/unam-library.jpg",
      alt: "UNAM Central Library building with murals on its facade against a dramatic cloudy sky",
    },
    {
      id: 17,
      src: "/photos/london-passage.jpg",
      alt: "View through a brick-lined passageway towards the Royal Exchange building in London",
    },
    {
      id: 18,
      src: "/photos/tulip-field.jpg",
      alt: "Field of orange tulips with one white tulip standing out, urban buildings in the background",
    },
    {
      id: 19,
      src: "/photos/brick-wall-street.jpg",
      alt: "Weathered brick wall along a city street with a small framed item mounted on it",
    },
    {
      id: 20,
      src: "/photos/classical-facade.jpg",
      alt: "Upward view of a classical red brick building with ornate white trim and a sculptural bust",
    },
    {
      id: 21,
      src: "/photos/timber-frame-interior.jpg",
      alt: "Interior of a renovated building with exposed timber beams, brick walls, and large windows",
    },
    {
      id: 22,
      src: "/photos/wall-plant.jpg",
      alt: "Small green plant growing from a crack in a weathered gray concrete wall",
    },
    {
      id: 23,
      src: "/photos/garden-archway.jpg",
      alt: "Garden pathway with metal arches forming a tunnel covered with climbing plants",
    },
  ]

  return (
    <div className="w-full">
      <div className="space-y-8">
        {photos.map((photo) => (
          <div key={photo.id} className="w-full">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1280}
              height={960}
              className="w-full h-auto"
              priority={photo.id === 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
