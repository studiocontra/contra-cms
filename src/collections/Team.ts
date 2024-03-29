import { CollectionConfig } from "payload/types";

const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'featured'],
    group: 'Colecciones'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        condition: (data, {featured}) => Boolean(featured)
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'image',
          label: 'Image member',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (data, { featured }) => Boolean(featured),
          },
        },
      ],
    },
  ]
}

export default Team