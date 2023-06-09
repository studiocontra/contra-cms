import { Block } from "payload/types";

const Members: Block = {
  slug: 'members',
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks'
  },
  fields: [
    {
      name: 'headline',
      label: 'Headilne',
      type: 'text',
      localized: true,
      required: true
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'textarea',
      localized: true,
      required: true
    },
    {
      name: 'team',
      label: 'Team',
      type: 'relationship',
      relationTo: 'team',
      filterOptions: {
        featured: {equals: true}
      },
      hasMany: true
    },
    {
      name: 'membersNotFeatured',
      label: 'More team',
      type: 'relationship',
      relationTo: 'team',
      filterOptions: {
        featured: {equals: false}
      },
      hasMany: true
    }
  ]
}

export default Members