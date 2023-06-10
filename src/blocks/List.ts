import { Block } from 'payload/types'

const List: Block = {
  slug: 'block',
  labels: {
    singular: 'List',
    plural: 'List'
  },
  fields: [
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      fields: [
        {
          name: 'leadText',
          label: 'Lead text',
          type: 'text',
          localized: true,
          required: true
        },
        {
          name: 'text',
          label: 'Text',
          type: 'text',
          localized: true,
          required: true
        }
      ]
    }
  ]
}

export default List