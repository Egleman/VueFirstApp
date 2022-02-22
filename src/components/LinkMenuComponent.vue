<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["classItem", "link", "text"],
};
</script>


