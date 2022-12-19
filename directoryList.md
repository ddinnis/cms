|-- undefined
    |-- .editorconfig
    |-- .env
    |-- .env.development
    |-- .env.production
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc.json
    |-- auto-imports.d.ts
    |-- commitlint.config.js
    |-- components.d.ts
    |-- env.d.ts
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.config.json
    |-- tsconfig.json
    |-- vite.config.ts
    |-- .husky
    |   |-- commit-msg
    |   |-- pre-commit
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
    |-- .vscode
    |   |-- extensions.json
    |   |-- settings.json
    |-- public
    |   |-- favicon.ico
    |-- src
        |-- App.vue
        |-- main.ts
        |-- assets
        |   |-- css
        |   |   |-- common.less
        |   |   |-- index.less
        |   |   |-- reset.less
        |   |-- img
        |       |-- login-bg.svg
        |       |-- logo.svg
        |-- components
        |   |-- main-header
        |   |   |-- main-header.vue
        |   |   |-- c-cpns
        |   |       |-- header-crumb.vue
        |   |       |-- header-info.vue
        |   |-- main-menu
        |   |   |-- main-menu.vue
        |   |-- page-content
        |   |   |-- page-content.vue
        |   |-- page-echarts
        |   |   |-- index.ts
        |   |   |-- data
        |   |   |   |-- china.json
        |   |   |-- src
        |   |   |   |-- bar-echart.vue
        |   |   |   |-- base-echart.vue
        |   |   |   |-- line-echart.vue
        |   |   |   |-- map-echart.vue
        |   |   |   |-- pie-echart.vue
        |   |   |   |-- rose-echart.vue
        |   |   |-- types
        |   |   |   |-- index.ts
        |   |   |-- utils
        |   |       |-- convert-data.ts
        |   |       |-- coordinate-data.ts
        |   |-- page-modal
        |   |   |-- page-modal.vue
        |   |   |-- type.ts
        |   |-- page-search
        |       |-- page-search.vue
        |-- global
        |   |-- constants.ts
        |   |-- register-icons.ts
        |-- hooks
        |   |-- usePageContent.ts
        |   |-- usePageModal.ts
        |   |-- usePermissions.ts
        |-- router
        |   |-- index.ts
        |   |-- login
        |   |-- main
        |       |-- analysis
        |       |   |-- dashboard
        |       |   |   |-- dashboard.ts
        |       |   |-- overview
        |       |       |-- overview.ts
        |       |-- product
        |       |   |-- category
        |       |   |   |-- category.ts
        |       |   |-- goods
        |       |       |-- goods.ts
        |       |-- story
        |       |   |-- chat
        |       |   |   |-- chat.ts
        |       |   |-- list
        |       |       |-- list.ts
        |       |-- system
        |           |-- department
        |           |   |-- department.ts
        |           |-- menu
        |           |   |-- menu.ts
        |           |-- role
        |           |   |-- role.ts
        |           |-- user
        |               |-- user.ts
        |-- service
        |   |-- index.ts
        |   |-- config
        |   |   |-- index.ts
        |   |-- login
        |   |   |-- login.ts
        |   |-- main
        |   |   |-- main.ts
        |   |   |-- analysis
        |   |   |   |-- analysis.ts
        |   |   |-- chat
        |   |   |   |-- chat.ts
        |   |   |-- product
        |   |   |   |-- ptoduct.ts
        |   |   |-- system
        |   |       |-- system.ts
        |   |-- request
        |       |-- index.ts
        |       |-- type.ts
        |-- store
        |   |-- counter.ts
        |   |-- index.ts
        |   |-- login
        |   |   |-- login.ts
        |   |-- main
        |       |-- main.ts
        |       |-- analysis
        |       |   |-- analysis.ts
        |       |-- system
        |           |-- system.ts
        |           |-- type.ts
        |-- types
        |   |-- index.ts
        |   |-- login.ts
        |-- utils
        |   |-- cache.ts
        |   |-- format.ts
        |   |-- map-menus.ts
        |-- views
            |-- login
            |   |-- Login.vue
            |   |-- c-cpns
            |       |-- login-panel.vue
            |       |-- pane-account.vue
            |       |-- pane-phone.vue
            |-- main
            |   |-- main.vue
            |   |-- analysis
            |   |   |-- dashboard
            |   |   |   |-- dashboard.vue
            |   |   |   |-- c-cpns
            |   |   |       |-- chart-card
            |   |   |       |   |-- chart-card.vue
            |   |   |       |-- count-card
            |   |   |           |-- count-card.vue
            |   |   |-- overview
            |   |       |-- overview.vue
            |   |-- product
            |   |   |-- category
            |   |   |   |-- category.vue
            |   |   |   |-- config
            |   |   |       |-- content.config.ts
            |   |   |       |-- modal.config.ts
            |   |   |       |-- search.config.ts
            |   |   |-- goods
            |   |       |-- goods.vue
            |   |       |-- config
            |   |           |-- content.config.ts
            |   |           |-- modal.config.ts
            |   |-- story
            |   |   |-- chat
            |   |   |   |-- chat.vue
            |   |   |-- list
            |   |       |-- list.vue
            |   |       |-- config
            |   |           |-- content.config.ts
            |   |-- system
            |       |-- department
            |       |   |-- department.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |       |-- modal.config.ts
            |       |       |-- search.config.ts
            |       |-- menu
            |       |   |-- menu.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |-- role
            |       |   |-- role.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |       |-- modal.config.ts
            |       |       |-- search.config.ts
            |       |-- user
            |           |-- user.vue
            |           |-- c-cpns
            |               |-- user-content.vue
            |               |-- user-modal.vue
            |               |-- user-search.vue
            |-- not-found
                |-- NotFound.vue
