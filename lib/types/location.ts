export interface Base {
  name: string
  description: string
  image: string
  features: string[]
}

export interface Experience {
  title: string
  description: string
  image: string
}

export interface Story {
  title: string
  description: string
  image: string
}

export interface Folklore {
  title: string
  description: string
  stories: Story[]
}

export interface Access {
  address: string
  transportation: string[]
  parking: string
  googleMapsUrl: string
}

export interface Project {
  title: string
  description: string
  image: string
}