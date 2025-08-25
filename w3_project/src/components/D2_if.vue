<template>
    <hr>
<p v-if="typewritersInStock">재고 있음</p>
<p v-else>재고 없음</p>
<hr>
<p v-if="typewriterCount">재고 있음</p>
<p v-else>재고 없음</p>
<hr>
<p v-if="typewriterCount2 > 3">재고 있음</p>
<p v-else-if="typewriterCount2 > 0">재고 조금 남음</p>
<p v-else-if="typewriterCount2 == 0">재고 없음</p>
<p v-else>선불(예약) 있음 -> ({{ typewriterCount2 }})</p>
<hr>
<p v-if="text.includes('pizza')">"pizza"글자가 포함되어 있는가?</p>
<p v-else>없음</p>
<hr>
<div v-if="text2.includes('피자')">
    <p>피자</p>
    <img src="../assets/img_pizza.svg" alt="pizza">
</div>
<p v-else>피자 없음</p>

</template>

<script setup>
import {ref} from 'vue';

const typewritersInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)

const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine")
const text2 = ref("I like taco, pizza, Thai beef salad, pho soup and tagine, 피자")
</script>


<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>