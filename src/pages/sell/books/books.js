'use strict';

// post.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ownerId: '',
    ownerNickname: '',
    ownerGender: '',
    bookFound: false,

    bookISBN: '',
    bookImg: '',
    bookName: '',
    bookAuthor: '',
    bookPress: '',
    bookPrice: '',

    isTextbook: false,
    courseName: '',
    conditions: ["全新", "几乎全新", "少量笔记", "较多笔记", "不影响阅读"],
    conditionIndex: 2,
    campus: ["屯溪路校区", "翡翠湖校区", "宣城校区"],
    campusIndex: 3,
    currentPrice: '',
    postRemark: '',
    buttonLoading: false
  }
})