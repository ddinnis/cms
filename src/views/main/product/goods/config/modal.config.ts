import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建类别',
    editTitle: '编辑类别'
  },
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名字'
    },
    {
      prop: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      prop: 'imgUrl',
      type: 'upload',
      label: '商品图片链接',
      placeholder: '请加入商品图片链接'
    },
    {
      prop: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入商品原价'
    },
    {
      prop: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入商品现价'
    },
    {
      prop: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        {
          title: '上架',
          value: 1
        },
        {
          title: '下架',
          value: 2
        }
      ]
    },
    {
      prop: 'inventoryCount',
      type: 'input',
      label: '商品库存件数',
      placeholder: '请输入库存件数'
    },
    {
      prop: 'saleCount',
      type: 'input',
      label: '商品售卖件数',
      placeholder: '请输入商品售卖件数'
    },
    {
      prop: 'favorCount',
      type: 'input',
      label: '商品优惠件数',
      placeholder: '请输入商品优惠件数'
    },
    {
      prop: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    }
  ]
}

export default modalConfig
