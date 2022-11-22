// pages/detail-video/detail-video.js
import {getMVUrl,getMVInfo,getMVRelate}from "../../services/video"
Page({
data:{
  id:0,
  MVUrl:"",
  danmuList:[
    {text:'哈哈哈',color:"#ff0000",time:3},
    {text:'哈哈哈1111',color:"#ff0000",time:10},
  ],
  mvInfo:{},
  mvRelate:{}
},
onLoad(options){
  const id=options.id
  this.setData({id})

  getMVUrl(id).then(res=>{
    this.setData({MVUrl:res.data.url})
  })

  getMVInfo(id).then(res=>{
    this.setData({mvInfo:res.data}) 
  })
  getMVRelate(id).then(res=>{
    this.setData({mvRelate:res.data}) 
  })
  }
})

