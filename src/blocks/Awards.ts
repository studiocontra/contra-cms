import { Block } from "payload/types";

const Awards: Block = {
  slug: 'awards',
  labels: {
    singular: 'Awards',
    plural: 'Awards'
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