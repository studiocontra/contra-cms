import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'archived',
      type: 'checkbox'
    }
  ]
}

export default Categories