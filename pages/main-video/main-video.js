// pages/mian-video/main-video.js
import { getTopMV }  from "../../services/video"
Page({
  /**
   * 页面的初始数据
   */
  data: {
videoList:[],
offset:0,
hasMore:true
  },

  onLoad(options) {
// console.log(1);
getTopMV(this.data.offset,20).then(res=>{
  // console.log(res.data);
  
  this.setData({
    videoList:res.data
  })
  this.data.offset=this.data.videoList.length
  this.data.hasMore=res.hasMore
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({videoList:[]})
this.data.offset=0
this.data.hasMore=true
getTopMV(this.data.offset).then(res=>{
this.setData({ videoList: res.data })
this.data.offset=this.data.videoList.length
  this.data.hasMore=res.hasMore
wx.stopPullDownRefresh()
  })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.hasMore)
    getTopMV(this.data.offset).then(res=>{
    
      const newVideoList = [...this.data.videoList, ...res.data]
    this.setData({ videoList: newVideoList })
    this.data.offset=this.data.videoList.length
      this.data.hasMore=res.hasMore
  
      })
    
    else{console.log("到底拉");}
  },

  /**
   * 用户点击右上角分享
   */
onVideoItemTap(event){
  const item =event.currentTarget.dataset.item
  console.log(item);
  wx.navigateTo({
    url: `/pages/detail-video/detail-video?id=${item.id}`,
  })
}
})