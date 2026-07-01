# Sanity Studio (one-time setup)

This folder is the **editor** the client uses to update site content. Setup is **one time, by a developer (you)**. After that, the client never touches this folder.

## Steps (10 minutes)

```bash
cd sanity
npm install
npx sanity login        # creates / signs into a Sanity account (free)
npx sanity init --env   # creates the project on Sanity's side
                        # When prompted:
                        #   - Project name: "Unfiltered"
                        #   - Dataset: "production"
                        #   - Output path: . (this folder)
                        # It will write the projectId into sanity.config.js
npx sanity deploy       # asks for a subdomain (e.g. "unfiltered")
                        # gives you https://unfiltered.sanity.studio
```

Hand the client the URL and an invite (Sanity dashboard → Members → Invite by email).

## Wire it to the site

After `npx sanity init`, copy the **project ID** that appears in `sanity.config.js`, then in Vercel:

- `SANITY_PROJECT_ID=<that id>` (Production + Preview)
- `SANITY_DATASET=production`

Redeploy. The site's `/api/cms` endpoint will start serving real content from Sanity instead of the static fallbacks.

## Seeding the first batch of content

When the client logs in for the first time the Studio is empty. Either:
1. Have them fill it in (it'll match the existing site layout — guided by the schema fields).
2. Or run `npx sanity dataset import seed.ndjson` to pre-fill it with the current site copy. (Generate a seed file once we know the projectId.)

## What if Sanity is down or env vars aren't set?

The site falls back to the static HTML defaults that ship in `index.html`. Nothing breaks. The client just sees the original copy until Sanity is reachable again.
