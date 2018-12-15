# vue-cms

> A Vue.js project vue演示项目123
## 制作页面轮播图布局
## 加载首页轮播图数据
1. 获取数据，使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据，要保存到data身上
4. 使用v-for循环渲染每个item项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制界面，使用MUI中的media-list.html
2. 使用vue-resource获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为router-link，同时，在跳转的时候提供唯一的id标识符
2. 创建新闻详情的组件页面 NewInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染
==去掉scope是因为v-html注入代码的img标签没有被标记scope的特定标示，所以scope对其无效== 


## 单独封装一个comment.vue评论子组件
1. 先创建一个单独的comment.vue组件模板

2. 在需要的时候使用comment组件的页面宏，先手动导入comment组件

  ```js
  import comment from './comment.vue'
  ```

3. 在父组件宗，使用‘components’属性，将刚才导入的comment组件，注册为自己的子组件

4. 将注册子组件时候的，注册名称，以标签形式，在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多,让pageIndex++ ，然后重新调用this.getComments方法重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat方法，拼接上新数据

## 发表评论

1. 把文档做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则toast提示用户，评论内容不能为空
4. 通过vue-resource发一个请求，把评论内容提交给服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
  + 如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
  + 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data的comments的开头。这样就能完美实现刷新评论列表的需求。

## 改造图片分析按钮为路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表
### 制作顶部滑动条的坑
1. 需要借助于mui中的tab-top-webview-main.html
2. 需要把slider区域的mui-fullscreen类去掉
3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是js组件，需要被初始化一下：
+ 导入mui.js
+ 调用官方提供的方式去初始化
  https://dev.dcloud.net.cn/mui/ui/#scroll

  ```js
  mui('.mui-scroll-wrapper').scroll({
  	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```

4. 我们在初始化滑动条的时候，导入的mui.js，但是，控制台报错：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on `strict mode` functions or the arguments objects for calls to them  at Function.d.extend (mui.min.js?5dec:7)

   但是，webpack打包好的bundle.js 中，默认是启用严格模式的，所以这两者冲突了；

   **解决方案：**

   1. 把mui.js中的非严格模式的代码改掉，但是不现实；
   2. 把webpack打包时候的严格模式禁用掉 [参考文档](https://www.npmjs.com/package/babel-plugin-transform-remove-strict-mode)

==import mui from '../../lib/mui/js/mui.min.js' 报错 mui模块找不到==

1. 安装vue-awesome-mui  [参考文档](https://ask.dcloud.net.cn/article/12694)

   ```JS
   npm install vue-awesome-mui -S -D
   ```

2. main.js中
    ```JS
    import Mui from 'vue-awesome-mui'
    //原来样式修改
    // import './lib/mui/css/mui.css'
    // import './lib/mui/css/icons-extra.css'
    
    import 'vue-awesome-mui/mui/dist/css/mui.css'
    import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
    // mount with global
    Vue.use(Mui)
    ```

3. photolist.vue的mounter方法中添加：

   `放在mounted中解决了从首页到图片后，菜单栏不能滑动的问题`

   ```js
       mounted() {
         //当组件中的dom结构被渲染好并放到页面中后，会执行这个钩子函数
         //如果要操作元素了，最好在mounted里面，因为这里时候的dom元素是最新的
         mui('.mui-scroll-wrapper').scroll({
             deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
           });
       }
   ```

==去除警告： [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive.==  (原因：chrome为了提高页面的滑动流畅度而新折腾出来的一个东西)

```scss
<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }
</style>
```

## 解决tabbar无法正常切换组件的问题

==改类名，解决底部tabbar无法切换的问题,注意各个类之间的空格==

> 参考每个tabbar原有类的样式‘mui-tab-item’，复制过来后修改成自己的名称

```scss
 /*改类名，解决底部tabbar无法切换的问题,注意各个类之间的空格*/
.mui-bar-tab .mui-tab-item-llb .mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;

  text-overflow: ellipsis;
}

```



## 获取对应分类的图片列表数据并渲染页面

### 制作图片列表区域

1. 图片列表需要使用懒加载技术，我们可以使用Mint-UI提供的现成的组件`lazy-load`
2. 根据`lazy-load`的使用文档，尝试使用
3. 渲染图片列表数据

## 08.项目-美化图片列表并实现懒加载效果

1. 在改造li成router-link的时候，需要使用tag属性指定要渲染为哪种元素


## 09.项目-实现图片详情的数据加载和界面美化

 

## 10.项目-完成图片详情中缩略图的制作

==vue-preview==  [参考文档](https://github.com/LS1231/vue-preview)

1. 使用插件vue-preiview这个缩略图插件
2. 获取到所有的图片列表，然后使用v-for指令渲染数据
3. 注意：img标签上的class不能去掉 （==新版无此项==）
4. 注意：每个图片数据对象中，必须有w和h属性