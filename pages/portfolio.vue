<template lang="pug">
div
  section
    svg.page_title(viewBox='0 0 990 700')
      symbol#s-text
        text(text-anchor='middle', x='50%', y='70%') Portfolio
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
  section.section
    .portfolio
      .portfolio_inner
        img(src='~/assets/img/schoop.png', alt=schoop)
      .portfolio_explain
        .portfolio_title
          a.title Schoop!
        .portfolio_dev.info
          p.dev 共同開発
        .portfolio_ex.info
          p お互いを評価し合う中高生向けSNSアプリ
        .portfolio_skil.info
          p HTML5 / CSS3 / JavaScript / jQuery / PhoneGap / Serverless / mBaaS / NCMB
    .portfolio
      .portfolio_inner
        img(src='~/assets/img/shinnopo_chronicle.png', alt=schoop)
      .portfolio_explain
        .portfolio_title
          a.title(href='https://shinnopo.me/') shinnopo chronicle
        .portfolio_dev.info
          p.dev ソロプロジェクト
        .portfolio_ex.info
          p イケイケな僕のポートフォリオサイト
        .portfolio_skil.info
          p Pug / Sass / JavaScript / Vue.js / Nuxt.js / PWA / Serverless / GCP / GAE/SE
    .portfolio
      .portfolio_inner
        img(src='~/assets/img/daps.gif', alt=schoop)
      .portfolio_explain
        .portfolio_title
          a.title(href='https://daps.club/') Daps
        .portfolio_dev.info
          p.dev インターンシップ
        .portfolio_ex.info
          p あらゆる人間を証券化するマーケットプレイス
        .portfolio_skil.info
          p HTML5 / CSS3 / JavaScript / jQuery / Ruby / Ruby on Rails / MySQL / AWS
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

img {
  max-width: 100%;
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

.portfolio {
  margin-bottom: 80px;
}

.section {
    padding: 48px 24px;
    display: block;
}

.portfolio_inner {
  display: flex;
  justify-content: center;
}

.portfolio_title {
  display: flex;
  justify-content: center;
}

.portfolio_dev {
  display: flex;
  justify-content: center;
}

.portfolio_ex {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

.portfolio_skil {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  font-size: 25px;
  margin-bottom: 0;
  padding-bottom: 0;
}

.dev {
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 5px;
}
</style>
