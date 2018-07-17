<script>
// 因为 util  文件分多次导出， 所以需要解构赋值
import {get, showSuccess} from './util'
import qcloud from 'wafer2-client-sdk'
import config from './config'

export default {
    async created() {
     // 设置登录地址
    //  腾讯微信 的 获取登录信息接口
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
            success: function (userinfo) {
                console.log('登录成功', userinfo);
                showSuccess('登陆成功')
                // 同步存储信息
                wx.setStorageSync('userinfo',userinfo)
            },
            fail: function (err) {
                console.log('登录失败', err);
            }
        });
    }
}



</script>
<style>

</style>
