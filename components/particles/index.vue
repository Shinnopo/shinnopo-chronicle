<template>
  <div id="partices"/>
</template>

<script>
import particles from '~/assets/js/particles/particles.js'

export default {
  mounted() {
    // 画面が表示された時にparticles.jsを動かす
    window.particlesJS('particles', particles.data)
  }
}
</script>

<style>
#particles {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>