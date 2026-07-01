// Site-wide editable copy: hero headline + lede, marquee strip, batch story.
// This is a "singleton" — there's only ever one document of this type.

export default {
  name: 'settings',
  title: 'Site copy',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'marquee', title: 'Marquee strip' },
    { name: 'batch', title: 'Small-batch story' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    // Hero
    { name: 'heroLine1', title: 'Headline line 1', type: 'string', group: 'hero', description: 'e.g. "Real"' },
    { name: 'heroLine2', title: 'Headline line 2', type: 'string', group: 'hero', description: 'e.g. "ingredients."' },
    { name: 'heroLine3', title: 'Headline italic line', type: 'string', group: 'hero', description: 'e.g. "No filter." (shown in orange italic)' },
    { name: 'heroLede', title: 'Sub-headline paragraph', type: 'text', rows: 3, group: 'hero' },
    { name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true }, group: 'hero' },
    { name: 'heroCtaPrimary', title: 'Primary CTA label', type: 'string', group: 'hero' },
    { name: 'heroCtaSecondary', title: 'Secondary CTA label', type: 'string', group: 'hero' },

    // Marquee
    { name: 'marqueeHighlight', title: 'Marquee highlight', type: 'string', group: 'marquee', description: 'e.g. "Free Shipping"' },
    { name: 'marqueeRest', title: 'Marquee rest', type: 'string', group: 'marquee' },
    { name: 'marqueeSuffix', title: 'Marquee suffix', type: 'string', group: 'marquee' },

    // Batch
    { name: 'batchEyebrow', title: 'Batch eyebrow', type: 'string', group: 'batch' },
    { name: 'batchTitleA', title: 'Batch title line 1', type: 'string', group: 'batch' },
    { name: 'batchTitleB', title: 'Batch title italic', type: 'string', group: 'batch' },
    { name: 'batchBody', title: 'Batch body', type: 'text', rows: 5, group: 'batch' },
    { name: 'batchImage', title: 'Batch image', type: 'image', options: { hotspot: true }, group: 'batch' },

    // Footer
    { name: 'footerTagline', title: 'Footer tagline', type: 'text', rows: 3, group: 'footer' },
    { name: 'contactEmail', title: 'Contact email', type: 'string', group: 'footer' },
  ],
  preview: { prepare: () => ({ title: 'Site copy' }) },
};
