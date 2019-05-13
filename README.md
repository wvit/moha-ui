# moha-ui是一个react组件包（因为暂时数量不多，所以称之为包）

import { colorPicker,Dialog,Title,Tabber,util } from 'moha-ui'

## ColorPicker
### 基于react-color

  <ColorPicker
    type='BlockPicker'
    color={ String }
    onChange={ Event }
  />

## Dialog

  <Dialog
    visible={ Boolearn }
    onClose={ Event }
    onAffirm={ Event }
  />

## Title

<Title titleName=" String " />

## Tabber 

  const tabberConfig = [
      { name: '首页', path: '/index', component: Index },
      { name: '学习', path: '/learn', component: Learn },
      { name: '发现', path: '/find', component: Find },
      { name: '我的', path: '/user', component: User }
  ]

  <Tabber tabberConfig={tabberConfig} />

## util是工具包