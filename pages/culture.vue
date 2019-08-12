<template lang="pug">
div
  section
    svg.page_title(viewBox='0 0 990 700')
      symbol#s-text
        text(text-anchor='middle', x='50%', y='70%') Culture
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
  section.section
    .movie
      .portfolio_inner
        iframe(width='560', height='315', src='https://www.youtube.com/embed/3AjX6dkMWyE', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
      .portfolio_explain
        a.title(href='https://www.elephantkashimashi.com/') エレファントカシマシ
    .movie
      .portfolio_inner
        iframe(width='560', height='315', src='https://www.youtube.com/embed/5WDVtyb3YLg', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
      .portfolio_explain
        a.title(href='https://www.04limitedsazabys.com/') 04 Limited Sazabys
    .movie
      .portfolio_inner
        iframe(width='560', height='315', src='https://www.youtube.com/embed/6T7F_d53elA', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
      .portfolio_explain
        a.title(href='https://www.howlbequiet.com/') HOWL BE QUIET
    .movie
      .portfolio_inner
        iframe(width='560', height='315', src='https://www.youtube.com/embed/9p3Q0IKFt4I', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
      .portfolio_explain
        a.title(href='https://www.ryokushaka.com/') 緑黄色社会
    .movie
      .portfolio_inner
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UztdGQ5MSpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="")
      .portfolio_explain
        a.title(href='http://finlands.pepper.jp') FINLANDS
    .movie
      .portfolio_inner
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0fTxmlSYIrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="")
      .portfolio_explain
        a.title(href='http://unison-s-g.com') UNISON SQUARE GARDEN
    .movie
      .portfolio_inner
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2rLnU4gGZIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="")
      .portfolio_explain
        a.title(href='http://gundam40th.net') 機動戦士ガンダム
    .movie
      .portfolio_inner
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U4-klNK2gCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="")
      .portfolio_explain
        a.title(href='http://www.geass.jp') コードギアス反逆のルルーシュ
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

iframe {
  height: 315px;
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

.title {
  padding-bottom: 50px;
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

.portfolio_explain {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  font-size: 25px;
  margin-bottom: 0;
}
</style>
