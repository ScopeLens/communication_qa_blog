User{
    id:独一无二的纯数字uid,
    usename:String 用户名
    post:Array<Post> 该用户的发帖
    historicalrecord:Array<Post> 浏览历史
    starpost:Array<Post> 收藏的帖子
}
Post{
    id:String 独一无二的乱码id,
    uid:String 发帖人的uid
    title:String 帖子标题,
    content:String 帖子内容,
    tag:Array 帖子标签,
    img:Array<src字符串> 图片
    author:String 用户名
    date:String 标准格式日期
    watch:Number 观看数
    like:Number 点赞数
    reply:Number 回复数
    star:Number 收藏数
}