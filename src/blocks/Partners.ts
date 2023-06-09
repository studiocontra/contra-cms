import { Block } from "payload/types";

const Partners: Block = {
  slug: 'partners',
  labels: {
    singular: 'Partners Block',
    plural: 'Partners Blocks'
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'partners',
      label: 'Partners',
      type: 'array',
      fields: [
        {
          name: 'partner',
          label: 'Partner',
          type: 'upload',
          relationTo: 'media'
        }
      ]
    }
  ]
}

export default Partners