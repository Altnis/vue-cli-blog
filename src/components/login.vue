<template>
    <div class="login">
        <div class="cont">
            <div class="logintit">登录博客园-代码改变世界</div>
            <form action="" method class="sub">
                <div style="margin-top: 8px;">
                    <label for="userid">登录用户名</label>(<a href="">找回</a>)
                    <br>
                    <input id="userid" type="text" >
                </div>
                <div style="margin-top: 8px;">
                     <label for="password">密码</label>(<a href="">重置</a>)
                    <br>                
                    <input id="password" type="password">
                </div>
                <div style="margin: 0 6px;">
                    <input id="zd" type="checkbox">
                    <label for="zd">下次自动登录</label>
                </div>
                <button class="submit">登录</button>
            </form>
            <div class="zc"><i class="iconfont">&#xf0030;</i><a href="/register">立即注册</a></div>
            <div class="fk"><i class="iconfont">&#xf0030;</i><a href="">反馈问题</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login'
}    
</script>

<style scoped>
.cont {
    width: 370px;
    height: 310px;
    border: 1px solid #ccc;
    margin: 55px auto;
    padding-left: 50px;
}
.logintit {
    color: #904;
    margin-top: 35px;
}
.sub label, .sub a {
    font-size: 12px;
}
#userid, #password {
    width: 208px;
    height: 27px;
}
.submit {
    width:100px;
    height: 25px;
    border:1px solid #ccc;
    color: #904;
    margin: 5px 0;
}
.zc, .fk ,.iconfont{
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    font-weight: 100;
}
</style>