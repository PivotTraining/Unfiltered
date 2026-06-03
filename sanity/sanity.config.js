// Sanity Studio config. After `npm install` in this folder, run `npx sanity init`
// (creates the project on sanity.io and writes projectId/dataset here), then
// `npx sanity deploy` to host the Studio at <yourname>.sanity.studio.
//
// The site reads these same projectId/dataset values at runtime — make sure
// you also set SANITY_PROJECT_ID and SANITY_DATASET in Vercel env vars.

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'unfiltered',
  title: 'Unfiltered',

  // These get filled in by `npx sanity init`. Don't edit by hand.
  projectId: 'REPLACE_ME',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
