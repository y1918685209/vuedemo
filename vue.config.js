module.exports={
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                // "@":"/src"//默认 在2.0@符号不能给其他的别名使用
                "assets":"@/assets",
                "components":"@/components",
                "views":"@/views",
                "network":"@/newwork",
                "common":"@/common"//common指的是公共的js文件夹
            }
        }
    }
}