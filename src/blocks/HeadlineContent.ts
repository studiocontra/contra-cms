import { Block } from 'payload/types'

const HeadlineContent: Block = {
  slug: 'headline-content',
  labels: {
    singular: 'Headline + Content Block',
    plural: 'Headline + Content Blocks',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true
    }
  ]
}

export default HeadlineContent