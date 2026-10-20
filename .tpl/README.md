# Grovia 独立模板

中英文响应式官网，中文路径 /，英文 /en。首页、关于、案例列表、六个案例详情和设计系统，共 10 页。

Node 22.13.1、pnpm 12.10.1。先阅读 .tpl/template.json、.tpl/project.json 和 .tpl/docs/ 中的规则。

安装：pnpm install --frozen-lockfile。开发：pnpm dev，默认 http://127.0.0.1:43284。生产：pnpm build 后 pnpm start。Ctrl+C 停止自己启动的服务。可在 .env 设置 PORT/HOSTNAME；不需要密钥、数据库或外部服务。

检查：pnpm typecheck、pnpm lint、pnpm test、pnpm build。pnpm bundle 生成可供消费方引用的运行包。

品牌：src/features/site-templates/catalog/grovia/config/brand.ts；文案：data.ts、components/ 和 pages/ 中的双语内容；Grovia 案例另见 cases.ts；样式：theme.css；页面注册：meta.ts；宿主选项：host.tsx。运行素材及字体在 public/templates/grovia，市场截图在 .tpl/assets。新增页面须同步 meta.ts 与 .tpl/template.json。语言切换须保留页面、查询和锚点。

表单仅本地校验，不发送、不保存。客户、指标、评价和套餐都是演示内容。参考图片与正文的商业使用及再分发授权待核实，字体许可证随 fonts 保存，详见 .tpl/docs/LICENSE.md。未部署、未发布。Git 地址：https://github.com/weelume/grovia-template。
