import { CollectionConfig } from "payload/types";

const Awards: CollectionConfig = {
  slug: 'awards',
  admin: {
    useAsTitle: 'project',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'project',
      label: 'Project',
      type: 'text'
    },
    {
      name: 'award',
      label: 'Award',
      type: 'text'
    },
    {
      name: 'platform',
      label: 'Platform',
      type: 'relationship',
      relationTo: 'platforms'
    }
  ]
}

export default Awards