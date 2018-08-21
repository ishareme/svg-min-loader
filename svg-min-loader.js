const SVGO = require('svgo');
const loaderUtils = require('loader-utils')
const defaultOpt = {
  plugins: [{
    cleanupAttrs: true,
  }, {
    removeDoctype: true,
  },{
    removeXMLProcInst: true,
  },{
    removeComments: true,
  },{
    removeMetadata: true,
  },{
    removeTitle: true,
  },{
    removeDesc: true,
  },{
    removeUselessDefs: true,
  },{
    removeEditorsNSData: true,
  },{
    removeEmptyAttrs: true,
  },{
    removeHiddenElems: true,
  },{
    removeEmptyText: true,
  },{
    removeEmptyContainers: true,
  },{
    removeViewBox: false,
  },{
    cleanupEnableBackground: true,
  },{
    convertStyleToAttrs: true,
  },{
    convertColors: true,
  },{
    convertPathData: true,
  },{
    convertTransform: true,
  },{
    removeUnknownsAndDefaults: true,
  },{
    removeNonInheritableGroupAttrs: true,
  },{
    removeUselessStrokeAndFill: true,
  },{
    removeUnusedNS: true,
  },{
    cleanupIDs: true,
  },{
    cleanupNumericValues: true,
  },{
    moveElemsAttrsToGroup: true,
  },{
    moveGroupAttrsToElems: true,
  },{
    collapseGroups: true,
  },{
    removeRasterImages: false,
  },{
    mergePaths: true,
  },{
    convertShapeToPath: true,
  },{
    sortAttrs: true,
  },{
    removeDimensions: true,
  },{
    removeAttrs: {attrs: '(stroke|fill)'},
  }]
}
const isArray = (something)=>{
  return Object.prototype.toString.call(something) === '[object Array]';
}
module.exports = function (source) {
    const self = this;
    this.cacheable(true);    //Webpack 会默认缓存所有 Loader 的处理结果， 提高执行效率
    const callback = this.async();  //异步执行

    const options = loaderUtils.getOptions(this) || defaultOpt;  //获取options参数

    if (options && options.plugins && isArray(options.plugins)){
      const svgo = new SVGO(options);
      svgo.optimize(source, { path: self.resourcePath }).then(function (res) {        
          callback(null, res.data);
          return;
      }).catch(function (err) {
          callback(err);
          return;
      })
    }
    else{
      callback(new Error('options.plugins must be Array'));
    }
}