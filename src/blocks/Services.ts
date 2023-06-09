import { Block } from 'payload/types'

const Services: Block = {
  slug: 'services',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks'
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
      name: 'servicesItems',
      label: 'Services Items',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true
        },
        {
          name: 'content',
          type: 'richText',
          localized: true,
          required: true
        }
      ]
    }
  ]
}

export default Services