<template>
    <div class="container">
        <div class="userinfo">
            <img src="" alt="">
            <p></p>
        </div>
        <yearProgress></yearProgress>
        <button class="btn">添加图书</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userinfo: {}
        }
    },
    created(){
        // 同步读取
        this.userinfo = wx.getStorageSync()
    }
}
</script>
<style lang="scss">
.container{
    padding: 0 30rpx;
    .userinfo{
        margin-top: 100rpx;

    }
}

</style>
