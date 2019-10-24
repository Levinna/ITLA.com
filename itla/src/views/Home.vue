<template>
  <div class="column">

    <div class="feedranking">
      <feed-ranking :propsdata="table_data"></feed-ranking>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '../components/HelloWorld'
import FeedRanking from '../components/FeedRanking';




export default {
  name: 'home',
    data(){
      return{
          table_data: [{
              date: '2019-10-15',
              title: 'AMD Ryzen 5 3500X 국내 출시 : 9400F를 저격하는 가성비',
              address: 'No. 189, Grove St, Los Angeles',
              url:"https://lwk24.tistory.com/618",
              rate:0,
          }, {
              date: '2019-10-16',
              title: '롤스스톤 공개된 카드들',
              address: 'No. 189, Grove St, Los Angeles',
              url:"http://www.inven.co.kr/board/lol/2778/66260",
              rate:0,
          }, {
              date: '2019-10-23',
              title: '삼성전자, 지문인식 오류 SW 패치 실시',
              address: 'No. 189, Grove St, Los Angeles',
              url:"https://biz.chosun.com/site/data/html_dir/2019/10/23/2019102301677.html",
              rate:0,
          }, {
              date: '2019-10-23',
              title: '인도 평정한 샤오미',
              address: 'No. 189, Grove St, Los Angeles',
              url:"http://www.bloter.net/archives/358513",
              rate:0,
          }],
      }
    },
  components: {
    UserMenu,
    FeedRanking
  }
}
</script>

<style scoped>

</style>