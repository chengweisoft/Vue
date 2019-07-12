<template>
    <div>
        edit{{test}}
        <p><router-link to="/account">返回Accout</router-link> /*router跳转页面*/</p>
        <p><el-link type="primary" @click="btnBack">返回</el-link>/*Click跳转页面*/</p>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                test: "张三"
            }
        },methods:{
            btnBack(){
                this.$router.push({name: 'account'})
            }
        }
    }
</script>

<style scoped>

</style>