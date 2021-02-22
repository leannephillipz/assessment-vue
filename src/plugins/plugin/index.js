// const VPlugin = {}

// const getData = () => {
//   return [{'Name': 'bugs'}]
// }

const install = () => {
  app.config.globalProperties.$plugin = "hello"
  app.$plugin = this
}

const data = false

export default {install, data}

// export default {
//
//   install: function(app){
//     app.config.globalProperties.$plugin = "hello"
//     // app.config.globalProperties.$plugin = () => {
//     //
//     // }
//    //  ,
//    //  app.directive('my-directive', {
//    //   mounted (el, binding, vnode, oldVnode) {
//    //     // some logic ...
//    //   }
//    //   //
//    // }),
//    //
//    //
//    //  app.mixin({
//    //    created() {
//    //      // some logic ...
//    //    }
//    //    //
//    //  }),
//    //  app.provide('VPlugin', options)
//    app.$plugin = this
//
//    return $plugin
//  },
//  update : function() {
//
//  },
//  greeting : function() {
//    "hello"
//  },
//  get: function() {
//    return {'Name': 'bugs'}
//  }
//
// }
