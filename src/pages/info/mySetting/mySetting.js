'use strict';

Page({
  data: {
    userWechat: '',
    userQQ: '',
    userPhone: '',
    userUniversity: '',
    userCollege: '',
    userEducation: '',
    userEntryYear: '',
    buttonLoading: false,
    university: ["屯溪路校区", "翡翠湖校区", "宣城校区"],
    universityIndex: 0,
    college: ["机械工程学院", "材料科学与工程学院", "电气与自动化工程学院", "计算机与信息学院", "土木与水利工程学院", "化学与化工学院", "马克思主义学院", "经济学院", "外国语学院", "管理学院", "仪器科学与光电工程学院", "建筑与艺术学院", "资源与环境工程学院", "食品科学与工程学院", "数学学院", "电子科学与应用物理学院", "微电子学院", "汽车与交通工程学院", "软件学院", "生物与医学工程学院"],
    collegeIndex: 0,
    education: ["本科生", "硕士研究生", "博士研究生"],
    educationIndex: 0,
    entryYear: ["2012", "2013", "2014", "2015", "2016", "2017"],
    entryYearIndex: 3
  }
})