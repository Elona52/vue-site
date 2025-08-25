<template>
    <img v-bind:src="img_beach" alt="img_beach.jpg">
    <hr>
    <div 
    v-bind:style="{ fontSize: size }">v-bind:글자크기 속성
    </div>
    <div
    v-bind:style="{fontSize: size2 + 'px'}">글자값
    </div>

    <div 
    v-bind:style="{fontSize: size3 + 'px'}">v-bind:css 글자크기 속성
    </div>
    <div 
    v-bind:style="{ backgroundColor:`rgb(${bgVal}, 100, 100)`}">백그라운드 색상값 변수로 적용
    </div>
    <div 
    v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgrey' }">백그라운드 색상값을 조건에 따라 다르게 설정
    </div>
    <div v-bind:style="className">클래스 바인드</div>
    <div v-bind:class="{myClass:true}">클래스 ture false 바인드</div>
    <div :class="{myClass:isImportant}">클래스 important 속성 여부</div>
</template>

<script setup>
import {ref} from "vue";
import img_beach from "../assets/img_beach.jpg"

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(100)
const isImportant =ref(false)
const className = ref("impClass")
</script>

<style scoped>
.myClass{
    background-color: yellow;
}
.impClass{
    background-color: aqua;
    border:3px dashed black;
}
</style>