const contentConfig = {
  pageName: 'goods',
  header: {
    title: '类别列表',
    btnTitle: '新建类别'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', label: '商品名', prop: 'name', width: '150px' },
    { type: 'normal', prop: 'oldPrice', label: '原价', minWidth: '50' },
    { type: 'normal', prop: 'newPrice', label: '现价', minWidth: '50' },
    {
      type: 'custom',
      prop: 'imgUrl',
      label: '商品展示',
      minWidth: '80',
      slotName: 'imgUrl'
    },
    {
      type: 'normal',
      prop: 'inventoryCount',
      label: '剩余库存',
      minWidth: '80'
    },
    { type: 'normal', prop: 'saleCount', label: '已售', minWidth: '60' },
    { type: 'normal', prop: 'favorCount', label: '优惠件数', minWidth: '80' },
    { type: 'normal', prop: 'address', label: '地址', minWidth: '60' },
    {
      type: 'custom',
      prop: 'status',
      label: '状态',
      minWidth: '70',
      slotName: 'status'
    },

    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
