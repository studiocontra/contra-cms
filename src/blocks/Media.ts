import { Block } from 'payload/types'

const Media: Block = {
  slug: 'media',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks'
  },
  fields: [
    {
      name: 'isImage',
      label: 'Image',
      type: 'checkbox',
      defaultValue: true
    },
    {
      type: 'row',
      fields: [
        {
          name: 'width',
          label: 'Image width',
          type: 'select',
          options: [
            {
              label: 'One Third',
              value: 'oneThird',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Two Thirds',
              value: 'twoThirds',
            },
            {
              label: 'Full Width',
              value: 'full',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'alignment',
          label: 'Alignment',
          type: 'select',
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Right',
              value: 'right',
            },
          ],
          admin: {
            width: '50%'
          }
        },
      ]
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data, { isImage }) => Boolean(isImage),
      }
    },
    {
      name: 'vimeo',
      label: 'Vimeo',
      type: 'text',
      admin: {
        condition: (data, { isImage }) => Boolean(!isImage),
      }
    }
  ]
}

export default Media