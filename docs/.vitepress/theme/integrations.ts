import type { DefaultTheme } from 'vitepress'

export interface Integration extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  mastodon?: string
  twitter?: string
  title?: string
  org?: string
  desc?: string
}

function createLinks(i: Integration): Integration {
  i.links = [{ icon: 'github', link: `https://github.com/${i.github}` }]
  if (i.mastodon)
    i.links.push({ icon: 'mastodon', link: `https://elk.zone/m.webtoo.ls/@${i.mastodon}` })

  if (i.twitter)
    i.links.push({ icon: 'twitter', link: `https://twitter.com/${i.twitter}` })

  return i
}

const plainIntegrations = [
  {
    avatar: '/integration-logos/redis.svg',
    name: 'Redis',
    github: 'redis/redis',
    twitter: 'redis',
    title: 'Redis is an in-memory data structure store, used as a database, cache, and message broker.',
  },
  {
    avatar: '/integration-logos/mysql.svg',
    name: 'MySQL',
    github: 'mysql/mysql-server',
    twitter: 'mysql',
    title: 'MySQL is an open-source relational database management system.',
  },
  {
    avatar: '/integration-logos/postgresql.svg',
    name: 'PostgreSQL',
    github: 'postgresql/postgresql',
    twitter: 'postgresql',
    title: 'PostgreSQL is a powerful, open source object-relational database system.',
  },
  {
    avatar: '/integration-logos/sqlite.svg',
    name: 'SQLite',
    github: 'sqlite/sqlite',
    twitter: 'sqliteproject',
    title: 'SQLite is a small, fast, self-contained, high-reliability, full-featured, SQL database engine.',
  },
  {
    avatar: '/integration-logos/mongodb.svg',
    name: 'MongoDB',
    github: 'mongodb/mongo',
    twitter: 'mongodb',
    title: 'MongoDB is a general purpose, document-based, distributed database built for modern application and for the cloud era.',
  },
]

const integrations = plainIntegrations.map(i => createLinks(i))

export { integrations }
