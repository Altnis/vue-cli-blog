<template>
    <div class="back">
        <div class="conte">
            <div class="myTop">
                <span class="top-left"><i class="iconfont" style="line-height:22px;font-size: 12px;">&#xe675;</i><a href="/">博客园</a></span>
                <span class="top-right">
                    [<a href="/login">登录</a> - <a href="/register">注册</a>]     
                </span>
            </div>
            <div class="backqu">
                <div style="margin: 15px 0;">
                    <a href="/"><img src="https://www.cnblogs.com/images/logo_small.gif" alt="logo"></a>
                </div>
                <ul class="regnav">
                    <li><a href="/login">登录</a></li>
                    <li><a href="/register">注册</a></li>
                    <li><a href="/apply">申请博客</a></li>
                    <li id="zcbtn"><a style="color: #1f1f1f;" href="/back"><b>找回用户名</b></a></li>
                    <li><a href="/reset">重置密码</a></li>                    
                </ul>
                <div class="zccont">
                    <div class="zcleft">
                        <div class="zcmes">*找回登录用户名</div>
                    </div>
                    <div class="message">
                        <label for="email">邮 箱:</label><input id="email" type="text"><br>
                        <div style="height:4px;"></div>
                        <label for="yzm">验 证 码:</label><input id="yzm" type="text">                        
                    </div>
                    <div class="return">
                        <button><a href="">找回</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'back'
}
</script>

<style scoped>
/*头部样式*/
.back {
    width: 100%;
}
.myTop {
    padding: 0 5px;
    height: 24px;
    line-height: 24px;
    background: #f8f8f8;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.top-left, .top-right {
    font-size: 12px;
    font-family: '微软雅黑';
    float: left;
}
.top-right {
    float: right;
}
.top-right, .top-left {
    cursor: pointer;
}
.top-right a:hover {
    color: #904;
}
.backqu {
    width: 975px;
    margin: 0 auto;
    padding-bottom: 25px;
    border-bottom: 1px solid #ccc;
    height: 540px;
}
.regnav {
    height: 25px;
    line-height: 25px;
    font-size: 15px;
    background: #e5ecf9;
    border-bottom: 1px solid #ccc;
}
.regnav li {
    float: left;
    margin: 0 25px;
    cursor: pointer;
}
.regnav li:hover a {
    color: #e0430f;
}
#zcbtn {
    padding: 0 25px;
    background: #fff;
    border: 1px solid #787888;
    border-bottom: none;
}
.zcleft {
    width: 670px;
    float: left;
}
.zcmes {
    font-size: 12px;
    color: #333;
    height: 50px;
    line-height: 80px;
    border-bottom: 3px solid #bdcfdc;
    margin: 0 0 20px 0;
}
.zcleft input {
    width: 215px;
    height: 25px;
    border: 1px solid #ccc;
    margin: 0 5px;
}
.zcleft label {
    font-size: 12px;
    text-align: center;
    float:left;
    width:60px;
    line-height: 25px;
}
.return {
    width: 670px;
    height: 70px;
}
.return button {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #3c8ee1;
    border-radius: 5px;
    margin: 20px 285px;
}
.return button a {
    color: white;    
}
.message {
    width: 670px;
}
.message label {
    font-size: 12px;
    text-align: center;
    float: left;
    width: 60px;
    line-height: 25px;
}
.message input {
    width: 215px;
    height: 25px;
    border: 1px solid #ccc;
    margin: 0 5px;
}
</style>