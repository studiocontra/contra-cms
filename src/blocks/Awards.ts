import { Block } from "payload/types";

const Awards: Block = {
  slug: 'awards',
  labels: {
    singular: 'Awards Block',
    plural: 'Awards Blocks'
  },
  fields: [
    {
      name: 'awards',
      type: 'relationship',
      relationTo: 'awards',
      hasMany: true
    }
  ]
}

export default Awards