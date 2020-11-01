<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p v-for="(count,key) in 2500" :key="key">{{ dates.getTime()  }}</p>
  </div>
  
  <router-view/>
</template>
<script>
import { Ipc } from '@/electron/ipcRenderer'
  let data={
      'a':'index',
      'b':2
  }
Ipc.on('index',(event, arg)=>{
  console.log(456,event, arg)
})
setInterval(() => {
  Ipc.send('work','orderPay',data)
}, 5 * 1000)// 等待 5 秒后第一次同步数据
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      count:1,
      dates: new Date()
    }
  },
  mounted() {
    setInterval(() => {
      this.dates = new Date()
    }, 0)
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
