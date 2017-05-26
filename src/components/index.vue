<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>{{msg}}</h1>
    </div>
    <router-link to="hometwo">pageA</router-link>
    <group title="这是一个">
      <cell title="Vux" value="Cool" link="/hometwo/" is-link></cell>
      <cell title="Vux" value="哈哈哈" link="https:www.baidu.com" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: '你想干啥!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
