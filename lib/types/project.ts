import type { LucideIcon } from 'lucide-react';

export interface Achievement {
  readonly title: string
  readonly description: string
  readonly date: string
  readonly image?: string // Optional
}

export interface TargetAudience {
  readonly type: string
  readonly description: string
}

export interface SubProject {
  readonly title: string
  readonly description: string
  readonly image: string
}

export interface Event {
  readonly title: string
  readonly date: string
  readonly location: string
  readonly description: string
}

export interface ProjectData {
  readonly title: string
  readonly heroImage: string
  readonly overview: string
  readonly achievements: readonly Achievement[]
  readonly targetAudience: readonly TargetAudience[]
  readonly subProjects: readonly SubProject[]
  readonly discordUrl: string
  readonly upcomingEvents: readonly Event[]
}

export interface NewsItem {
  date: string
  title: string
  content: string
  type: string
  icon: LucideIcon
  location?: string
  participants?: string
}