import { Block } from "payload/types";

const Projects: Block = {
  slug: 'projects',
  labels: {
    singular: 'Projects Block',
    plural: 'Projects Blocks',
  },
  fields: [
    {
      name: 'isHome',
      label: 'Is home',
      type: 'checkbox',
    },
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      localized: true,
      required: true,
      admin: {
        condition: (data, { isHome }) => Boolean(isHome),
      }
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      localized: true,
      required: true,
      admin: {
        condition: (data, { isHome }) => Boolean(isHome),
      },
    },
    {
      name: 'featuredProjects',
      label: 'Featured Projects',
      type: 'relationship',
      relationTo: 'projects',
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