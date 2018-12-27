<template>
  <div id="app">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>
          {{A.message}}
        </p>
      </div>
    </speech-box>

    <speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="sanders-content">
          {{B.message}}
        </p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from './components/SpeechBox.vue'

export default {
  name: 'app',
  components : {SpeechBox},
  data : function(){
    return {
      A : {
        header : "오바마 대통령 고별 연설문",
        footer : "2017.01.10 - 시카고",
        message : "안녕하세요 저는 오바마가 아닌 사실 에바마입니다. 개발자의 길은 넘나 험난하군요 공부할것이 너무나도 많아요"
      },
      B : {
        header : "버니 샌더스 경선 패배 연설문",
        footer : "2016.07.25 - 필라델피아 웰스파고",
        message : "감사합니다. 여러분 정말 감사합니다. 내년에도 잘 부탁드립니다."
      }
    }
  }
}
</script>

<style scoped>
.sanders{
  background-color: antiquewhite;
}
.sanders-content{
  font-family: 굴림;
  text-decoration: underline;
}
</style>
