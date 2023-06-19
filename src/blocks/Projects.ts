import { Block } from "payload/types";

const Projects: Block = {
  slug: 'projects',
  labels: {
    singular: 'Projects Block',
    plural: 'Projects Blocks',
  },
  fields: [
    {
      name: 'featuredProjects',
      label: 'Featured Projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      filterOptions: {
        featured: { equals: true },
      },
    },
    {
      name: 'moreProjects',
      label: 'More Projects',
      type: 'checkbox',
    },
    {
      name: 'notFeaturedProjects',
      label: 'More Projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      filterOptions: {
        featured: { equals: false },
      },
      admin: {
        condition: (data, { moreProjects }) => Boolean(moreProjects),
      }
    },
  ]
}

export default Projects