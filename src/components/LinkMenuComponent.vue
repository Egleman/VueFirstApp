<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: ["classItem", "link", "text"],
};
</script>


