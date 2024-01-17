import type { DefaultTheme } from 'vitepress'

export interface CoreTeam extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  twitter: string
  discord?: string
  youtube?: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]

  if (tm.discord)
    tm.links.push({ icon: 'discord', link: tm.discord })

  if (tm.youtube)
    tm.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${tm.youtube}` })

  tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` })

    ; (tm as any).teamMember = true

  return tm
}

const plainTeamMembers = [
  {
    avatar: '/team-avatars/paol-imi.svg',
    name: 'Paolo longo',
    github: 'paol-imi',
    youtube: '/',
    discord: '/',
    twitter: '/',
    sponsor: 'https://github.com/sponsors/paol-imi',
    title: 'A fanatical open sourceror, working',
    org: 'Ermes-Labs',
    orgLink: 'https://ermes-labs.github.io/docs/',
    desc: 'Core team member of Ermes-Labs',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
