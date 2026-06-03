// One per shot. SKU is the slug — it MUST match the keys in api/_catalog.js
// (glow, immunity, citrus, reset) so Stripe pricing keeps working.

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Must be one of: glow, immunity, citrus, reset. Wire-mapped to Stripe.',
      validation: (Rule) => Rule.required(),
    },
    { name: 'name', title: 'Product name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'nameItalic', title: 'Italic part of name', type: 'string', description: 'Shown in italic orange. e.g. "Glow"' },
    { name: 'tagLine', title: 'Category tags', type: 'string', description: 'e.g. "Skin Radiance · Anti-Inflammatory"' },
    { name: 'ingredients', title: 'Ingredient line', type: 'string', description: 'e.g. "Apple · Mint · Turmeric · Lime"' },
    { name: 'image', title: 'Product photo', type: 'image', options: { hotspot: true } },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: { list: ['', 'Bestseller', 'New', 'Returns', 'Limited'] },
    },
    { name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'sku', media: 'image' },
  },
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
};
