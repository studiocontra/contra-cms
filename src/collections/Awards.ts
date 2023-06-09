import { CollectionConfig } from "payload/types";

const Awards: CollectionConfig = {
  slug: 'awards',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      label: 'Platform',
      type: 'text'
    },
    {
      name: 'awards',
      label: 'Awards',
      type: 'array',
      fields: [
        {
          name: 'project',
          type: 'text'
        },
        {
          name: 'award',
          type: 'text',
          localized: true
        }
      ]
    },
  ]
}

export default Awards