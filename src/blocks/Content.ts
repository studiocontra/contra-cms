import { Block } from "payload/types";

const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks'
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true,
      admin: {
        elements: [
          'h2',
          'h3',
          'h4',
          'link',
          'blockquote',
          'ol',
          'ul'
        ]
      }
    }
  ]
}

export default Content