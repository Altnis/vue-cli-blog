<template>
  <div class="hello">
    <div class="myTop">
        <span class="top-left">代码改变世界</span>
        <span class="top-right">
          [<a href="/login">登录</a> - <a href="/register">注册</a>]     
        </span>
    </div>
    <div class="loBan">
        <img src="https://www.cnblogs.com/images/logo_small.gif" title="博客园" alt="博客园">
        <img class="banimg" src="https://img.alicdn.com/tfs/TB1reT7QXXXXXcBXpXXXXXXXXXX-468-60.gif" alt="广告" title="广告">
    </div>
    <ul class="bnav">
      <li v-for="item in items">
        {{ item.mes }}
      </li>
    </ul>
    <div class="leftsidebar">
        <!--网站分类-->
        <ul class="wzfl">
          <li class="wzfltit"><i class="iconfont">&#xe6a0;</i> 网站分类</li>
          <li v-for="fl in fls" class="wzfllis">
            {{ fl }} <span style="color: #2b85d8;float: right;"><i class="iconfont" style="font-size: 12px;">&#xe612;</i></span>
          </li>
        </ul>
        <!--链接-->
        <ul class="lianjie">
          <li class="ljlis" v-for="lj in tasks">{{ lj.lj }}</li>
        </ul>
        <ul class="bktj">
          <li class="ljlis" v-for="bktj in bktjs">{{ bktj.bkzj }}</li>
        </ul>
        <ul class="zxtj">
          <li class="ljlis" v-for="zxtj in zxtjs">{{ zxtj.zxtj }}</li>
        </ul>
        <ul class="tjbk">
          <li class="ljlis" v-for="tjbk in tjbks">{{ tjbk.tjbk }}</li>
        </ul>
        <ul class="tjxx">
          <li class="ljlis" v-for="tjbk in tjxxs">{{ tjbk.tjxx }}</li>
        </ul>
    </div>
    <div class="center">
    	<!--内容区导航-->
		<ul class="centernav">
			<li id="act"><a href="/">首页</a></li> <li><a href="">精华</a></li> <li><a href="">候选</a></li> <li><a href="">关注</a></li> <li><a href="">我评</a></li> <li><a href="">我赞</a></li>
		</ul>
		<!--内容区列表-->
		<ul class="centerlist">
			<li> </li>
			<li style="font-size: 16px;"><a href=""><b>【编辑推荐】程序员的工作、学习与绩效 (6/2698) »</b></a></li>
			<li><a href="">[最多推荐]你看那个人他像一条狗(28/1923) »</a></li>
			<li><a href="">[最多评论]2年前端学习历程，与找不到工作的悲愤与吐槽！（100%真实经历，看博主怎么一步步走向失业）(86/3080) »</a></li>
			<li><a href="">[新闻头条]15年股价涨2600倍，网易是怎么做到的？(13/1554) »</a></li>
			<li><a href="">[推荐新闻]如果竞争就是烧钱，出钱的投资人该怎么盈利？(0/706) »</a></li>
		</ul>
		<!--文章列表-->
		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ a }}</div>
				<button class="tjbtn" @click="a+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>
		
		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ b }}</div>
				<button class="tjbtn" @click="b+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>
		
		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ c }}</div>
				<button class="tjbtn" @click="c+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>
		
		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ d }}</div>
				<button class="tjbtn" @click="d+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>
		
		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ e }}</div>
				<button class="tjbtn" @click="e+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>

		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ f }}</div>
				<button class="tjbtn" @click="f+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>

		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ g }}</div>
				<button class="tjbtn" @click="g+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>

		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ h }}</div>
				<button class="tjbtn" @click="h+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>

		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ i }}</div>
				<button class="tjbtn" @click="h+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>

		<div class="articlelist">
			<div class="tuijian">
				<div class="num">{{ j }}</div>
				<button class="tjbtn" @click="h+=1"><i class="iconfont">&#xe6aa</i>推荐</button>
			</div>
			<dl>
				<dd class="arttit"><a href="">IT生涯, 我的常用软件清单</a></dd>
				<dt class="artimg"><img src="https://pic.cnblogs.com/face/360406/20160219171132.png" /></dt>
				<li class="artcont"><a href="">近日工作闲暇之余，对IM系统产生了兴趣，转而研究了IM的内容。找了半天，知道比较流行的是Openfire的系统，Openfire有许多平台实现，由于我是做Web的，所以当然是希望寻找Web的实现。Openfire的以前的Web实现，是基于Http-bind的一种长轮询机制，当然也没什么不好，只是我现在HTML5都开始了，当然希望能够来个基于Websocket的机制了。然而Google&百度了好久，也没有找到什么教程，发现这个东西并不是很火热的样子，那只好自己开始研究了。于是有了这一篇文章。对了，我知道xmpp的JS框架有几个，但那些框架似乎都是按照原本的长轮询的机制来做的，并不是使用Websocket来做的。另外，做软件2年了，当我刚涉足这个行业时，我被告知：“不要重复造轮子！”，曾经我对此深信不疑，但这两年的工作让我越发认识，不要重复造轮子，仅仅是在于做项目当中，做一个商业产品的时候，考虑到开发速度和产品后期的稳定性及维护性，确实需要采用成熟的技术，但！这不代表作为一个程序员，不应该抱着一种从0开始的研究精神，如果真的热爱这个行业，这个领域，就应该尝试着，根据RCF文档协议，从基础协议的层次开始做软件。好了，废话不多说。恩，开始正文吧。</a></li>
				<li class="autormes"><a href="">SkySeraph</a>发布于 2017-03-26  17:58 <i class="iconfont">&#xe638;</i><a href=""> 评论(16) </a><i class="iconfont" style="color: #1a64a9;">&#xe602;</i><a href=""> 阅读(126) </a></li>
			</dl>
		</div>
    </div>
  	<div class="right">
  		<div class="search">
  			<input class="tex" type="text"/> <input class="seabtn" type="button" value="找找看" />
  			<div style="height: 10px"></div>
  			<input class="tex" type="text"/> <input class="seabtn" type="button" value="Geogle" />
  		</div>
  		<img src="https://images2015.cnblogs.com/news/24442/201703/24442-20170316072004010-1309944706.gif"/>
  		<ul class="bannerlist">
  			<li><a href="http://fineui.com/">【福利】9 年开源路，免费 ASP.NET MVC 控件下载</a></li>
  			<li><a href="http://www.hightopo.com/cn-index.html">【推荐】HTML5拓扑3D机房，电力工控Web SCADA</a></li>
  			<li><a href="https://news.cnblogs.com/n/564774/">【福利】iOS/Python/C++初中级免费直播课</a></li>
  			<li><a href="https://activity.ksyun.com/1702/index.html?ch=00033.00005.0011702&hmsr=cnblog&hmpl=1702&hmcu=&hmkw=&hmci=">【抢】大学生专享｜9.9元即刻拥有一台云服务器</a></li>
  			<li><a href="https://promotion.aliyun.com/ntms/campus2017.html?utm_campaign=campus2017&utm_medium=images&utm_source=cnblogs&utm_content=m_12746">【活动】与金山云一起改变云计算</a></li>
  		</ul>
  		<ul class="news">
  			<li><a href="https://news.cnblogs.com/" style="color: #e47911;font-size: 14px;height: 30px;line-height: 30px;">最新新闻</a></li>
  			<li><a href="">男子三星手机过热报废：售后时被迫签封口协议</a></li>
  			<li><a href="">ofo刚传出接入滴滴 摩拜就宣布接入微信九宫格</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  			<li><a href="">Facebook Stories更新：几乎是Snapchat的翻版</a></li>
  			<li><a href="">微软Ignite 2017将于9月25日开幕 现已开放注册</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  		</ul>
  		<ul class="news" style="margin: 30px 0;">
  			<li><a href="https://www.cnblogs.com/aggsite/topviews" style="color: #e47911;font-size: 14px;height: 30px;line-height: 30px;">48小时阅读榜</a></li>
  			<li><a href="">男子三星手机过热报废：售后时被迫签封口协议</a></li>
  			<li><a href="">ofo刚传出接入滴滴 摩拜就宣布接入微信九宫格</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  			<li><a href="">Facebook Stories更新：几乎是Snapchat的翻版</a></li>
  			<li><a href="">微软Ignite 2017将于9月25日开幕 现已开放注册</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  		</ul>
  		<img style="width: 300px;height: 250px;" src="https://images2015.cnblogs.com/news/24442/201703/24442-20170323175419330-619990066.jpg"/>
		<ul class="news" style="margin: 30px 0;">
  			<li><a href="https://www.cnblogs.com/aggsite/topdiggs" style="color: #e47911;font-size: 14px;height: 30px;line-height: 30px;">十天推荐排行榜</a></li>
  			<li><a href="">男子三星手机过热报废：售后时被迫签封口协议</a></li>
  			<li><a href="">ofo刚传出接入滴滴 摩拜就宣布接入微信九宫格</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  			<li><a href="">Facebook Stories更新：几乎是Snapchat的翻版</a></li>
  			<li><a href="">微软Ignite 2017将于9月25日开幕 现已开放注册</a></li>
  			<li><a href="">深度揭密SSD中的原片/白片/黑片</a></li>
  			<li><a href="">癌症患者的福音：一管血就能测癌？这是真的</a></li>
  			<li><a href="">亚马逊推出新服务 15分钟让用户自提生鲜杂货</a></li>
  		</ul>
  	</div>
  </div>
