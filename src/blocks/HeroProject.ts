import { Block } from "payload/dist/fields/config/types";

const HeroProject: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero Blocks'
  },
  fields: [
    {
      name: 'isImage',
      label: 'Image',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'image',
          label: 'Main image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, { isImage }) => Boolean(isImage),
          }
        },
        {
          name: 'vimeo',
          label: 'Vimeo ID',
          type: 'text',
          admin: {
            condition: (data, { isImage }) => Boolean(!isImage),
          }
        }
      ]
    },
    {
      name: 'deliverables',
      label: 'Deliverables',
      type: 'array',
      fields: [
        {
          name: 'deliverable',
          label: 'Deliverable',
          type: 'text',
          localized: true
        }
      ],
      minRows: 1
    },
    {
      name: 'brief',
      label: 'Brief',
      type: 'textarea',
      localized: true
    },
    {
      name: 'solution',
      label: 'Solution',
      type: 'textarea',
      localized: true
    }
  ]
}

export default HeroProject