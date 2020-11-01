<template>
  <div id="nav">
    work
  </div>
</template>
<script>
import { Ipc } from '@/electron/ipcRenderer'
  let data={
      'a':'index',
      'b':2
  }
Ipc.on('work',(event, arg)=>{
  console.log(123,event, arg)
})

setInterval(() => {
  Ipc.send('index','user',data)
}, 5 * 1000)// 等待 5 秒后第一次同步数据
export default {
  name: 'App',
  components: {
  }
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