</template>

<script>


export default {
  name: 'hello', 
  data: function () {
    return {
        tasks: '',
        bktjs: null,
        zxtjs: null,
        tjbks: null,
        tjxxs: null,
        items: [{
          'mes': '园子'
      },{
          'mes': '新闻'
      },{
          'mes': '博问'
      },{
          'mes': '闪存'
      },{
          'mes': '小组'
      },{
          'mes': '收藏'
      },{
          'mes': '招聘'
      },{
          'mes': '知识库'
      },{
          'mes': '找找看'
      }],
      fls: [
          '.NET技术(4)', '编程语言(5)', '软件设计(1)', 'Web前端(4)', '企业信息化(0)',  '手机开发(0)', '软件工程(0)', '数据库技术(3)', '操作系统(0)', '其他分类(1)', '所有随笔(516)', '所有评论(183)'
      ],
      a: 0,b: 0,c: 0,d: 0,e: 0,f: 0,g: 0,h: 0,i: 0,j: 0
    }
  },
  mounted () {
    this.getCustomers()
    this.getCustomers1()
    this.getCustomers2()
    this.getCustomers3()
    this.getCustomers4()
  },
  methods:{
    getCustomers: function () {
      this.$http.get("http://oin2ckv0u.bkt.clouddn.com/list.json")
          .then(function (response) {
              this.$set(this, 'tasks', response.data)
          })
          .catch(function (response) {
              console.log(response)
          })
    },
    getCustomers1: function () {
      this.$http.get("http://oin2ckv0u.bkt.clouddn.com/list1.json")
          .then(function (response) {
              this.$set(this, 'bktjs', response.data)
          })
          .catch(function (response) {
              console.log(response)
          })
    },
    getCustomers2: function () {
      this.$http.get("http://oin2ckv0u.bkt.clouddn.com/list2.json")
          .then(function (response) {
              this.$set(this, 'zxtjs', response.data)
          })
          .catch(function (response) {
              console.log(response)
          })
    },
    getCustomers3: function () {
      this.$http.get("http://oin2ckv0u.bkt.clouddn.com/list5.json")
          .then(function (response) {
              this.$set(this, 'tjbks', response.data)
          })
          .catch(function (response) {
              console.log(response)
          })
    },
    getCustomers4: function () {
      this.$http.get("http://oin2ckv0u.bkt.clouddn.com/list4.json")
          .then(function (response) {
              this.$set(this, 'tjxxs', response.data)
          })
          .catch(function (response) {
              console.log(response)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部样式*/

a:hover {
	text-decoration: underline;
}
.hello {
    padding: 0 5px;
}
.myTop {
    width: 100%;
    height: 22px;
    line-height: 22px;
}
.top-left, .top-right {
    font-size: 12px;
    font-family: '微软雅黑';
    float: left;
}
.top-right {
    float: right;
}
.top-right a:hover {
    color: #904;
}
/*logo+banner样式*/
.loBan {
    width: 100%;
    height: 68px;
    border: 1px solid #d8dfea;
    border-radius: 4px;
    padding: 5px;
    -webkit-box-sizing: border-box;
}
.banimg{
    float: right;
}
/*头部大导航样式*/
.bnav {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #2b6695;
    margin: 8px 0;
    padding-left: 14px;
    -webkit-box-sizing: border-box;
}
.bnav li {
    float: left;
    color: white;
    font-size: 14px;
    margin: 0 13px;
    cursor: pointer;
}
.bnav li:hover {
    text-decoration: underline;
}
/*左边侧边栏*/
.leftsidebar {
    width: 160px;
    height: 100%;
    background: #eef;
    float: left;
}
/*网站分类*/
.wzfl {
    width: 154px;
    height: 370px;
    border-left: 5px solid #146eb4;
    border-top: 2px solid #146eb4;
    border-bottom: 2px solid #146eb4;
    border-right:1px solid #83abc6;
    border-radius: 4px 0 0 4px;
    text-indent: 8px;
}
.wzfltit {
    height: 28px;
    line-height: 28px;
    color: black;
    font-weight: 600;
    border-bottom:1px solid #83abc6;  
}

.wzfllis {
    height: 27px;
    line-height: 26px;
    color: #404040;
    border-bottom:1px dashed #83abc6;
    cursor: pointer;
    font-size: 12px;
    padding-right: 5px;
}

.wzfllis:hover {
    background: white;
    box-shadow: 0 3px #999;
    border-top:1px solid #ccc;
    border-bottom: none;
}
/*链接*/
.lianjie, .bktj, .zxtj, .tjbk, .tjxx {
    width: 158px;
    padding: 4px 0;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.lianjie li:first-child, .bktj li:first-child, .zxtj li:first-child, .tjbk li:first-child, .tjxx li:first-child {
    height: 30px;
    line-height: 30px;
    font-weight: 600;
    font-size: 16px;
    text-indent: 5px;
}
.ljlis {
    line-height: 20px;
    font-size: 12px;
    text-indent: 15px;
    color: #404040;
    cursor: pointer;
}
.ljlis:hover {
    text-decoration: underline;
    color: #e9552e;
}

/*中间内容区*/
.center {
    width: 850px;
    height: 100%;
    margin: 0 10px;
    float: left;
}
.centernav {
	width: 850px;
	height: 30px;
	border-bottom: 1px solid #ccc;
}
.centernav a {
	color: #000000;
}
.centernav li{
	width: 50px;
	height: 29px;
	margin:0 5px;
	float: left;
	font-size: 14px;
	border: 1px solid #abcee3;
	background: #e8edf0;
	border-bottom: 0;
	text-align: center;
	line-height: 29px;
}
#act {
	width: 50px;
	height: 30px;
	margin:0 5px;
	float: left;
	border: 1px solid #abcee3;
	background: #fff;
	border-bottom: 1px solid #FFFFFF;
	text-align: center;
	line-height: 29px;
}
.centerlist li {
	text-align: left;
	height: 25px;
	font-size: 12px;
}
.centerlist li:hover a {
	color: #e73e06;
	text-decoration: underline;
}
.articlelist{
	width: 850px;
	height: 155px;
	border-bottom: 1px dashed #ccc;
}
.articlelist dl{
	width: 790px;
	float: left;
}
.tuijian{
	width: 60px;
	height: 140px;
	float: left;
	padding-top: 15px;
}
.num{
	width: 48px;
	height: 48px;
	background: #fff7dd;
	border: 1px solid #f5e5a9;
	color: #1E7BD2;
	text-align: center;
	line-height: 48px;
}
.tjbtn {
	width: 48px;
	height: 18px;
	background: #f1f8fa;
	border: 1px solid #d4d0e5;
	color: #1E7BD2;
	text-align: center;
	line-height: 18px;
}
.arttit {
	font-weight: 900;
	height: 40px;
	font-size: 14px;
	line-height: 40px;
	text-decoration: underline;
}
.arttit a:hover {
	color: #990044;
}
.artcont {
	font-size: 12px;
	width: 735px;
	height: 45px;
	float: left;
	line-height: 15px;
	position:relative;
  overflow:hidden;
}
.artcont::after {
	content:"...";
  font-weight:bold;
  position:absolute;
  bottom:0;
  right:0;
  background:url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
}

.artimg {
	width: 55px;
	height: 55px;
	float: left;
}
.autormes {
	width: 790px;
	height: 45px;
	float: left;
	line-height: 45px;
	font-size: 12px;
}
.iconfont {
	font-size: 12px;
	color: #1e7bd2;
}
/*右边*/
.right {
	width: 300px;
	background: #eef;
	float: right;
	margin-top: 30px;
}
.search {
	width: 280px;
	height: 68px;
	padding: 10px;
}
.search .tex{
	width: 184px;
	height: 24px;
	border: 1px solid #7e9db9;
}
.search .seabtn{
	width: 76px;
	line-height: 26px;
	height: 26px;
	text-align: center;
	color: #666;
}
.bannerlist{
	width: 300px;
	height: 122px;
	border-bottom: 1px solid #ddd;
	line-height: 22px;
	font-size: 12px;
	padding-top: 8px;
}
.bannerlist a {
	color: #333333;
} 
.bannerlist a:hover {
	color: #e22323;
}

.news {
	width: 298px;
	height: 260px;
	border:1px solid #ddd;
	line-height: 22px;
	font-size: 12px;
	text-indent: 10px;
}
.news a{
	color: #333;
}
.news a:hover {
	color: #E22323;
}
</style>