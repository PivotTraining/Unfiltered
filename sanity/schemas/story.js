// Stories / journal entries. Shown in the "Stories from the press" grid.

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'category', title: 'Category', type: 'string', description: 'e.g. "Glow", "Immunity", "Ritual"' },
    { name: 'blurb', title: 'Card blurb', type: 'text', rows: 3 },
    { name: 'letter', title: 'Big letter', type: 'string', description: 'Single character shown when no image is set. e.g. "G"' },
    { name: 'image', title: 'Cover image', type: 'image', options: { hotspot: true } },
    {
      name: 'background',
      title: 'Card background tint',
      type: 'string',
      options: { list: ['glow', 'imm', 'citrus', 'reset'] },
    },
    { name: 'body', title: 'Full story body', type: 'array', of: [{ type: 'block' }] },
    { name: 'order', title: 'Display order', type: 'number' },
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
};
