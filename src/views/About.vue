<template>
  <div class="about">
    <Header />
    <div class="about-area">
      <v-row justify="center">
        <v-col lg="6" md="6" sm="12" xs="12" align="center" class="kao-img">
          <v-row justify="center">            
            <v-col lg="6" md="6" sm="12" xs="12" align="center" class="kao-img">
            <v-img max-width="400px" v-bind:src="kaoImg" />
            </v-col>
            <v-col lg="6" md="6" sm="12" xs="12" align="center" class="kao-img">
            <v-img max-width="300px" v-bind:src="kaoImg" />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="6" md="6" sm="12" xs="12" align="center" class="kao-img">
            <v-img max-width="300px" v-bind:src="kaoImg" />
            </v-col>
            <v-col lg="6" md="6" sm="12" xs="12" align="center" class="kao-img">
            <v-img max-width="400px" v-bind:src="kaoImg" />
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="6" md="6" sm="12" xs="12" align="center" class="about-value">
          <v-row justify="center">
            <v-img max-width="600px" v-bind:src="aisatuImg" />
          </v-row>
          <v-row justify="center">
            <p class="b-title">ABOUT ME</p>
          </v-row>
          <v-row justify="center">
            <p class="imp">うえはら</p>
          </v-row>
          <v-row justify="center">
            <p>2002年11月生まれ &nbsp; 沖縄出身</p>
          </v-row>
          <v-row justify="center">
            <p>ゆるくたのしく生きることを目標にしてる <br>
              どこにでもいる普通の女の子です</p>
          </v-row>
          <v-row justify="center">
          <p class="s-title">所属</p>
          </v-row>
          <v-row justify="center">
            <p>
              沖縄工業高等専門学校 メディア情報工学科<br>
              ICT委員会              
            </p>
          </v-row>
          <v-row justify="center">
            <p class="s-title">趣味</p>
          </v-row>
          <v-row justify="center">
            <p>オタク活動</p>
          </v-row>
          <v-row justify="center">
            <p class="s-title">すき</p>
          </v-row>
          <v-row justify="center">
            <p>
              アニメ・漫画・ゲーム・音楽<br>
              寝ること・本を読むこと
            </p>
          </v-row>
          <v-row justify="center">
            <p class="s-title">にがて</p>
          </v-row>
          <v-row justify="center">
            <p>
              運動(できない)<br>
              にがいもの(薬とかゴーヤーとか)
            </p>
          </v-row>
          <v-row justify="center">
            <p class="s-title">今までやってきたこと</p>
          </v-row>
          <v-row justify="center">
            <p>
              ICT委員会の委員長：1年後期～現在<br>
              大会出場：たくさん(Productに実績と成果物を記載中)
            </p>
          </v-row>
          <v-row justify="center">
            <p class="s-title">これからやってみたいこと</p>
          </v-row>
          <v-row justify="center">
            <p>
              おもしろいモノを創りたい<br>
              起業してみたい
            </p>
          </v-row>
        </v-col>          
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  data(){
    return{
      kaoImg: require('@/assets/me.png'),
      aisatuImg: require('@/assets/aisatu.png')
    }
  }

}
</script>

<style>
.about-area{
  margin-top: 100px;
  margin-bottom: 150px;
}
.b-title{
  font-size: 20pt;
}
.s-title{
  font-size: 15pt;
}
.kao-img{
  margin-top: 60px;
}
.about-value{
  font-size: 15pt;
}
</style>
