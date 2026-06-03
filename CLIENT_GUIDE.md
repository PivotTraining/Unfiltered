# Editing the Unfiltered site — a guide for you

This is for **you, the brand owner**. You don't need to know what HTML, GitHub, or Vercel are. You only need to know two things:

1. **Your editor URL**: `https://unfiltered.sanity.studio` *(your developer will give you the real URL after setup)*
2. **Your login**: the email address you got the invite at

That's it. Everything below shows you what you'll see and what each thing does.

---

## What you can change

You control all of these from the editor — no developer needed:

| Section of the site | What you can edit |
|---|---|
| **Hero headline** ("Real ingredients. No filter.") | The 3 lines of text + the sub-headline + the hero photo |
| **Marquee strip** (the dark stripe under the hero) | Highlight text + the message |
| **Products** (Glow, Immunity, Citrus Fire, Reset) | Name, ingredient list, tag line, badge, photo |
| **FAQ** | Add, remove, reorder, rewrite any question and answer |
| **Stories / Journal** | Add new stories, edit existing ones, change cover photos |
| **Footer tagline** + contact email | Anything in the dark footer |

You **can't** (yet) change: prices, subscription discounts, or the technical guts. Those stay in code on purpose so an accidental click can't put you out of business. Tell your developer if you want to change a price — it's a 2-minute change.

---

## The five things you'll do most

### 1. Log in

1. Open `https://unfiltered.sanity.studio` in any browser. Bookmark it.
2. Click **Continue with email** (or whichever provider your invite uses).
3. You'll see the editor — a list of content types on the left, the editing area on the right.

### 2. Change the hero headline

1. Left sidebar → click **Site copy**.
2. The top section is **Hero**. Click on any field — "Headline line 1", "Headline line 2", etc — and type what you want.
3. Bottom-right: hit the **Publish** button.
4. Wait ~30 seconds, then refresh `https://unfiltered.shop` in another tab — your new headline is live.

> **Heads up**: line 3 ("No filter.") shows on the site in italic orange. Lines 1 and 2 are the regular cream color. Plan your copy around that.

### 3. Edit a product

1. Left sidebar → click **Product**.
2. Pick the product (Glow, Immunity, Citrus Fire, or Reset).
3. Change the name, the ingredients line, the badge ("Bestseller", "New", etc.), or upload a new photo.
4. **Publish**. Refresh the site.

> **Important**: don't change the **SKU** field. That's the connection to Stripe payments — if you change it, that product can't be bought until your developer updates Stripe to match.

### 4. Add or rewrite an FAQ

1. Left sidebar → click **FAQ item**.
2. Click **+ Create** in the top right to add a new question, or click an existing one to edit.
3. Type the question and answer. The **Display order** number controls the position (lower = higher on the page).
4. **Publish**. Done.

### 5. Add a new journal story

1. Left sidebar → click **Story**.
2. **+ Create** → fill in:
   - **Title** — the story headline
   - **Category** — e.g. "Glow", "Immunity", "Ritual" — shows as the tag above the title
   - **Card blurb** — the short paragraph on the journal index page
   - **Big letter** — single character shown when there's no cover image (e.g. "G")
   - **Cover image** — optional, replaces the big letter
   - **Card background tint** — picks the color of the card on the index
   - **Full story body** — write the article itself with proper formatting (headings, bold, links)
   - **Display order** — lower = appears first
3. **Publish**. Story is live.

---

## The Publish button — a few rules

- Nothing goes live until you click **Publish**. You can save drafts, walk away, and come back.
- Once you click Publish, the change is live within ~30 seconds.
- Hit Publish by accident? Just edit and re-publish — no version is "broken." The site always shows whatever the last Published version is.

## When something looks wrong

If the site doesn't reflect your edit after a minute:

1. **Hard refresh**: Cmd+Option+R (Mac) or Ctrl+F5 (Windows) — bypasses your browser's cache.
2. Still wrong? Open `https://unfiltered.shop` in a private/incognito window.
3. Still wrong? Email your developer. The fallback is the editor shows you a small green checkmark when something's been published successfully — if you didn't see one, the publish didn't go through.

## What if Sanity is down?

The site is built so that if Sanity has an outage, **the site keeps showing the last version of the content that was hard-coded by your developer**. So even if the editor is unreachable, customers see a working site. You won't ever see "site down" because the CMS is down.

## Inviting other editors

If you want to add a team member (e.g. social media manager, copywriter):

1. Go to `https://sanity.io/manage` and sign in with the same email
2. Click your project (Unfiltered) → **Members** → **Invite**
3. Enter their email; they get an invite to the same editor

You can give them **Editor** access (can publish), **Viewer** access (can see but not edit), or **Administrator** (can also invite others).

---

## What if you want to redesign the site?

The editor is **content**, not **design**. If you want to change the layout, colors, fonts, or structure, that's a developer change. Ping your developer with what you want and they can quote you.

If you want to rewrite all the words and swap all the photos? You can do that yourself, today, with the steps above.
