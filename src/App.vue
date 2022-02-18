<template>
  <div class="wrapper">
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script>
import HeroView from "@/view/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeroView,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
div {
  span {
    color: green;
  }
}
</style>
