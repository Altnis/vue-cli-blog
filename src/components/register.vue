<template>
    <div class="register">
        <div class="conte">
            <div class="myTop">
                <span class="top-left"><i class="iconfont" style="line-height:22px;font-size: 12px;">&#xe675;</i><a href="/">博客园</a></span>
                <span class="top-right">
                    [<a href="/login">登录</a> - <a href="/register">注册</a>]     
                </span>
            </div>
            <div class="zhucequ">
                <div style="margin: 15px 0;">
                    <a href="/"><img src="https://www.cnblogs.com/images/logo_small.gif" alt="logo"></a>
                </div>
                <ul class="regnav">
                    <li><a href="/login">登录</a></li>
                    <li id="zcbtn"><a style="color: #1f1f1f;" href="#/register"><b>注册</b></a></li>
                    <li><a href="/apply">申请博客</a></li>
                    <li><a href="/back">找回用户名</a></li>
                    <li><a href="/reset">重置密码</a></li>                    
                </ul>
                <div class="zccont">
                    <div class="zcleft">
                        <div class="zcmes">* 提示：这里是面向开发者的知识分享社区，不允许发布任何推广信息</div>
                        <!--邮箱-->
                        <label for="">邮    箱: </label><input v-model="email" data-vv-delay="1000" name="email" :class="{'input': true, 'is-danger': errors.has('email') }" type="email"><br>
                        <div class="promes">需要通过邮箱激活帐户，不支持163, sina, sohu的邮箱</div>
                        <p v-show="errors.has('email')" class="help is-danger">输入的邮箱不符合规则，请重新输入</p>
						<!--用户名-->
                        <label for="">用 户 名:</label><input v-model="name" name="name" :class="{'input': true, 'is-danger': errors.has('name') }" type="text"><br>
                        <div class="promes">仅在登录时使用，字符数不少于4个</div>
                        <p v-show="errors.has('name')" class="help is-danger">用户名不能少于四个字符</p>
						<!--昵称-->
                        <label for="">昵 称:</label><input v-model="nicheng" name="昵称" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('nicheng') }" type="text"><br>
                        <div class="promes">即昵称，字符数不少于2个</div>
                        <p v-show="errors.has('nicheng')" class="help is-danger">昵称不能少于2个字符</p>
                        <!--密码-->
                        <label for="">密    码:</label><input name="mima" class="mima" v-model="mima" :class="{'input': true, 'is-danger': errors.has('mima') }" type="password"><br>
                        <div style="height:3px;"></div>
                        <p v-show="errors.has('mima')" class="help is-danger">密码应该由6-18位字母数字组成，不能包含特殊字符</p>
                        <!--确认密码-->
                        <label for="">确认密码:</label><input  v-model="qmm" name="qmm" :class="{'input': true, 'is-danger': errors.has('qmm') }" type="password"><br>
                        <div style="height:3px;"></div>
                        <p v-show="errors.has('qmm')" class="help is-danger">两次密码不一致</p>
                        <!--验证码-->
                        <label for="">验 证 码:</label><input type="text"><br>                      
                        <button class="reg">注册</button>
                        <div style="font-size: 12px;height: 40px;line-height:70px;">点击 “注册” 按钮，即表示您同意并愿意遵守<a href="https://passport.cnblogs.com/agreement.html">用户协议</a></div>
                        
                    </div>
                    
                    <div class="zcright">
                        <div style="height: 30px;"><i class="iconfont">&#xe612;</i><a href="/apply">申请博客</a></div>
                        <div style="height: 30px;"><i class="iconfont">&#xe612;</i><a href="">重发激活邮件</a></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Validator } from 'vee-validate';
export default {
    name: 'register',
    validator: null,
    data: () => ({
        email: '',
        name: '',
        nicheng: '',
        qmm: '',
        mima: '',
        errors: null
    }),
    watch: {
        email(value) {
            this.validator.validate('email', value)
        },
        name(value) {
            this.validator.validate('name', value)
        },
        nicheng(value) {
        	this.validator.validate('nicheng', value)
        },
        qmm(value) {
        	this.validator.validate('qmm', value)
        },
        mima(value) {
        	this.validator.validate('mima', value)
        }
    },
    methods: {
        validateForm() {
            this.validator.validateAll({
                email: this.email,
                name: this.name,
                nicheng: this.nicheng,
                qmm: this.qmm,
                mima: this.mima
            });
        },
        clearErrors() {
            this.errors.clear();
        }
    },
    created() {
        this.validator = new Validator({
            email: 'required|email|',
            name: 'required|min:4',
            nicheng: 'required|min:2',
            qmm: 'required|confirmed:mima',
            mima: 'required|alpha_num|min:6|max:18'
        });
        this.$set(this, 'errors', this.validator.errorBag);
    }
}
</script>

<style scoped>
/*头部样式*/
.register {
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
.zhucequ {
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
.promes {
     font-size: 12px;
     padding-left: 65px;
     height: 30px;
     line-height: 25px;
     color:#8795a8;
}
.reg {
    width: 106px;
    height: 33px;
    border: 1px solid #ccc;
    background: #e9e9e9;
    color: #000;
    margin-left: 65px;
    margin-top: 16px;
}
.zcright {
    width: 280px;
    float: left;
    padding:50px 0 0 25px;
    font-size: 12px; 
}
.iconfont {
    font-size: 12px;
    color: #111;
}
.zcright a:hover {
    color: #e0430f;
}
.is-danger {
    margin-left: 63px;
    height: 25px;
    line-height: 25px;
    color: red;
    font-size: 14px;
    font-family: '微软雅黑';
}
</style>