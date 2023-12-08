import {
  Home,
  Users,
  Bookmark,
  HelpCircle,
  User,
  Folder,
  Tag,
} from 'lucide-react'

export const sidebarLinks = [
  {
    id: 1,
    name: 'Home',
    icon: Home,
    href: '/',
  },
  {
    id: 2,
    name: 'Community',
    icon: Users,
    href: '/community',
  },
  {
    id: 3,
    name: 'Collections',
    icon: Bookmark,
    href: '/collections',
  },
  {
    id: 4,
    name: 'Find Jobs',
    icon: Folder,
    href: '/find-jobs',
  },
  {
    id: 5,
    name: 'Tags',
    icon: Tag,
    href: '/tags',
  },
  {
    id: 6,
    name: 'Profile',
    icon: User,
    href: '/profile',
  },
  {
    id: 7,
    name: 'Ask a Question',
    icon: HelpCircle,
    href: '/ask-question',
  },
]
