export default {
    // 布局种类：横向布局 horizontal 、 纵向布局 vertical 、 分栏布局 column 、 综合布局 comprehensive 、 常规布局 common 、 浮动布局 float
    layoutType: 'vertical',
    themeName: "light",// light 光照模式，dark 暗黑模式
    locale: 'zh-cn',// 国际化
    // locale: 'en',// 国际化
    storage: "localStorage", // 储存信息
    tokenTableName: "hxb-admin-vite__token",//token名字
    transitionType: 'el-fade-in-linear',// 默认过场动画 el-fade-in el-fade-in-linear el-collapse-transition el-zoom-in-center el-zoom-in-top el-zoom-in-bottom
    maxKeepAliveRouteAmount: '10',// 最多可缓存数量
    layoutWiteTime: 5000,
    serverPort: 14140,// 端口号
}
