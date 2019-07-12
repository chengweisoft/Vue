<template>
    <div class="top">
        This is My first Vue
        <span>{{name}}</span>
        <input v-model="name">//双向绑定
        <div id="app-2">
  <span v-bind:title="message">
      {{message}}
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
        </div>
        <button @click="reverseMessage">Btn1</button>//点击事件
        <button @keyup.enter="keyup">Btn2</button>//键盘按键事件

        //for
<ul>
        <li  v-for="i in arry">
            {{i}}
        </li>
</ul>
        <fistcom></fistcom>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    import fistcom from './component/template'
    export default {
        name: "home",
        data() {
            return {
                name: '张三',
                message: '页面加载于 ' + new Date().toLocaleString(),
                arry:[1,2,3,4],
                input:''
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            },
            keyup:function () {
                this.name="李四"
            }
        },
        components: {
            fistcom
        }
    }
</script>

<style scoped>
    .top {
        background-color: antiquewhite;
    }
</style>