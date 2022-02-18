<template>
  <div class="best__item">
    <img src="@/assets/img/coffee-1.jpg" alt="coffee" />
    <div class="best__item-title">{{ name }}</div>
    <div class="best__item-price">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "price"],
};
</script>