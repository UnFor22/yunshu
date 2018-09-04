// pages/book/book.js
import {fetch, showToast} from "../../utils/util.js"
const app = getApp()
Page({

  data: {
    titleId: "",
    article:{},
    title:"",
    bookId:"",
    catalog: [],
    isShow: false
  },

  onLoad: function (options) {
    this.setData({
      titleId: options.id,
      bookId: options.bookId
    })
    this.getData()
    // this.getCatalog()
  },

  getData(){
    fetch.get(`/article/${this.data.titleId}`)
    .then(res =>{
      console.log(res)
      let data = app.towxml.toJson(res.data.article.content, "markdown");
      this.setData({
        article:data,
        title:res.data.title
      })
    })
  },
  onShareAppMessage: function () {
  
  }
})