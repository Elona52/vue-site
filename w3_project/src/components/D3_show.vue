<template>
    <!-- 요소존재, 보이고 감춤 -->
    <div v-show="showDiv">이 엘리멘트는 감출 수 있어요
    </div>
    <hr>
    
    <p>
        Set the 'showDiv' data property to 'false', and run the code again. Right click this green p element, 
        choose 'Inspect' or 'Inspect element' and you can see that the div element with v-show still exist, 
        it is only the CSS display property that is set to 'none', and the div with v-if is destroyed.
    </p>

    <div v-show="showDiv">div 태그를 보이게/감추게 하다</div>
    <div v-if="showDiv">div 태그를 생성/제거하다</div>
</template>

<script setup>
import {ref} from 'vue';

const showDiv = ref(true)
</script>

<style scoped>
div{
   padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: solid black 1px;
}
</style>