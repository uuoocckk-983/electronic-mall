let mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/mall';

mongoose.connect(url,{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log('数据库连接失败')
    } else{
        console.log('数据库连接成功')
    }
})

module.exports = mongoose;