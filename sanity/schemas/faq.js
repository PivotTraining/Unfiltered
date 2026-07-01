export default {
  name: 'faq',
  title: 'FAQ item',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
    { name: 'order', title: 'Display order', type: 'number' },
  ],
  preview: { select: { title: 'question' } },
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
};
