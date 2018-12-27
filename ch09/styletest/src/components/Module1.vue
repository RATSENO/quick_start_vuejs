<template>
    <div>
        <button :class="$style.hand">CSS Module을 적용한 버튼 </button>
        <button :class="[$style.hand, $style.border]">Hello world</button>
    </div>
</template>

<script>
/* 
    <style module></style>로 CSS 스타일을 모듈화했다.
    이 스타일은 Vue인스턴스 내에서 $style이라는 계산형 속성(Computed Property)을 통해서 이용할 수 있다.
 */
export default {
    created() {
        console.log(this.$style);
    }
}
</script>

<style module>
.hand{
    cursor: pointer;
    background-color: purple;
    color: yellow;
}
.border{
    border: solid 1px red;
}
</style>
