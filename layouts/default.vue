<template>
  <div>
    <header class="site-header">
      <!-- <nav class="gnav">
        <ul class="gnav__menu">
          <li class="gnav__menu__item"><a class="header_link" href="http://192.168.1.2:8000/biography">Biography</a></li>
          <li class="gnav__menu__item"><nuxt-link class="header_link" to="/portfolio">Portfolio</nuxt-link></li>
          <li class="gnav__menu__item"><nuxt-link class="header_link" to="/certification">Certification</nuxt-link></li>
          <li class="gnav__menu__item"><nuxt-link class="header_link" to="/culture">Culture</nuxt-link></li>
        </ul>
      </nav> -->
      <navbar/>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="text-center">
          <p>© 2019 shinnopo.me</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);

html {
  height: 100%;
  width: 100%;
  background-color: #111;
}

html, body {
  height: 100%;
  font-weight: 1.5px;
  margin: 0;
}

body{
   background-color: #111;
   margin: 0;
   font-family: 'Montserrat',sans-serif;
   color: #fff;
 }

a.header_link {
  display: block;
  padding: 20px 15px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

a.header_link:hover {
  color: #0cdce0;
  background-color: rgba(17, 17, 17, 0.699);
}

ul {
  list-style: none;
}

.site-header{
  background:  #111;
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
}

.site-logo img{
  height: 20px;
  width: auto;
}

.gnav__menu{
  display: flex;
  margin: 0 auto;
  /* margin-top: 20px; */
}
/* .gnav__menu__item{
  margin-left: 20px;
} */

.gnav__menu__item a{
  color: #0cdce0;
  text-decoration: none;
  height: 20;
}

.footer {
  background-color: #111;
  padding: 32px 24px;
  font-weight: 300;
}

.text-center{
  display: flex;
  justify-content: center;
}
</style>
