# 项目协作说明

## 操作安全要求

- 禁止批量删除文件或目录。
- 不要使用以下命令：
  - `del /s`
  - `rd /s`
  - `rmdir /s`
  - `Remove-Item -Recurse`
  - `rm -rf`
- 需要删除文件时，只能一次删除一个明确路径的文件。
- 如果需要批量删除文件，应停止操作，并请求用户手动删除。

## 用户信息

- 用户姓名：hekang。
- 用户擅长：SQL。

## 项目概览

- 项目目录：`/Users/user_wenjiang/Desktop/pet_care`。
- 项目名称：`pet-care-next`。
- 项目类型：Next.js 单页官网。
- 主要业务：宠物洗护店「毛孩子浴所」展示页，面向宠物主人介绍洗护服务、流程、套餐价格、预约信息、客户评价和门店位置。
- 页面语言：中文。
- 页面定位：高端、温和、可信赖的猫狗分区宠物洗护门店。

## 技术栈

- Next.js：`^16.2.9`
- React：`^19.2.7`
- React DOM：`^19.2.7`
- Tailwind CSS：`^3.4.17`
- ESLint：`^9.39.4`
- PostCSS + Autoprefixer

## 常用命令

- 启动开发服务器：`npm run dev`
- 构建生产版本：`npm run build`
- 启动生产服务：`npm run start`
- 代码检查：`npm run lint`

## 关键文件

- `app/page.js`：主页主体，包含所有页面区块、展示数据、复用组件和预约表单结构。
- `app/layout.js`：全局布局，设置中文语言、页面 metadata，并挂载锚点滚动组件。
- `app/globals.css`：全局样式、动画、表单样式、评价轮播、首屏轮播和移动端细节。
- `app/BookingDateInput.js`：客户端组件，预约日期默认设置为明天。
- `app/AnchorScroller.js`：客户端组件，拦截页面内锚点点击并执行平滑滚动。
- `tailwind.config.js`：Tailwind 主题扩展，定义品牌色、阴影和中文友好的系统字体栈。
- `eslint.config.mjs`：使用 Next.js core web vitals ESLint 配置，并忽略 `.next`、`node_modules`、`next-env.d.ts`。
- `next.config.js`：当前没有额外 Next.js 配置。
- `postcss.config.js`：启用 Tailwind CSS 和 Autoprefixer。

## 页面结构

- 顶部导航：品牌「毛孩子浴所」、页面锚点导航、预约入口。
- 首屏 Hero：使用门店图片轮播，突出「专业宠物洗护，让毛孩子干净又放松」。
- 门店亮点：展示服务时长、可视化洗护、猫狗分区、同城接送。
- 洗护服务：基础洁净洗护、精修造型、猫咪低压护理。
- 护理流程：到店评估、分区清洁、吹干梳理、交付反馈。
- 套餐价格：小型犬基础洗护、猫咪低压洗护、精修造型套餐。
- 预约表单：主人姓名、联系电话、宠物类型、预约项目、到店日期、偏好时段、备注。当前表单是页面演示，不会提交到服务器。
- 客户评价：横向自动滚动评价轮播，悬停暂停。
- 到店信息：上海市宜川路街道陕西北路 1620 号，展示地图图片和门店标签。
- 页脚：版权、预约电话和微信。

## 静态资源

静态图片位于 `public/assets/`：

- `store-reception.png`：首屏轮播图，门店接待区。
- `store-wash-area.png`：首屏轮播图，洗护区。
- `store-cat-room.png`：首屏轮播图，猫咪护理房。
- `store-map-shaanxi-north-road.png`：门店位置示意图。
- `hero-grooming.png`：项目中存在但当前页面未引用。

## 设计与交互特点

- 整体色彩以纸白、墨绿、薄荷绿、珊瑚色和金色构成。
- Tailwind 中扩展了 `ink`、`muted`、`paper`、`mint`、`teal`、`coral`、`gold`、`line` 等语义色。
- 页面使用响应式布局，针对 `900px` 和 `560px` 附近有较多移动端适配。
- 首屏门店图片使用 CSS 动画自动轮播。
- 评价模块使用 CSS marquee 动画横向滚动，并支持 `prefers-reduced-motion` 降低动画。
- 站内锚点滚动由 `AnchorScroller` 统一处理。
- 预约日期由 `BookingDateInput` 在客户端计算，默认值为访问当天的下一天。

## 已知注意点

- `app/page.js` 中的预约提交按钮类型为 `button`，当前不会触发表单提交。
- `app/page.js` 中 `PetArt` 给猫耳朵使用了 `cat-left` 类，但 `app/globals.css` 选择器是 `.pet-art .ear.cat-left`；因为元素没有 `ear` 类，猫耳朵的三角形样式可能不会生效。
- Git 状态中 `app/layout.js` 已有修改，处理相关文件时应注意不要覆盖用户已有改动。
