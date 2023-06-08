import { Field } from 'payload/types'

const link: Field = {
  type: 'row',
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'url',
      label: 'Custom URL',
      type: 'text',
      required: true,
    },
    {
      name: 'target',
      type: 'checkbox',
      label: 'Open in new tab',
    },
  ],
}

export default link