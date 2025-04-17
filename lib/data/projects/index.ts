import { localStoriesProject } from './local-stories'
import { spectacleProject } from './spectacle'
import { daoProject } from './dao'
import { festivalProject } from './festival'
import { orchestrationProject } from './orchestration'
import { inclusiveProject } from './inclusive'
import { droneAnimateProject } from './drone-animate'
import { ProjectData } from '@/lib/types/project'

export type { ProjectData }

export const projectsData = {
  'local-stories': localStoriesProject,
  'spectacle': spectacleProject,
  'dao': daoProject,
  'festival': festivalProject,
  'orchestration': orchestrationProject,
  'inclusive': inclusiveProject,
  'drone-animate': droneAnimateProject
}

export type ProjectId = keyof typeof projectsData