import { Block } from "payload/types";

const Updates: Block = {
  slug: 'updates',
  labels: {
    singular: 'Updates Block',
    plural: 'Updates Blocks',
  },
  fields: [
    {
      name: 'updates',
      type: 'relationship',
      relationTo: 'updates',
      hasMany: true
    }
  ]
}

export default Updates