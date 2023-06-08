import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Updates from './collections/Updates';
import Members from './collections/Members';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL, process.env.PAYLOAD_PUBLIC_SITE_URL],
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL, process.env.PAYLOAD_PUBLIC_SITE_URL],
  admin: {
    user: Users.slug,
  },

  collections: [
    Users,
    Media,
    Updates,
    Members
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  localization: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    fallback: true
  },

  graphQL: {
    disable: true,
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  telemetry: false
})
