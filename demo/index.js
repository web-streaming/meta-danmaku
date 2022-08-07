import Danmaku from '../src'

const player = document.querySelector('.player')

const menu = document.querySelector('#menu');

const danmaku = new Danmaku(player, {
  items: getItems(),
  render(b, d) {
    if (b.span && b.span > 1) {
      const img = new Image()
      img.src = 'https://i.bmp.ovh/imgs/2022/08/07/134b2223f501bf0f.gif'
      img.width = d.trackHeight * b.span
      img.style.maxHeight = '100%'
      b.content = img
    }
  },
  onBulletHoverIn(b) {
    b.rect.update()
    menu.style.top = b.rect.y + 'px';
    menu.style.left = b.rect.x + 'px';
  }
})

let time = 0
setInterval(() => {
  danmaku.update(time)
  time += 0.5
}, 500)


const onoff = document.querySelector('#onoff');
const opacity = document.querySelector('#opacity');
const playbackRate = document.querySelector('#playback-rate');
const speed = document.querySelector('#speed');
const fontsize = document.querySelector('#fontsize');
const area = document.querySelector('#area');
const duration = document.querySelector('#duration');
const unlimited = document.querySelector('#unlimited');
const bottomUp = document.querySelector('#bottom-up');
const scroll = document.querySelector('#scroll');
const top = document.querySelector('#top');
const bottom = document.querySelector('#bottom');
const color = document.querySelector('#color');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const clear = document.querySelector('#clear');

onoff.onchange = () => {
  if (onoff.checked) {
    danmaku.enable()
  } else {
    danmaku.disable()
  }
}
opacity.onchange = () => {
  danmaku.updateConfig({
    opacity: Number(opacity.value) / 100
  })
}
playbackRate.onchange = () => {
  danmaku.updateConfig({
    playbackRate: (Number(playbackRate.value) + 50) / 100
  })
}
speed.onchange = () => {
  danmaku.updateConfig({
    speed: (Number(speed.value) + 50) / 100
  })
}
fontsize.onchange = () => {
  danmaku.updateConfig({
    fontSizeScale: (Number(fontsize.value) + 50) / 100
  })
}
area.onchange = () => {
  danmaku.updateConfig({
    area: Number(area.value) / 100
  })
}
duration.onchange = () => {
  danmaku.updateConfig({
    duration: Number(duration.value) / 10
  })
}
unlimited.onchange = () => {
  danmaku.updateConfig({
    unlimited: unlimited.checked
  })
}
bottomUp.onchange = () => {
  danmaku.updateConfig({
    bottomUp: bottomUp.checked
  })
}
scroll.onchange = () => {
  if (scroll.checked) {
    danmaku.config.blocked.add('scroll')
  } else {
    danmaku.config.blocked.delete('scroll')
  }
  danmaku.updateConfig({
    blocked: danmaku.config.blocked
  })
}
top.onchange = () => {
  if (top.checked) {
    danmaku.config.blocked.add('top')
  } else {
    danmaku.config.blocked.delete('top')
  }
  danmaku.updateConfig({
    blocked: danmaku.config.blocked
  })
}
bottom.onchange = () => {
  if (bottom.checked) {
    danmaku.config.blocked.add('bottom')
  } else {
    danmaku.config.blocked.delete('bottom')
  }
  danmaku.updateConfig({
    blocked: danmaku.config.blocked
  })
}
color.onchange = () => {
  if (color.checked) {
    danmaku.config.blocked.add('color')
  } else {
    danmaku.config.blocked.delete('color')
  }
  danmaku.updateConfig({
    blocked: danmaku.config.blocked
  })
}
play.onclick = () => {
  danmaku.play()
}
pause.onclick = () => {
  danmaku.pause()
}
clear.onclick = () => {
  danmaku.clear()
}



