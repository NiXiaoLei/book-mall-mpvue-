// 工具函数库
import config from './config'

export function get(url, data){
  return new Promise(function(resolve, rejected){
    // 微信的请求接口 
    wx.request({
      url:config.host + url,
      success:function(res){
        if(res.data.code == 0){
          resolve(res.data.data)
        }else{
          rejected(res.data)
        }
      }
    })
  })
}

// 弹窗
export function showSuccess(text){
  wx.showToast({
    title:text,
    icon:'success'
  })
}