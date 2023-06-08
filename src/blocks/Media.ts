import { Block } from 'payload/types'

const Media: Block = {
  slug: 'media',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks'
  },
  fields: [
    {
      name: 'isVimeo',
      label: 'Vimeo',
      type: 'checkbox',
      defaultValue: false
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
        condition: (data, { isVimeo }) => Boolean(!isVimeo),
      }
    },
    {
      name: 'vimeo',
      label: 'Vimeo',
      type: 'text',
      admin: {
        condition: (data, { isVimeo }) => Boolean(isVimeo),
      }
    }
  ]
}

export default Media