function getItems() {
  return [
    { content: '美的让人窒息 ', time: 184, color: '#2196F3' },
    {
      content: '这可以去拍科幻大片了，敌人还有5秒到达战场 ',
      time: 68,
      color: '#2196F3',
    },
    { content: '这得多少炸蛹啊。。口水 ', time: 147, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水', time: 1, span: 3, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '这得多少炸蛹啊。。口水 ', time: 1, color: '#E91E63' },
    { content: '你瞅啥，瞅你咋地 ', time: 136, color: '#673AB7' },
    { content: '雪的反光好美 ', time: 148, color: '#2196F3' },
    { content: '好美 ', time: 94, color: '#E91E63' },
    { content: '美得不像话 ', time: 191, color: '#673AB7' },
    { content: '好美 ', time: 20, color: '#673AB7' },
    { content: '我是一只小小小小鸟 ', time: 199, color: '#2196F3' },
    { content: '几十亿 ', time: 109, color: '#2196F3' },
    { content: '不怕摔死 ', time: 167, color: '#2196F3' },
    { content: '这不是狸猫吗 ', time: 135, color: '#673AB7' },
    { content: '这真甩不死？ ', time: 197, color: '' },
    { content: '这玩意巨好吃 ', time: 76, color: '' },
    { content: '这什么树 ', time: 207, color: '#2196F3' },
    { content: '美 ', time: 26, color: '#E91E63' },
    { content: '不会摔死？ ', time: 230, color: '#E91E63' },
    { content: '他妈怎么上去的 ', time: 183, color: '' },
    { content: '我以为是瓶子树 ', time: 21, color: '' },
    { content: '这树我在QQ农场偷过233 ', time: 85, color: '' },
    { content: '历害,香蕉自己剥 ', time: 79, color: '#2196F3' },
    { content: '这是已经吃腻了吗。。。。。。。。 ', time: 187, color: '' },
    { content: '你们被人类偷拍了 ', time: 106, color: '#673AB7' },
    { content: '美得太放肆 ', time: 228, color: '' },
    { content: '快到碗里来 ', time: 108, color: '' },
    { content: '又被对面打野抓了 ', time: 10, color: '#673AB7' },
    { content: '那是下面没有石头 ', time: 230, color: '#673AB7' },
    { content: '不会摔死吗 ', time: 27, color: '#673AB7' },
    { content: '还弹起来了 ', time: 9, color: '' },
    { content: '简直了。这种感觉简直奇妙！ ', time: 146, color: '' },
    { content: '猛虎形态 ', time: 154, color: '#673AB7' },
    { content: '我还以为是香蕉呢 ', time: 44, color: '#E91E63' },
    { content: '这一段端午节的时候在家看了 ', time: 37, color: '' },
    { content: '摔不死的下面有树叶 ', time: 64, color: '#E91E63' },
    {
      content: '知了背部的肉炒起来很好吃的，小时候一到夏天就去抓（我还是个女生） ',
      time: 41,
      color: '',
    },
    { content: 'draco ', time: 176, color: '' },
    { content: '萌！ ', time: 218, color: '#E91E63' },
    { content: '大的让人惊叹 ', time: 139, color: '#673AB7' },
    { content: '，这个树在第一集里出现过 ', time: 132, color: '#2196F3' },
    { content: '这应该是猞猁吧 ', time: 31, color: '#673AB7' },
    { content: '怎么办，我好慌 ', time: 239, color: '' },
    { content: '飞 ', time: 207, color: '#2196F3' },
    { content: '万物守恒 ', time: 132, color: '#673AB7' },
    { content: '层林尽染 ', time: 222, color: '#2196F3' },
    { content: '怎么感觉这段看过 ', time: 94, color: '' },
    { content: '哈哈哈哈 ', time: 219, color: '#2196F3' },
    { content: '边吃边看- - ', time: 182, color: '' },
    { content: '要镇定= = ', time: 229, color: '#E91E63' },
    { content: '野生瞄 ', time: 46, color: '#E91E63' },
    { content: '肚子也能吃 ', time: 107, color: '#673AB7' },
    { content: '单身狗躺枪 ', time: 82, color: '' },
    { content: '哈哈 ', time: 39, color: '#E91E63' },
    { content: '???????? ', time: 216, color: '' },
    { content: '自挂东南枝23333 ', time: 230, color: '' },
    { content: '(≧^.^≦)喵~ ', time: 20, color: '' },
    { content: '刚睡醒时的我2333 ', time: 146, color: '#673AB7' },
    { content: '黄叽的宠物原型吗0.0 ', time: 111, color: '#2196F3' },
    { content: '可爱 想养 ', time: 130, color: '' },
    { content: '这在我们小时候经常油炸炒来吃 ', time: 50, color: '#673AB7' },
    { content: '这花开的真是大树身 少女芯啊 ', time: 87, color: '#673AB7' },
    { content: '对啊 ', time: 69, color: '' },
    { content: '我也这么觉得 ', time: 60, color: '' },
    { content: '马蛋不是给你准备的 ', time: 121, color: '#2196F3' },
    { content: '偷蛋贼 ', time: 151, color: '#2196F3' },
    { content: '233真的是摔啊 ', time: 1, color: '#2196F3' },
    { content: '人的脊椎也很脆弱吧， ', time: 29, color: '#673AB7' },
    { content: '猞猁尾巴很短的 这个尾巴长 ', time: 4, color: '' },
    { content: '直接把一只田鼠吃下去了？？？ ', time: 180, color: '' },
    { content: '该怎么上去？ ', time: 128, color: '' },
    { content: '30公分是多少厘米啊？？ ', time: 243, color: '' },
    { content: '17年蝉 ', time: 11, color: '#2196F3' },
    { content: '不知道的还以为是香蕉呢 ', time: 35, color: '#2196F3' },
    {
      content: '听说狼这家伙是个二愣子，非常凶猛，怼的很 ',
      time: 239,
      color: '#E91E63',
    },
    { content: '松鼠：真是日了狗了 ', time: 74, color: '' },
    { content: '第一集是序篇 ', time: 140, color: '' },
    { content: '希望能永远这样 ', time: 180, color: '' },
    { content: '好美 ', time: 208, color: '' },
    { content: '好多 ', time: 107, color: '#E91E63' },
    { content: '不应该每年都有17年前的 ', time: 101, color: '' },
    { content: '其他动物：真是活久见 ', time: 225, color: '' },
    { content: '可爱炸了啊啊啊啊啊啊 ', time: 207, color: '' },
    {
      content: '感觉动物界雄性都适合搞基，雌的好丑，为什么还要追求 ',
      time: 128,
      color: '',
    },
    { content: '所以自然不能破坏，若果没有叶子下来全死 ', time: 106, color: '' },
    { content: '蝉？ ', time: 46, color: '' },
    { content: '猜到了 ', time: 69, color: '#673AB7' },
    { content: '我 ', time: 103, color: '' },
    { content: '就知道吃，现在很多地方都听不到蝉鸣了 ', time: 237, color: '' },
    {
      content: '17年才从土里出来，全部给人吃了，本来很多以他们为生的都饿死了 ',
      time: 226,
      color: '#673AB7',
    },
    { content: '像神话 ', time: 161, color: '' },
    { content: '有猫叫 ', time: 143, color: '#E91E63' },
    { content: '这是第一次出现 ', time: 72, color: '' },
    { content: '这么多天敌 几十亿还真不够， ', time: 212, color: '#2196F3' },
    { content: '呀咩咯呀咩咯 啊 ', time: 130, color: '' },
    { content: '我们叫姐喽龟 ', time: 200, color: '#2196F3' },
    { content: '猴面包树 ', time: 22, color: '#2196F3' },
    { content: '雪豹的时候你也是这么说的=。= ', time: 34, color: '#2196F3' },
    { content: '坚强地吃下去 ', time: 161, color: '' },
    { content: '又吃冷冻食品 ', time: 238, color: '#2196F3' },
    { content: '这拍的。。太好了吧 ', time: 236, color: '' },
    { content: '拍得太好了 ', time: 192, color: '#2196F3' },
    { content: '卧槽，发财了 ', time: 82, color: '' },
    { content: 'wolverine233333333狼叔是你吗 ', time: 238, color: '#E91E63' },
    { content: '大自然的神奇！ ', time: 223, color: '#2196F3' },
    { content: '30厘米 ', time: 9, color: '' },
    { content: '大家都同意 ', time: 165, color: '' },
    { content: '好美 ', time: 54, color: '' },
    { content: '我家外面蝉叫的正欢 ', time: 158, color: '#2196F3' },
    { content: '卧槽，单身狗被虐还要被吃？？？ ', time: 63, color: '' },
    { content: '说摔死的可以去看另一个纪录片 ', time: 241, color: '#2196F3' },
    { content: '同时出土可以减少被吃的数量 ', time: 1, color: '#673AB7' },
    { content: '鸡皮疙瘩 ', time: 123, color: '' },
    { content: '为什么要抢？雌性不够吗 ', time: 205, color: '' },
    { content: '太美了 ', time: 194, color: '#673AB7' },
    { content: '难不成还要嚼一嚼(ಡωಡ) ', time: 130, color: '' },
    { content: '还以为是两个人哈哈哈 ', time: 192, color: '' },
    { content: '好直啊 ', time: 54, color: '#2196F3' },
    { content: '听英文讲的就是30厘米，可能是翻译的不同吧 ', time: 184, color: '' },
    {
      content: '小时候还能听到蝉鸣，现在城市里已经好多年没听到了 ',
      time: 96,
      color: '#673AB7',
    },
    { content: '打开了包皮 ', time: 36, color: '' },
    { content: '鸮:你瞅啥 ', time: 161, color: '' },
    { content: '30厘米 ', time: 16, color: '#2196F3' },
    { content: '那棵树肯定很痒 ', time: 216, color: '' },
    { content: '流口水了卧槽。 ', time: 156, color: '#2196F3' },
    { content: '流口水了卧槽 ', time: 165, color: '#E91E63' },
    { content: '这么可爱 ', time: 109, color: '#E91E63' },
    { content: '哈哈哈哈哈哈哈 嗷 ', time: 165, color: '#673AB7' },
    { content: '方便面 ', time: 37, color: '' },
    { content: '小毛 ', time: 77, color: '' },
    { content: '花都被你给抖没了 ', time: 50, color: '#2196F3' },
    { content: '狐猴:你是什么东西？ ', time: 110, color: '' },
    { content: '又白又嫩 ', time: 90, color: '' },
    { content: 'OMG???? ', time: 90, color: '#2196F3' },
    { content: '密恐福利…… ', time: 183, color: '' },
    { content: '呃，开之前像香蕉，开之后里边像豆芽 ', time: 25, color: '#673AB7' },
    { content: '这玩意儿比雪豹还少 ', time: 60, color: '#E91E63' },
    { content: '233 ', time: 126, color: '' },
    { content: '松子真的很美味 ', time: 37, color: '' },
    { content: '这小眼神很忧伤 哈哈哈 ', time: 62, color: '' },
    { content: '哇哇哇好梦幻 ', time: 161, color: '#673AB7' },
    { content: '猞猁！ ', time: 50, color: '' },
    {
      content: '毛茸茸的可爱 ',
      time: 12,
      color: '#673AB7',
    },
    {
      content: '巨木森林的根得扎得多深呐… ',
      time: 12,
    },
    {
      content: '谢谢你们拍摄这么好的作品 ',
      time: 12,
    },
    {
      content: '你知道高中好不容易午休一次还有蝉鸣的痛苦吗 ',
      time: 12,
    },
    {
      content: '好高啊 ',
      time: 12,
    },
    {
      content: '2019-8-31 ',
      time: 12,
      color: '#673AB7',
    },
    {
      content: '呃，开之前像香蕉，开之后里边像豆芽 ',
      time: 13,
      color: '#673AB7',
    },
    {
      content: '哇哇哇好梦幻 ',
      time: 13,
      color: '#673AB7',
    },
    {
      content: '动物界以繁殖为目的的 ',
      time: 13,
      color: '#E91E63',
    },
    {
      content: '爬树还好者？ ',
      time: 13,
      color: '#E91E63',
    },
    {
      content: '狐猴:你是什么东西？ ',
      time: 14,
    },
    {
      content: '大王好帅！ ',
      time: 14,
      color: '#673AB7',
    },
    {
      content: '…… ',
      time: 14,
    },
    {
      content: '那棵树肯定很痒 ',
      time: 15,
    },
    {
      content: '流口水了卧槽。 ',
      time: 15,
      color: '#2196F3',
    },
    {
      content: '密恐福利…… ',
      time: 15,
    },
    {
      content: '这小眼神很忧伤 哈哈哈 ',
      time: 15,
    },
    {
      content: '野鸭子都会飞的 ',
      time: 15,
      color: '#E91E63',
    },
    {
      content: '有些是三年的 ',
      time: 15,
      color: '#673AB7',
    },
    {
      content: '因为要好好表现 才能吸引雌性阿 ',
      time: 15,
    },
    {
      content: '炸着吃嘎嘣脆！ ',
      time: 15,
    },
    {
      content: '你们不要再打啦！ ',
      time: 15,
      color: '#673AB7',
    },
    {
      content: '30厘米 ',
      time: 16,
      color: '#2196F3',
    },
    {
      content: '30厘米 ',
      time: 16,
      color: '#2196F3',
    },
    {
      content: '流口水了卧槽 ',
      time: 16,
      color: '#E91E63',
    },
    {
      content: 'OMG???? ',
      time: 16,
      color: '#2196F3',
    },
    {
      content: '猞猁！ ',
      time: 16,
    },
    {
      content: '嘎嘣脆 ',
      time: 16,
    },
    {
      content: '黄水仙 ',
      time: 16,
    },
    {
      content: 'and edible… ',
      time: 16,
      color: '#E91E63',
    },
    {
      content: '好想一口吃掉 ',
      time: 16,
    },
    {
      content: '层林尽染 ',
      time: 16,
      color: '#2196F3',
    },
    {
      content: '好想吃哦 ',
      time: 16,
    },
    {
      content: '这么可爱 ',
      time: 17,
      color: '#E91E63',
    },
    {
      content: '哈哈哈哈哈哈哈 嗷 ',
      time: 17,
      color: '#673AB7',
    },
    {
      content: '又白又嫩 ',
      time: 17,
    },
    {
      content: '蝉都是质数出现的避免其他生物吃光 ',
      time: 17,
    },
    {
      content: '猴面包树:哈哈哈劳资早就料到了 ',
      time: 17,
    },
    {
      content: '突然觉得蝉好伟大 ',
      time: 17,
    },
    {
      content: '呆萌 ',
      time: 17,
    },
    {
      content: '花都被你给抖没了 ',
      time: 18,
      color: '#2196F3',
    },
    {
      content: '你追女朋友不表现阿。自己送上门的？ ',
      time: 18,
      color: '#2196F3',
    },
    {
      content: '哇，猴面包树！ ',
      time: 18,
    },
    { content: '嗷一声奶奶的可爱猫奴一脸满足 ', time: 129, color: '#673AB7' },
    { content: '因为雌的要带孩子花花的吸引猎人 ', time: 42, color: '#E91E63' },
    { content: '动物界以繁殖为目的的 ', time: 190, color: '#E91E63' },
    { content: '野鸭子都会飞的 ', time: 204, color: '#E91E63' },
    { content: '有些是三年的 ', time: 150, color: '#673AB7' },
    { content: '蝉都是质数出现的避免其他生物吃光 ', time: 238, color: '' },
    { content: '因为要好好表现 才能吸引雌性阿 ', time: 68, color: '' },
    { content: '你追女朋友不表现阿。自己送上门的？ ', time: 98, color: '#2196F3' },
    { content: '毛茸茸的可爱 ', time: 110, color: '#673AB7' },
    { content: '猴面包树:哈哈哈劳资早就料到了 ', time: 213, color: '' },
    { content: '小王子里有讲到猴面包树 ', time: 72, color: '' },
    { content: '炸着吃嘎嘣脆！ ', time: 208, color: '' },
    { content: '大王好帅！ ', time: 75, color: '#673AB7' },
    { content: '…… ', time: 186, color: '' },
    { content: '爬树还好者？ ', time: 236, color: '#E91E63' },
    { content: '巨木森林的根得扎得多深呐… ', time: 195, color: '' },
    { content: '很喜欢这样的景色 ', time: 31, color: '' },
    { content: '30厘米 ', time: 178, color: '' },
    { content: '嘎嘣脆 ', time: 145, color: '' },
    { content: '黄水仙 ', time: 106, color: '' },
    { content: 'and edible… ', time: 159, color: '#E91E63' },
    { content: '谢谢你们拍摄这么好的作品 ', time: 12, color: '' },
    { content: '好想一口吃掉 ', time: 106, color: '' },
    { content: '层林尽染 ', time: 58, color: '#2196F3' },
    { content: 'Therules are simple! ', time: 19, color: '' },
    { content: '美 ', time: 50, color: '' },
    { content: '像香蕉 ', time: 237, color: '#E91E63' },
    { content: '弱者就要被淘汰，优胜劣汰 ', time: 74, color: '#2196F3' },
    { content: '我最怕这个… ', time: 235, color: '#2196F3' },
    { content: '羞羞羞 ', time: 209, color: '' },
    { content: '哇 ', time: 75, color: '' },
    { content: '哇哦 ', time: 212, color: '#E91E63' },
    { content: '哇哦 ', time: 141, color: '' },
    { content: '额，想起了异形里的抱脸虫 ', time: 121, color: '#673AB7' },
    { content: '不追求难道要坐等灭绝吗。。。 ', time: 8, color: '' },
    { content: '吐了 ', time: 124, color: '#673AB7' },
    { content: '哇，三十层 ', time: 166, color: '' },
    { content: '可怜 ', time: 57, color: '#673AB7' },
    { content: '哈哈哈，这吊姿 ', time: 244, color: '' },
    { content: '小鹿好萌 ', time: 156, color: '' },
    { content: '哎呀，下来了 ', time: 24, color: '#E91E63' },
    { content: '爪子毛茸茸的 ', time: 8, color: '#E91E63' },
    { content: '哇(⊙o⊙)哇 ', time: 111, color: '#2196F3' },
    { content: '没开前，好像香蕉 ', time: 24, color: '#673AB7' },
    { content: '花蜜都抖掉了 ', time: 202, color: '' },
    { content: '哈哈哈 ', time: 165, color: '' },
    { content: '揉脸好萌 ', time: 79, color: '#673AB7' },
    { content: '真有幸能看到这种画面 ', time: 37, color: '#E91E63' },
    { content: '眨巴眼睛的小可爱 ', time: 137, color: '#E91E63' },
    {
      content: '你知道高中好不容易午休一次还有蝉鸣的痛苦吗 ',
      time: 12,
      color: '',
    },
    { content: '尾巴好可爱啊 ', time: 23, color: '' },
    {
      content: '突然想起《里约大冒险》里面的情节了 ',
      time: 176,
      color: '#E91E63',
    },
    {
      content: '可怜的蝉，被人类、其他动物一致认为很好吃。。。 ',
      time: 198,
      color: '',
    },
    { content: '突然觉得蝉好伟大 ', time: 17, color: '' },
    { content: '蝉鸣的夏季，我想遇见你。 ', time: 37, color: '#673AB7' },
    { content: 'Winter is coming ', time: 25, color: '' },
    { content: '又有点心，又有肉吃，这生活美滋滋 ', time: 213, color: '' },
    { content: '猞猁。。。 ', time: 100, color: '#2196F3' },
    { content: '想找个女人真难。。。 ', time: 212, color: '#2196F3' },
    { content: '30厘米 ', time: 56, color: '' },
    { content: '这个好吃。。。 ', time: 174, color: '' },
    { content: '撑的吃不下了。。。 ', time: 21, color: '' },
    { content: '蝉蜕，中药啊 ', time: 219, color: '#2196F3' },
    { content: '为了血统的纯洁性。。。 ', time: 213, color: '' },
    { content: '鹫都好丑。。。 ', time: 89, color: '#673AB7' },
    { content: '看见爪子缩了进去。。。 ', time: 124, color: '#2196F3' },
    { content: '蕨苔 ', time: 174, color: '' },
    { content: '好美。。。。 ', time: 181, color: '' },
    { content: '面包树？ ', time: 72, color: '' },
    { content: '富含淀粉，所以叫面包树 ', time: 230, color: '#E91E63' },
    { content: '鸳鸯戏水就是这么来的 ', time: 7, color: '' },
    { content: '堪比大片 ', time: 23, color: '#2196F3' },
    { content: '脸长得像老虎 ', time: 63, color: '' },
    {
      content: '存在一个最大速度，不会无限加速的，而且地下还有缓冲 ',
      time: 21,
      color: '#673AB7',
    },
    { content: '好久沒見到老虎了啊…… ', time: 6, color: '#2196F3' },
    { content: '这绳子是怎么挂上去的？ ', time: 179, color: '#2196F3' },
    {
      content: '雄性进化这么好看还不是为了追求雌性 ',
      time: 159,
      color: '#2196F3',
    },
    { content: '前面说以吃蝉为生的是要十七年吃一顿嘛？ ', time: 46, color: '' },
    { content: '十七年蝉 ', time: 187, color: '#E91E63' },
    { content: '配乐到位 ', time: 214, color: '#673AB7' },
    { content: '感觉好痴汉 ', time: 127, color: '' },
    { content: '隔着屏幕我都感觉到它在问我瞅啥 ', time: 203, color: '#2196F3' },
    { content: '伽.....伽椰子？？？！！！！！ ', time: 223, color: '#2196F3' },
    { content: '我的妈，好灵活 ', time: 40, color: '' },
    { content: '滑稽 ', time: 107, color: '' },
    { content: '我也希望永远这样 ', time: 100, color: '#2196F3' },
    { content: '开发你妹 ', time: 241, color: '' },
    { content: '好萌 ', time: 179, color: '' },
    { content: '噗，，，倒挂 ', time: 177, color: '#2196F3' },
    { content: '好壮观 ', time: 52, color: '' },
    { content: '我快被蝉感动到了 ', time: 116, color: '#2196F3' },
    { content: '好像我起床气声音 ', time: 33, color: '#673AB7' },
    { content: '这个加了最 ', time: 48, color: '' },
    { content: '超快 ', time: 113, color: '#2196F3' },
    { content: '好可爱啊 ', time: 112, color: '' },
    { content: '大自然真壮观 ', time: 32, color: '' },
    { content: '好高啊 ', time: 12, color: '' },
    { content: 'bgm配的真好 ', time: 167, color: '' },
    { content: '好可爱 ', time: 119, color: '' },
    { content: '芒果松，可以吃吗？ ', time: 39, color: '' },
    { content: '好可爱 ', time: 211, color: '' },
    { content: '超可爱啊，毛茸茸的 ', time: 131, color: '' },
    { content: '哇塞 ', time: 91, color: '' },
    { content: '前面说黄鸡宠物的别跑 ', time: 6, color: '' },
    { content: '吸吸吸吸吸吸吸吸大猫 ', time: 213, color: '#673AB7' },
    { content: '吸吸吸吸吸吸吸吸大猫', time: 173, color: '#2196F3' },
    { content: '驼鹿吧这只 ', time: 104, color: '#673AB7' },
    { content: '是脱落酸，信我 ', time: 71, color: '#2196F3' },
    { content: '这是纺锤树 ', time: 157, color: '#2196F3' },
    { content: '太高了吧，好想爬 ', time: 44, color: '' },
    { content: '最小的猫…… ', time: 123, color: '#2196F3' },
    { content: '伟大的脱落酸 ', time: 58, color: '' },
    { content: '碰到贝爷。。。 ', time: 4, color: '' },
    { content: '你们不要再打啦！ ', time: 15, color: '#673AB7' },
    { content: '前方高能 ', time: 104, color: '#E91E63' },
    { content: '19.8.11 ', time: 150, color: '#E91E63' },
    { content: '蕨类植物 ', time: 147, color: '#2196F3' },
    { content: '扑棱蛾子 ', time: 165, color: '#E91E63' },
    { content: '19.8.11 ', time: 140, color: '' },
    {
      content: '这种林子里，虫子如蚊子等多的一逼，乌云般蚊子你自己体会一下 ',
      time: 190,
      color: '#E91E63',
    },
    { content: 'b_box ', time: 127, color: '#2196F3' },
    { content: '拿它们的壳做手办哈哈哈 ', time: 112, color: '#673AB7' },
    { content: '长尾叶猴 ', time: 198, color: '#673AB7' },
    { content: '不是季节性森林吗？？？ ', time: 70, color: '' },
    { content: '信仰之跃 ', time: 66, color: '#E91E63' },
    { content: '嘲讽 ', time: 146, color: '#E91E63' },
    { content: '信仰之跃 ', time: 45, color: '#673AB7' },
    { content: '啪 ', time: 34, color: '' },
    { content: '开始叫了。。 ', time: 173, color: '#673AB7' },
    { content: '团灭。 ', time: 161, color: '#2196F3' },
    { content: '黑恶势力登场 ', time: 94, color: '#E91E63' },
    { content: '请保护自然 ', time: 127, color: '#2196F3' },
    { content: '饥荒里的鸡哈哈哈 ', time: 153, color: '#2196F3' },
    { content: '下集见 ', time: 58, color: '#673AB7' },
    { content: '魇兽的原型？？ ', time: 53, color: '' },
    { content: '我想开了 ', time: 68, color: '#2196F3' },
    { content: '单鸣哈哈等我 ', time: 196, color: '#673AB7' },
    { content: '发财了一只两块 ', time: 33, color: '#E91E63' },
    { content: '保鲜肉哈 ', time: 135, color: '#2196F3' },
    { content: '2019，0815，夜不能寐 ', time: 39, color: '#673AB7' },
    { content: '真美 ', time: 131, color: '#2196F3' },
    { content: '绿鸟 ', time: 185, color: '' },
    { content: '跳得跟飞一样 ', time: 193, color: '#E91E63' },
    { content: '哎呀妈呀 ', time: 57, color: '' },
    { content: '为啥17年… ', time: 21, color: '#673AB7' },
    { content: '层林尽染 ', time: 181, color: '#2196F3' },
    { content: '我也感觉红色的字幕是中译英 ', time: 93, color: '#2196F3' },
    { content: '开花 ', time: 59, color: '#673AB7' },
    { content: '吃个饭恼羞成怒了 ', time: 152, color: '' },
    { content: '口技 ', time: 0, color: '' },
    { content: '嘤嘤嘤，人家也要爬这种树 ', time: 96, color: '' },
    { content: '落叶这一幕，是梁思成与林徽因里面的！ ', time: 7, color: '' },
    { content: '可爱捏，刚睡醒 ', time: 181, color: '#2196F3' },
    { content: '我快看完了 ', time: 120, color: '#673AB7' },
    { content: '终于要看完了 ', time: 106, color: '#673AB7' },
    { content: '雪吸音 ', time: 58, color: '' },
    { content: '好灵活啊 ', time: 3, color: '' },
    { content: '鸡你太美 ', time: 191, color: '#2196F3' },
    { content: '鸡你太美2333 ', time: 125, color: '#673AB7' },
    { content: '引擎发动的声音 ', time: 146, color: '#E91E63' },
    { content: '巨人呢 ', time: 157, color: '' },
    {
      content: '与我无瓜，我不是翻译的那个红色，而且我是男的 ',
      time: 60,
      color: '',
    },
    { content: '不缺 ', time: 65, color: '#2196F3' },
    { content: '我家才18层…… ', time: 24, color: '' },
    { content: '大粗长 ', time: 197, color: '' },
    { content: '分阶段摔可还行，哈哈哈哈哈哈哈 ', time: 49, color: '#673AB7' },
    { content: '阿 ', time: 60, color: '' },
    {
      content: '喜欢看蛇推荐看奥斯丁·斯蒂文斯的视频 ',
      time: 142,
      color: '#2196F3',
    },
    { content: '来啰 ', time: 176, color: '#2196F3' },
    { content: '有 ', time: 148, color: '#E91E63' },
    { content: '大喵 ', time: 117, color: '' },
    { content: '北极平头哥 ', time: 40, color: '' },
    { content: '第二季见！ ', time: 108, color: '#2196F3' },
    { content: '牛逼 ', time: 138, color: '' },
    { content: '超好吃，一只营养等于一个鸡蛋 ', time: 108, color: '' },
    { content: '女孩子可以养一只 ', time: 1, color: '' },
    { content: '深海见 ', time: 124, color: '#E91E63' },
    { content: '深海见 ', time: 88, color: '#673AB7' },
    { content: 'hhhh这叫声怎么跟敲梆子似的 ', time: 39, color: '' },
    { content: '明显一只个头大一些 ', time: 65, color: '#673AB7' },
    { content: '口技了得 ', time: 7, color: '' },
    { content: '偷蛋贼 ', time: 91, color: '#2196F3' },
    { content: '同是小可爱何苦为难小可爱 ', time: 38, color: '#E91E63' },
    { content: '好想吃哦 ', time: 16, color: '' },
    { content: '小时候一抓一大碗，现在饭店卖到几块钱一只 ', time: 111, color: '' },
    { content: '松鼠都吃它 ', time: 45, color: '' },
    { content: '这也太可怜了吧233333，就是因为它太好吃了 ', time: 56, color: '' },
    { content: '吃饱了都不想吃了 ', time: 32, color: '#673AB7' },
    { content: '不会被吃灭绝了吧 ', time: 152, color: '#673AB7' },
    { content: '呆萌 ', time: 17, color: '' },
    {
      content: '头先着地的话会不会把脑袋插进叶子堆里去哈哈哈哈 ',
      time: 55,
      color: '',
    },
    { content: '像蟑螂 ', time: 48, color: '' },
    {
      content: '这是我看过的纪录片中最好看的，画面，剪辑还有解说都超喜欢 ',
      time: 60,
      color: '',
    },
    { content: '喊一声就完了 ', time: 121, color: '#2196F3' },
    { content: '起来加班了 ', time: 178, color: '#673AB7' },
    { content: '面包树来了哈哈哈 ', time: 198, color: '' },
    { content: '20190823唉上学去了 ', time: 85, color: '#673AB7' },
    { content: '然而这样美丽的雨林被火烧了三周都无人问津 ', time: 98, color: '' },
    {
      content: '美丽的雨林啊 如果以后没有人类的存在 请以后也要这样绚丽 ',
      time: 126,
      color: '#2196F3',
    },
    { content: '19.8.23，前面那个别走 ', time: 78, color: '' },
    { content: '小福腻 ', time: 25, color: '' },
    { content: '掉树根上就嗝屁了 ', time: 169, color: '' },
    { content: '鳄势力 ', time: 72, color: '' },
    { content: '更吹落，星如雨 ', time: 153, color: '' },
    { content: '温带落叶阔叶林 ', time: 38, color: '#E91E63' },
    { content: '跟小鸭子一样 ', time: 129, color: '' },
    { content: '像不像刚刚走路的你 ', time: 173, color: '#E91E63' },
    { content: '鸡也开屏？ ', time: 22, color: '#673AB7' },
    {
      content: '下一个十七年也许它们不会有机会醒过来了 ',
      time: 115,
      color: '#2196F3',
    },
    { content: '美团外卖 ', time: 156, color: '' },
    { content: '我喜欢这里 ', time: 112, color: '#E91E63' },
    { content: '您的好友林鸮已下线 ', time: 57, color: '' },
    { content: '共同进化 ', time: 24, color: '#2196F3' },
    { content: '嗷 抓不到qwq ', time: 154, color: '' },
    { content: '求偶专用翼帆 ', time: 179, color: '#E91E63' },
    { content: '说想住的还抱有这个想法吗(╹ૅ×╹ૅ) ', time: 109, color: '' },
    { content: '嗝儿~ ', time: 62, color: '' },
    { content: '哇，猴面包树！ ', time: 18, color: '' },
    { content: '哇 大猫 ', time: 6, color: '#2196F3' },
    { content: '哇 ', time: 154, color: '#673AB7' },
    { content: '傻袍子 ', time: 0, color: '#2196F3' },
    { content: '美式的你仿佛在逗我 ', time: 26, color: '' },
    { content: '爬树干嘛 ', time: 20, color: '' },
    {
      content: '栖息地被破坏就容易灭绝，，长啥样的都可能灭绝 ',
      time: 31,
      color: '',
    },
    { content: '猞猁！ ', time: 72, color: '#E91E63' },
    { content: '什么叫像啊，林鸮本来就是猫头鹰 ', time: 95, color: '#E91E63' },
    { content: '好可爱 ', time: 157, color: '' },
    { content: '你瞅啥瞅你咋的 ', time: 25, color: '#673AB7' },
    { content: '烤蝉超好吃的！！！ ', time: 172, color: '' },
    { content: '大脑斧 ', time: 142, color: '' },
    { content: '大家好。 ', time: 160, color: '#673AB7' },
    { content: '2019。8。 26 ', time: 56, color: '#E91E63' },
    { content: '呦呦鹿鸣食野之苹 ', time: 143, color: '#E91E63' },
    { content: '呦呦鹿鸣，食野之苹 ', time: 160, color: '' },
    { content: '另外4个小伙伴你们好~~ ', time: 132, color: '' },
    { content: '扎嘴了。。 ', time: 141, color: '#E91E63' },
    { content: '层林尽染 ', time: 169, color: '' },
    { content: '卧槽。。 ', time: 152, color: '' },
    { content: '哈哈哈 ', time: 62, color: '' },
    { content: '鹿：再来一些 ', time: 127, color: '#673AB7' },
    { content: '真正的黑恶势力 ', time: 1, color: '#2196F3' },
    { content: '深海 ', time: 156, color: '#673AB7' },
    { content: '开学前一天的我 ', time: 2, color: '#E91E63' },
    { content: '自由之翼 ', time: 113, color: '' },
    { content: '海狮还会吃企鹅... ', time: 150, color: '#673AB7' },
    { content: '迪亚特洛夫事件 ', time: 164, color: '' },
    { content: '大家吃的都好香 ', time: 179, color: '' },
    {
      content:
        '远东豹是不是都不到一百只啊？一只小宝宝的生死几乎承担了半个种群的存续 ',
      time: 180,
      color: '',
    },
    { content: '蕉迟但到23333333 ', time: 38, color: '#2196F3' },
    { content: '猴面包树这么光滑，鼠狐猴是怎么爬上去的呢 ', time: 158, color: '' },
    { content: '好可爱 ', time: 106, color: '' },
    { content: '啊啊啊啊啊啊啊啊啊啊啊 ', time: 4, color: '#673AB7' },
    { content: '2019-8-31 ', time: 12, color: '#673AB7' },
    { content: '托福阅读里有这个哎 ', time: 139, color: '' },
    { content: '讲道理，为什么你的脸圆圆的 ', time: 49, color: '#2196F3' },
    { content: '像鸭子 ', time: 48, color: '#2196F3' },
    { content: '这是正常的生物链，不要说什么灾难 ', time: 179, color: '#673AB7' },
    { content: '好可爱啊 ', time: 122, color: '#673AB7' },
    { content: '啊啊啊小可爱 ', time: 144, color: '' },
    { content: '我裂开了 ', time: 158, color: '#2196F3' },
    { content: '裂开 ', time: 22, color: '' },
    { content: '发光的那个只是反光 ', time: 52, color: '' },
    { content: '盲猜有北极熊 ', time: 93, color: '#673AB7' },
    { content: '看蛇 ', time: 106, color: '#E91E63' },
    { content: '有蛇吗 ', time: 198, color: '#2196F3' },
    { content: '不看人，要看蛇 ', time: 131, color: '' },
    { content: '辅助别浪 ', time: 85, color: '' },
    {
      content: '长得好像蟑螂 为啥这么多人怕蟑螂而不怕这个啊？ ',
      time: 122,
      color: '',
    },
    { content: '怎么，吃虫的还有优越感了？ ', time: 43, color: '#2196F3' },
    { content: 'slender 。。 ', time: 180, color: '#2196F3' },
    { content: 'rut。。 ', time: 171, color: '#673AB7' },
    { content: 'carcass。。 ', time: 5, color: '#E91E63' },
    { content: 'rouse from 。。 ', time: 179, color: '' },
    { content: '说得好 ', time: 50, color: '' },
    { content: '冰雪奇缘里的景色么？ ', time: 79, color: '' },
    { content: '最喜欢雪景了 ', time: 70, color: '' },
    { content: '鼓掌 ', time: 74, color: '#2196F3' },
    { content: '我要被萌死 ', time: 177, color: '' },
    { content: '非主流发型 ', time: 4, color: '' },
    { content: '你 ', time: 1, color: '#673AB7' },
    { content: '前面北美有树的牛逼 ', time: 96, color: '' },
    { content: '好好看吖 ', time: 185, color: '#2196F3' },
    { content: '何似在人间 ', time: 135, color: '' },
    { content: '我毛已炸 ', time: 49, color: '#2196F3' },
    { content: '大饼脸233 ', time: 97, color: '' },
    { content: '哈哈哈哈哈疯了 ', time: 36, color: '' },
    { content: '所以谁赢了？ ', time: 57, color: '' },
    { content: '始 ', time: 56, color: '' },
    { content: '变 ', time: 20, color: '' },
    { content: '变色成功 ', time: 144, color: '' },
    { content: '开 ', time: 187, color: '' },
    { content: '凶凶的挺好的呀 ', time: 66, color: '' },
    { content: '好胖吖 ', time: 82, color: '#2196F3' },
    { content: '妈妈你看那个肉是热的 ', time: 97, color: '' },
    { content: '这是沸羊羊的干爹（手动滑稽） ', time: 50, color: '' },
    { content: '哇塞 ', time: 127, color: '#2196F3' },
    { content: '还真是什么都心疼啊 ', time: 74, color: '' },
    { content: '指导这是自然 但是心理还是不太舒服 ', time: 141, color: '#2196F3' },
    { content: '对呀你咬我呀 ', time: 30, color: '#2196F3' },
    { content: '硬传播 ', time: 76, color: '' },
    { content: 'Primate灵长类动物 ', time: 169, color: '' },
    { content: '啊啊啊啊啊疯了 ', time: 61, color: '' },
    { content: 'stalking 跟踪 hare野兔', time: 25, color: '#2196F3' },
  ].sort(function (a, b) { return a.time - b.time })
}
