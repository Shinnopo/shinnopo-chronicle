<template lang="pug">
div
  section
    svg.page_title(viewBox='0 0 990 700')
      symbol#s-text
        text(text-anchor='middle', x='50%', y='70%') Biography
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
  div
    section.section
      #pro_image
        img.pro_img(src='~/assets/img/me.png', alt=shinnopo)
      .pro_myname
        | Shinnopo
      .link_img
        a.github(href='https://github.com/Shinnopo')
          span
            img.github(src='~/assets/img/GitHub-Mark-Light-32px.png', alt=github)
        a.twitter(href='https://twitter.com/home')
          span
            img.twitter(src='~/assets/img/Twitter_Social_Icon_Circle_Color.png', alt=twitter)
        a.qiita(href='https://qiita.com/Shinnopo')
          span
            img.qiita(src='~/assets/img/qiita-square.png', alt=qiita)
        a.hatena(href='https://shinnopo.hatenablog.com/')
          span
            img.hatena(src='~/assets/img/hatenablog-logo.svg', alt=hatena)
      .cal
        dl
          .profile
            dt age0
            dd 東京に生まれる。
          .profile
            dt age10
            dd HTMLでホームページを作る。
          .profile
            dt age14
            dd C#でロボットを作る。
          .profile
            dt age17
            dd 部活を作り、Pythonを教える。
          .profile
            dt age18
            dd アクセンチュアの社員らとSNSアプリを開発する。
          .profile
            dt age19
            dd Daps,incでインターン。
    section.skils
      h2.skil_title Skils
      // Container
      .container
        ul.progress
          // Item
          li(data-name='HTML/Pug Skill', data-percent='85%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='503.2')
          // Item
          li(data-name='CSS/SCSS Skill', data-percent='75%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='471.75')
          // Item
          li(data-name='JavaScript Skill', data-percent='90%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='566.1')
          // Item
          li(data-name='React Skill', data-percent='80%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='503.2')
              // Item
          li(data-name='Vue.js(Nuxt.js) Skill', data-percent='75%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='471.75')
          // Item
          li(data-name='jQuery Skill', data-percent='80%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='503.2')
          // Item
          li(data-name='Python Skill', data-percent='70%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='440.3')
          // Item
          li(data-name='Ruby (Ruby on Rails) Skill', data-percent='65%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='408.85')
          // Item
          li(data-name='Kotlin Skill', data-percent='65%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='408.85')
          // Item
          li(data-name='C# Skill', data-percent='40%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='251.6')
          // Item
          li(data-name='Swift Skill', data-percent='50%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='314.5')
          // Item
          li(data-name='Vagrant Skill', data-percent='80%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='503.2')
          // Item
          li(data-name='Linux Skill', data-percent='80%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='503.2')
          // Item
          li(data-name='MySQL Skill', data-percent='60%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='377.4')
          // Item
          li(data-name='AWS Skill', data-percent='65%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='408.85')
          // Item
          li(data-name='GCP Skill', data-percent='65%')
            svg(viewBox='-10 -10 220 220')
              g(fill='none', stroke-width='6', transform='translate(100,100)')
                path(d='M 0,-100 A 100,100 0 0,1 86.6,-50', stroke='url(#cl1)')
                path(d='M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke='url(#cl2)')
                path(d='M 86.6,50 A 100,100 0 0,1 0,100', stroke='url(#cl3)')
                path(d='M 0,100 A 100,100 0 0,1 -86.6,50', stroke='url(#cl4)')
                path(d='M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke='url(#cl5)')
                path(d='M -86.6,-50 A 100,100 0 0,1 0,-100', stroke='url(#cl6)')
            svg(viewBox='-10 -10 220 220')
              path(d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', stroke-dashoffset='408.85')
        // Defining Angle Gradient Colors
        svg(width='0', height='0')
          defs
            lineargradient#cl1(gradientUnits='objectBoundingBox', x1='0', y1='0', x2='1', y2='1')
              stop(stop-color='#618099')
              stop(offset='100%', stop-color='#8e6677')
            lineargradient#cl2(gradientUnits='objectBoundingBox', x1='0', y1='0', x2='0', y2='1')
              stop(stop-color='#8e6677')
              stop(offset='100%', stop-color='#9b5e67')
            lineargradient#cl3(gradientUnits='objectBoundingBox', x1='1', y1='0', x2='0', y2='1')
              stop(stop-color='#9b5e67')
              stop(offset='100%', stop-color='#9c787a')
            lineargradient#cl4(gradientUnits='objectBoundingBox', x1='1', y1='1', x2='0', y2='0')
              stop(stop-color='#9c787a')
              stop(offset='100%', stop-color='#817a94')
            lineargradient#cl5(gradientUnits='objectBoundingBox', x1='0', y1='1', x2='0', y2='0')
              stop(stop-color='#817a94')
              stop(offset='100%', stop-color='#498a98')
            lineargradient#cl6(gradientUnits='objectBoundingBox', x1='0', y1='1', x2='1', y2='0')
              stop(stop-color='#498a98')
              stop(offset='100%', stop-color='#618099')
</template>

<script>
export default {
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>

 <style lang="scss" scoped>
 a {
   display: block;
   padding: 20px 15px;
   text-align: center;
   font-weight: bold;
   text-decoration: none;
   color: #fff;
 }

 a:hover {
   color: #999999;
 }

 ul {
   height: auto;
 }

  .page_title {
      display: block;
      font: 10.5em 'Montserrat',sans-serif;
      width: 100vw;
      height: 200px;
      margin: 0 auto;
      background-color: #333;
    }

  .text-copy {
      fill: none;
      stroke: white;
      stroke-dasharray: 6% 29%;
      stroke-width: 5px;
      stroke-dashoffset: 0%;
      animation: stroke-offset 5.5s infinite linear;
  }

  .text-copy:nth-child(1){
      stroke: #3399FF;
      animation-delay: -1;
  }

  .text-copy:nth-child(2){
      stroke: #000099;
      animation-delay: -2s;
  }

  .text-copy:nth-child(3){
      stroke: #000000;
      animation-delay: -3s;
  }

  .text-copy:nth-child(4){
      stroke: #00FF7F;
      animation-delay: -4s;
  }

  .text-copy:nth-child(5){
      stroke: #3CB371;
      animation-delay: -5s;
  }

  @keyframes stroke-offset{
      100% {stroke-dashoffset: -35%;}
  }

  .section {
      padding: 48px 24px;
      display: block
  }

  .container {
      display: flex;
      justify-content: center;
  }

  .columns {
      display: flex;
  }

  .cal {
    display: flex;
    justify-content: center;
  }

  #pro_image {
      margin: auto;
      padding: 12px;
      flex: none;
      display: flex;
      justify-content: center;
  }
  .pro_img {
      width: 300px;
      height: 300px;
  }

  .column {
      width: 668px;
      display: block;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
      padding: 12px;
  }
  .pro_myname {
      line-height: 1;
      padding: 6.4px 0;
      font-family: '源ノ角ゴシック', 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 2.5rem;
      color: #3CB371;
      display: flex;
      justify-content: center;
  }

  .github {
      height: 32px;
      width: 32px;
      box-sizing: content-box;
  }

  .twitter {
      height: 32px;
      width: 32px;
      box-sizing: content-box;
  }

  .qiita {
      height: 32px;
      width: 32px;
      box-sizing: content-box;
  }

  .hatena {
      height: 32px;
      width: 32px;
      box-sizing: content-box;
  }

  .cal {
    padding-top: 40px;
  }

  .link_img {
      height: 32px;
      margin-bottom: 24px;
      padding-bottom: 20px;
      margin: auto;
      display: flex;
      justify-content: center;
  }

  .profile {
    margin-bottom: 2px;
  }
  dt {
    width: 80px;
    float: left;
    clear: left;
  }
  dd {
    margin-left: 80px;
  }

  .skils {
      padding-top: 24px;
  }

  .skil_title{
      text-align: center;
      margin-bottom: 24px;
      font-size: 2rem;
  }

  .skil_parent {
    position: relative;
    height: 200px;
    width: 100%;
  }

  .skil_child {
    width: 150px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    font-size: 3rem;
  }

@import url(https://fonts.googleapis.com/css?family=Lato:100,400);
@keyframes load{0%{stroke-dashoffset:0}}
.progress {
    position: relative;
    display: inline-block;
    padding: 0;
    padding-bottom: 16px;
    text-align: center;
    border-radius: 0;
    &>li {
        display: inline-block;
        position: relative;
        text-align: center;
        color: #93A2AC;
        font-family: Lato;
        font-weight:100;
        margin: 2rem;
        &:before {
            content: attr(data-name);
            position: absolute;
            width: 100%;
            bottom: -2rem;
            font-weight:400;
            font-family: sans-serif;
        }
        &:after {
            content: attr(data-percent);
            position: absolute;
            width: 100%;
            top: 3.7rem;
            left: 0;
            font-size: 2rem;
            text-align: center;
            font-family: sans-serif;
        }
    }
    svg {
        width: 10rem;
        height: 10rem;
        &:nth-child(2) {
            position: absolute;
            left: 0;
            top: 0;
            transform: rotate(-90deg);
        }
        &:nth-child(2) path {
            fill: none;
            stroke-width: 25;
            stroke-dasharray: 629;
            stroke: #222;
            opacity:.9;
            animation: load 10s;
        }
    }
}
 </style>
