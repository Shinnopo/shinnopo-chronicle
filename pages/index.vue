<template lang="pug">
div
  #title
    svg.svg-title(viewBox='0 0 990 700')
      symbol#s-text
        text(text-anchor='middle', x='50%', y='30%') Shinnosuke
        text(text-anchor='middle', x='22%', y='60%') Mogi
        text(text-anchor='middle', x='38%', y='90%') Portfolio
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
  no-ssr
    particles
</template>

<script>
import particles from '~/components/particles'

export default {
  fetch ({store}) {
    store.commit('resetMenu')
  },
  components: {
    particles
    
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  padding: 20px 15px;
  text-align: center;
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #999999;
}

@keyframes stroke-offset{
  100% {stroke-dashoffset: -35%;}
}

svg {
    display: block;
    font: 10.5em 'Montserrat',sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #111;
  }

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 1.5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
    stroke: #0cdce077;
    animation-delay: -1;
}

.text-copy:nth-child(2){
    stroke: #0cdce077;
    animation-delay: -2s;
}

.text-copy:nth-child(3){
    stroke: #0cdce077;
    animation-delay: -3s;
}

.text-copy:nth-child(4){
    stroke: #0cdce077;
    animation-delay: -4s;
}

.text-copy:nth-child(5){
    stroke: #0cdce077;
    animation-delay: -5s;
}

@keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
}

@media screen and (min-width:1300px){
  a {
    display: block;
    padding: 20px 15px;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #999999;
  }

  @keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
  }

  svg {
      display: block;
      font: 10.5em 'Montserrat', sans-serif;
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      background-color: #111;
    }

  .text-copy {
      fill: none;
      stroke: white;
      stroke-dasharray: 6% 29%;
      stroke-width: 1.5px;
      stroke-dashoffset: 0%;
      animation: stroke-offset 5.5s infinite linear;
  }

  .text-copy:nth-child(1){
      stroke: #0cdce0;
      animation-delay: -1;
  }

  .text-copy:nth-child(2){
      stroke: #0cdce0;
      animation-delay: -2s;
  }

  .text-copy:nth-child(3){
      stroke: #0cdce0;
      animation-delay: -3s;
  }

  .text-copy:nth-child(4){
      stroke: #0cdce0;
      animation-delay: -4s;
  }

  .text-copy:nth-child(5){
      stroke: #0cdce0;
      animation-delay: -5s;
  }

  @keyframes stroke-offset{
      100% {stroke-dashoffset: -35%;}
  }
}
</style>
