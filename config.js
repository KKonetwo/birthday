// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我的",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小猪猪",  // 同上...
        "今天是我们在一起的一周年",
        "同样，很巧的是，今天也是情人节",
        "去年的今天",
        "我是在夜里跟你表白",
        "那一晚，我还清晰的记得",
        "跟你打电话的时候难掩的激动",
        "或许是上天注定我们在这一个特殊的节日里在一起的吧",
        "爱你我的小宝贝",
        "And,在新的一年里，我们一起继续吃遍大江南北",
        "爱你！！！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "情人节快乐！虽然是假的蛋糕，但是开学陪你去吃真的蛋糕",
        story: "A MESSAGE FOR YOU",
    }
};
