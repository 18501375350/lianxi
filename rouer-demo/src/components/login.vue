<template>
 <div class="wrapper">
     账号：<input type="text" v-model="user.username">
     密码：<input type="password" v-model='user.pass'>
     <button @click="login()">登陆</button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 components: {},
 props: {},
 data () {
 return {
     user:{
         username:'',
         pass:''
     }
 };
 },
 watch: {},
 computed: {},
 methods: {
     login(){
         this.$store.dispatch('setUser',this.user)
         alert('登陆成功'+this.user.username+this.user.pass)
     }
 },
 mounted () {
     console.log(this.$store.state.user)
    //  console.log(JSON.parse(this.$store.state.user))
    //  if(this.$store.state.user){
    //      this.$router.push('/home')
    //  }
     
 }
};
</script>
<style scoped>
</style>
