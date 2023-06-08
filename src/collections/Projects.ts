import { CollectionConfig } from "payload/types";
import link from '../fields/link'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      filterOptions: {
        archived: { equals: false },
      },
      hasMany: true
    },
    {
      name: 'featured',
      type: 'checkbox',
    },
    link
  ]
}

export default Projects