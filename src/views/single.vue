<template>
  <div class="single">
    <div class="site-header wow animate__fadeInUpSmall">
      <div class="site-hero">
        <div class="title">PROJECT TITLE</div>
        <div class="subtitle">HOME / PORTFOLIO / SINGLE_PROJECT</div>
      </div>
    </div>
    <div class="container wow animate__fadeInUpSmall">
      <div class="main-img">
        <img src="https://picsum.photos/800/500?random=" alt="" />
      </div>
      <div class="text wow animate__fadeInUpSmall">
        <div class="title">PROJECT TITLE</div>
        <div class="subtitle">
          Latest project we have made. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </div>
      <div class="content wow animate__fadeInUpSmall">
        <div class="left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="right">
          <ul class="list">
            <li>Web design</li>
            <li>Front end development</li>
            <li>Back end development</li>
            <li>SEO</li>
          </ul>
          <div class="share">
            <div class="title">SHARE</div>
            <socials></socials>
          </div>
        </div>
      </div>
      <bottomNav class="wow animate__fadeInUpSmall"></bottomNav>
      <div class="related wow animate__fadeInUpSmall">
        <ul class="blocks wow animate__fadeIn">
          <li :class="item.class" v-for="item in all" :key="item.title">
            <img :src="item.image" alt="" />
            <span class="title">{{ item.title }}</span>
            <span class="category">{{ item.category }}</span>
          </li>
        </ul>
      </div>
      <div class="read wow animate__fadeInUpSmall">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </p>
        <input type="button" value="read more" />
      </div>
    </div>
  </div>
</template>
<script>
import WOW from "wowjs";
import socials from "../components/socials";
import bottomNav from "@/components/bottomNav.vue";
export default {
  name: "post",
  data() {
    return {
      all: [
        {
          title: "Brave Man",
          category: "All",
          class: "block1 ",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block1 ",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "webdesign",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "logo",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
      ],
    };
  },
  mounted() {
    new WOW.WOW({
      live: true,
      boxClass: "wow",
      animateClass: "animate__animated",

      offset: 30,
      mobile: true,
    }).init();
  },
  components: { socials, bottomNav },
};
</script>