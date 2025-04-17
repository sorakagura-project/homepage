import { odakaLocation } from './odaka'
import { yokozeLocation } from './yokoze'
import { Base, Experience, Story, Folklore, Access, Project } from '@/lib/types/location'

export type  { Base, Experience, Story, Folklore, Access, Project }

export const locationsData = {
  'odaka': odakaLocation,
  'yokoze': yokozeLocation
} as const

export type LocationId = keyof typeof locationsData