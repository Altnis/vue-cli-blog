<template>
    <div class="apply">
        <div class="conte">
            <div class="myTop">
                <span class="top-left"><i class="iconfont" style="line-height:22px;font-size: 12px;">&#xe675;</i><a href="/">博客园</a></span>
                <span class="top-right">
                    [<a href="/login">登录</a> - <a href="/register">注册</a>]     
                </span>
            </div>
            <div class="applyqu">
                <div style="margin: 15px 0;">
                    <a href="/"><img src="https://www.cnblogs.com/images/logo_small.gif" alt="logo"></a>
                </div>
                <ul class="regnav">
                    <li><a href="/login">登录</a></li>
                    <li><a href="/register">注册</a></li>
                    <li id="zcbtn"><a style="color: #1f1f1f;" href="/login"><b>申请博客</b></a></li>
                    <li><a href="/back">找回用户名</a></li>
                    <li><a href="/reset">重置密码</a></li>                    
                </ul>
                <div class="zccont">
                    <div class="zcleft">
                        <div class="zcmes">*博客申请提示</div>
                    </div>
                    <div class="titmes">
                        注册用户登录后才能申请博客，立即<a href="/login">登录</a>或<a href="/register">注册</a>
                    </div>
                    <div class="return">
                        <button><a href="/">返回</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'apply'
}
</script>

<style scoped>
/*头部样式*/
.apply {
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
.applyqu {
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
.titmes {
    width: 670px;
    height: 45px;
    float: left;
    line-height: 25px;
    border-bottom: 2px solid #2b71a5;
    font-size: 12px;
}
.titmes a:hover {
    color: #904;
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
</style>