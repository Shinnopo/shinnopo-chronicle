<template lang="pug">
div
  section
    svg.page_title(viewBox='0 0 990 700')
      symbol#s-text
        text(text-anchor='middle', x='50%', y='70%') Certification
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
  section.section
    .portfolio
      .portfolio_inner
        h2.title 国家資格
        a.info(href='https://www3.jitec.ipa.go.jp/JitesCbt/index.html') ITパスポート試験
        a.info(href='https://www.jitec.ipa.go.jp/sg/index.html') 情報セキュリティマネジメント試験
        h2.title ベンダー資格
        p.info 頑張るぞい！
        h2.title その他資格
        a.info(href='http://www.jab-kentei.or.jp/kanji/index.html') 日本ビジネス技能検定協会　漢字能力検定試験2級
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

.page_title {
    display: block;
    font: 10.5em 'Montserrat';
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
    display: block;
}

.title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 0;
}

.info {
  text-align: center;
  margin-bottom: 10px;
  padding-top: 15px;
}

@media screen and (min-width:1300px){
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

  .page_title {
      display: block;
      font: 10.5em 'Montserrat', sans-serif;
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
      display: block;
  }

  .title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
  }

  .info {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
