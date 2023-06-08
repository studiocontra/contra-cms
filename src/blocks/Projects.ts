import { Block } from "payload/types";

const Projects: Block = {
  slug: 'projects',
  labels: {
    singular: 'Projects',
    plural: 'Projects',
  },
  fields: [
    {
      name: 'featuredProjects',
      label: 'Featured Projects',
      type: 'relationship',
      relationTo: 'projects',
    }
  ]
}

export default Projects