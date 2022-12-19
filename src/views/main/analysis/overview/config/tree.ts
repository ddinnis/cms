const tree = `
├── package-lock.json
├── package.json
├── public
|  └── favicon.ico
├── README.md
├── src
|  ├── App.vue
|  ├── assets
|  |  ├── css
|  |  |  ├── common.less
|  |  |  ├── index.less
|  |  |  └── reset.less
|  |  └── img
|  |     ├── login-bg.svg
|  |     └── logo.svg
|  ├── components
|  |  ├── main-header
|  |  |  ├── c-cpns
|  |  |  |  ├── header-crumb.vue
|  |  |  |  └── header-info.vue
|  |  |  └── main-header.vue
|  |  ├── main-menu
|  |  |  └── main-menu.vue
|  |  ├── page-content
|  |  |  └── page-content.vue
|  |  ├── page-echarts
|  |  |  ├── data
|  |  |  |  └── china.json
|  |  |  ├── index.ts
|  |  |  ├── src
|  |  |  |  ├── bar-echart.vue
|  |  |  |  ├── base-echart.vue
|  |  |  |  ├── line-echart.vue
|  |  |  |  ├── map-echart.vue
|  |  |  |  ├── pie-echart.vue
|  |  |  |  └── rose-echart.vue
|  |  |  ├── types
|  |  |  |  └── index.ts
|  |  |  └── utils
|  |  |     ├── convert-data.ts
|  |  |     └── coordinate-data.ts
|  |  ├── page-modal
|  |  |  ├── page-modal.vue
|  |  |  └── type.ts
|  |  └── page-search
|  |     └── page-search.vue
|  ├── global
|  |  ├── constants.ts
|  |  └── register-icons.ts
|  ├── hooks
|  |  ├── usePageContent.ts
|  |  ├── usePageModal.ts
|  |  └── usePermissions.ts
|  ├── main.ts
|  ├── router
|  |  ├── index.ts
|  |  ├── login
|  |  └── main
|  |     ├── analysis
|  |     |  ├── dashboard
|  |     |  |  └── dashboard.ts
|  |     |  └── overview
|  |     |     └── overview.ts
|  |     ├── product
|  |     |  ├── category
|  |     |  |  └── category.ts
|  |     |  └── goods
|  |     |     └── goods.ts
|  |     ├── story
|  |     |  ├── chat
|  |     |  |  └── chat.ts
|  |     |  └── list
|  |     |     └── list.ts
|  |     └── system
|  |        ├── department
|  |        |  └── department.ts
|  |        ├── menu
|  |        |  └── menu.ts
|  |        ├── role
|  |        |  └── role.ts
|  |        └── user
|  |           └── user.ts
|  ├── service
|  |  ├── config
|  |  |  └── index.ts
|  |  ├── index.ts
|  |  ├── login
|  |  |  └── login.ts
|  |  ├── main
|  |  |  ├── analysis
|  |  |  |  └── analysis.ts
|  |  |  ├── chat
|  |  |  |  └── chat.ts
|  |  |  ├── main.ts
|  |  |  ├── product
|  |  |  |  └── ptoduct.ts
|  |  |  └── system
|  |  |     └── system.ts
|  |  └── request
|  |     ├── index.ts
|  |     └── type.ts
|  ├── store
|  |  ├── counter.ts
|  |  ├── index.ts
|  |  ├── login
|  |  |  └── login.ts
|  |  └── main
|  |     ├── analysis
|  |     |  └── analysis.ts
|  |     ├── main.ts
|  |     └── system
|  |        ├── system.ts
|  |        └── type.ts
|  ├── types
|  |  ├── index.ts
|  |  └── login.ts
|  ├── utils
|  |  ├── cache.ts
|  |  ├── format.ts
|  |  └── map-menus.ts
|  └── views
|     ├── login
|     |  ├── c-cpns
|     |  |  ├── login-panel.vue
|     |  |  ├── pane-account.vue
|     |  |  └── pane-phone.vue
|     |  └── Login.vue
|     ├── main
|     |  ├── analysis
|     |  |  ├── dashboard
|     |  |  |  ├── c-cpns
|     |  |  |  |  ├── chart-card
|     |  |  |  |  |  └── chart-card.vue
|     |  |  |  |  └── count-card
|     |  |  |  |     └── count-card.vue
|     |  |  |  └── dashboard.vue
|     |  |  └── overview
|     |  |     └── overview.vue
|     |  ├── main.vue
|     |  ├── product
|     |  |  ├── category
|     |  |  |  ├── category.vue
|     |  |  |  └── config
|     |  |  |     ├── content.config.ts
|     |  |  |     ├── modal.config.ts
|     |  |  |     └── search.config.ts
|     |  |  └── goods
|     |  |     ├── config
|     |  |     |  ├── content.config.ts
|     |  |     |  └── modal.config.ts
|     |  |     └── goods.vue
|     |  ├── story
|     |  |  ├── chat
|     |  |  |  └── chat.vue
|     |  |  └── list
|     |  |     ├── config
|     |  |     |  └── content.config.ts
|     |  |     └── list.vue
|     |  └── system
|     |     ├── department
|     |     |  ├── config
|     |     |  |  ├── content.config.ts
|     |     |  |  ├── modal.config.ts
|     |     |  |  └── search.config.ts
|     |     |  └── department.vue
|     |     ├── menu
|     |     |  ├── config
|     |     |  |  └── content.config.ts
|     |     |  └── menu.vue
|     |     ├── role
|     |     |  ├── config
|     |     |  |  ├── content.config.ts
|     |     |  |  ├── modal.config.ts
|     |     |  |  └── search.config.ts
|     |     |  └── role.vue
|     |     └── user
|     |        ├── c-cpns
|     |        |  ├── user-content.vue
|     |        |  ├── user-modal.vue
|     |        |  └── user-search.vue
|     |        └── user.vue
|     └── not-found
|        └── NotFound.vue
├── tsconfig.config.json
├── tsconfig.json
└── vite.config.ts
`
export default tree
