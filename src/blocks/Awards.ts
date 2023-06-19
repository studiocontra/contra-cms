import { Block } from "payload/types";

const Awards: Block = {
  slug: 'awards',
  labels: {
    singular: 'Awards Block',
    plural: 'Awards Blocks'
  },
  fields: [
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'textarea',
      localized: true,
      required: true
    },
    {
      name: 'awards',
      type: 'relationship',
      relationTo: 'awards',
      hasMany: true
    }
  ]
}

export default Awards