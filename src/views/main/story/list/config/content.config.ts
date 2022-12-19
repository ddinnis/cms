const contentConfig = {
  pageName: 'story',
  title: '故事列表',
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', prop: 'id', label: '文章ID', minWidth: '100' },
    { type: 'normal', prop: 'title', label: '文章标题', minWidth: '100' },
    { type: 'normal', prop: 'content', label: '文章内容', minWidth: '500' },
    {
      type: 'normal',
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    }
  ]
}

export default contentConfig
