# 用于webpack loader 的svg压缩工具

该包依赖于 [svgo](https://github.com/svg/svgo)

## Getting Started

```shell
npm i svgo svg-min-loader --save-dev
```



## Basic Usage
```shell
webpack

 {
    test: /\.svg$/,
    include: [resolve('packages/SvgIcon/svg')],
    use: [
        {
            loader: 'svg-mini-loader'
        }
    ]
},
 ```

 也可配合svg-sprite-loader使用，svg-sprite-loader 将我们引用的指定文件夹下的 svg 制作成 svg sprite 并插入 html 的 body 中。

 ```shell
 npm i svg-sprite-loader --save-dev

 {
    test: /\.svg$/,
    include: [resolve('packages/SvgIcon/svg')],
    use: [
	   {
		loader: 'svg-sprite-loader',
		options: {
		   symbolId: 'icon-[name]'
		}
       },
       {
        loader: 'svg-mini-loader'
       }
    ]
},
 ```

 svg-min-loader 中在不传参数的时候它默认了一套压缩svg机制，当然可传参进行定制化

```
{
    test: /\.svg$/,
    include: [resolve('packages/SvgIcon/svg')],
    use: [
	   {
	    loader: 'svg-sprite-loader',
	    options: {
	      symbolId: 'icon-[name]'
	    }
       },
       {
         loader: 'svg-mini-loader',
		 options: {
		   plugins:[
			 {
			  removeViewBox: false
			 }, 
			 {
			  removeUselessStrokeAndFill: false
			 }, 
			 {
			  removeAttrs: {
			     attrs: ['xmlns']
			  }
		     }
		]
	    }
        }
    ]
},
```

### options.plugins [Array]  参数如下

```

[ cleanupAttrs ] 清除换行，结束符以及重复空格
[ removeDoctype ] 删除文档声明
[ removeXMLProcInst ] 删除XML处理指令
[ removeComments ] 删除注释
[ removeMetadata ] 删除<metadata>源信息
[ removeTitle ] 删除<title>标题(默认禁用)
[ removeDesc ] 删除<desc>描述 (默认只有desc元素无意义的时候)
[ removeUselessDefs ] 删除<defs>元素如果没有id
[ removeEditorsNSData ] 删除编辑器的命名空间，元素和属性
[ removeEmptyAttrs ] 删除空属性
[ removeHiddenElems ] 删除隐藏元素
[ removeEmptyText ] 删除隐藏文本元素
[ removeEmptyContainers ] 删除空的容器元素
[ removeViewBox ]如果可以，删除viewBox属性(默认进行)
[ cleanUpEnableBackground ] 如果可以，删除enable-background属性
[ minifyStyles ] 使用CSSO最小化元素的<style>内容
[ convertStyleToAttrs ] 转换样式为属性值
[ convertColors ] 转换颜色(从rgb()到#rrggbb, 从 #rrggbb到#rgb)
[ convertPathData ] 将路径数据转换为的相对路径和绝对路径中简短的那一个，过滤无用的分隔符，智能四舍五入以及其他很多处理
[ convertTransform ] 合并多个transforms为一个, 转换矩阵为短命名，以及其他很多处理
[ removeUnknownsAndDefaults ] 删除未知的元素内容和属性，删除值为默认值的属性/li>
[ removeNonInheritableGroupAttrs ] 删除不可基础组的”presentation”属性
[ removeUselessStrokeAndFill ] 删除无用的stroke和fill属性
[ removeUnusedNS ] 删除没有使用的命名空间声明
[ cleanupIDs ] 删除没有使用或者压缩使用的IDs
[ cleanupNumericValues ] 数值四舍五入提高精度, 删除默认的’px’单位
[ moveElemsAttrsToGroup ] 移动元素属性们到外面包裹的组元素上
[ moveGroupAttrsToElems ] 移动一些组属性到内容元素上
[ collapseGroups ] 合并无用的组
[ removeRasterImages ] 删除点阵图像(默认禁用)
[ mergePaths ] 合并多个路径为一个
[ convertShapeToPath ] 转换一些基本图形为路径
[ sortAttrs ] 元素属性排序使其像诗歌一样易读(默认禁用)
[ transformsWithOnePath ] 通过里面一条路径实现transforms, 真实宽度剪裁, 垂直居中对齐以及SVG缩放拉伸(默认禁用)
[ removeDimensions ] 如果viewBox就是当下尺寸限定，删除width/height属性(默认禁用)
[ removeAttrs ] 通过正则删除属性 (默认禁用)
[ addClassesToSVGElement ] 添加类名给外面的<svg>元素 (默认禁用)
[ removeStyleElement ] 删除元素的<style> (默认禁用)

```

### 感谢

[未来必热：SVG Sprite技术介绍
](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
[svgo简介和初体验](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)
