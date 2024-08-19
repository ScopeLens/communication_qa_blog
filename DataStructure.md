User{
    id:独一无二的纯数字uid,
    usename:String 用户名
    avatar:String url 用户头像
    avatar_bg:String url 头像背景
    followCount:int 关注数目
    followList:Array<User> 关注列表
    fanList:Array<User>: 粉丝列表
    fanCount:int 粉丝数目
    post:Array<Post> 该用户的发帖
    historicalrecord:Array<Post> 浏览历史
    starpost:Array<Post> 收藏的帖子
}
Post{
    id:String 独一无二的乱码id,  //通过本条id能获取对应的回复
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
Comment{ //一级回复
    id:标志本条回复的唯一id //通过本条id应该可以获取该回复的所有二级回复
    username:回复人
    content:回复内容
    date:回复时间
    like:被点赞数
}
SecondaryComment:{   //二级回复
    user:回复人
    other:被回复人
    content:回复内容
}