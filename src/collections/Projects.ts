import { CollectionConfig } from "payload/types";
import { Field } from 'payload/types'

import HeroProject from '../blocks/HeroProject'
import Media from '../blocks/Media'

import link from '../fields/link'

const fieldsFeatured: Field = {
  name: 'projectContent',
  type: 'group',
  label: 'Project Content',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        HeroProject,
        Media
      ]
    }
  ],
  admin: {
    condition: (data, { featured }) => Boolean(featured),
  },
}

const fieldsNotFeatured: Field = {
  name: 'projectContent',
  type: 'group',
  label: 'Project Content',
  fields: [
    {
      name: 'images',
      label: 'Slider',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Slide',
          type: 'upload',
          relationTo: 'media'
        }
      ],
    },
  ],
  admin: {
    condition: (data, { featured }) => Boolean(!featured),
  },
}

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'link',
      label: 'Project link',
      type: 'group',
      fields: [
        link
      ],
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Extracto',
      localized: true,
      required: true,
    },
    {
      name: 'preview',
      label: 'Preview image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data, { featured }) => Boolean(featured),
      },
      required: true,
    },
    fieldsFeatured,
    fieldsNotFeatured,
  ]
}

export default Projects