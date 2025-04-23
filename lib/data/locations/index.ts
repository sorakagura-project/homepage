import { odakaLocation } from './odaka'
import { yokozeLocation } from './yokoze'
import { hanegiLocation } from './hanegi'
import { Base, Experience, Story, Folklore, Access, Project } from '@/lib/types/location'

export type  { Base, Experience, Story, Folklore, Access, Project }

export const locationsData = {
  'odaka': odakaLocation,
  'yokoze': yokozeLocation,
  'hanegi': hanegiLocation
} as const

export type LocationId = keyof typeof locationsData