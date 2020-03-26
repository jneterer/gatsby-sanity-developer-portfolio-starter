export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'selected',
      title: 'Selected',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'isViewAll',
      title: 'Is View All',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ]
}
