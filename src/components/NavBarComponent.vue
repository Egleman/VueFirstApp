<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <link-menu-component :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </link-menu-component>
      <link-menu-component
        v-for="link in links.other"
        :key="link.id"
        classItem="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import LinkMenuComponent from "@/components/LinkMenuComponent.vue";
export default {
  components: {
    LinkMenuComponent,
  },
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/goods-page",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    };
  },
};
</script>
