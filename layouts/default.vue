<template>
  <div>
    <header class="site-header">
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
  background-color: #222;
}

html, body {
  height: 100%;
  font-weight: 800;
  margin: 0;
}

body{
   background-color: #222;
   margin: 0;
   font-family: 'Montserrat',sans-serif;
   color: #999999;
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
  background-color: #999999;
}

ul {
  list-style: none;
}

.site-header{
  background:  #222;
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
  color: #fff;
  text-decoration: none;
  height: 20;
}

.footer {
  background-color: #222;
  padding: 32px 24px;
  font-weight: 300;
}

.text-center{
  display: flex;
  justify-content: center;
}
</style>
