<template>
  <h1 class="title-big">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>
