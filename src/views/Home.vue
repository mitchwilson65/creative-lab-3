<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <HelloWorld msg="Anchors Away! Employee list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
