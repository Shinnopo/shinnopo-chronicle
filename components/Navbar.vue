<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item"><nuxt-link class="header_link" to="/">HOME</nuxt-link></div>
      <div class="navbar-burger" data-target="navMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div><!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <a class="header_link" href="https://shinnopo-portfolio.appspot.com/biography">Biography</a>
        <nuxt-link class="header_link" to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link class="header_link" to="/certification">Certification</nuxt-link>
        <nuxt-link class="header_link" to="/culture">Culture</nuxt-link>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<script>
export default {
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background:  #222;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  z-index: 9999;
}

.navbar-menu {
  background: #222;
}

.navbar-item {
  padding:0;
}
</style>
