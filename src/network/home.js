import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求推荐商品的一些信息
export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params:{
      //下面是es6 的对象的简写方式
      type,
      page
    }
  })
}
// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()
