import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'category',
  header: {
    newTitle: '新建类别',
    editTitle: '编辑类别'
  },
  formItems: [
    {
      type: 'input',
      label: '类别',
      prop: 'name',
      placeholder: '请输入类别'
    }
  ]
}

export default modalConfig
