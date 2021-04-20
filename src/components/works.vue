<template>
  <div class="ourPortfolio">
    <div class="text wow animate__fadeInUpSmall">
      <div class="title">our portfolio</div>
      <div class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="content">
      <div class="categories wow animate__fadeInLeft">
        <div class="title">choose category</div>
        <div class="links">
          <input type="radio" id="All" value="All" v-model="picked" />
          <label for="All">All</label>
          <br />
          <input
            type="radio"
            id="Photography"
            value="Photography"
            v-model="picked"
          />
          <label for="Photography">Photography</label>
          <br />
          <input
            type="radio"
            id="webdesign"
            value="webdesign"
            v-model="picked"
          />
          <label for="webdesign">webdesign</label>
          <br />
          <input type="radio" id="logo" value="logo" v-model="picked" />
          <label for="logo">logo</label>
          <br />
          <input type="radio" id="graphics" value="graphics" v-model="picked" />
          <label for="graphics">graphics</label>
          <br />
          <input
            type="radio"
            id="advertising"
            value="advertising"
            v-model="picked"
          />
          <label for="advertising">advertising</label>
          <br />
          <input type="radio" id="fashion" value="fashion" v-model="picked" />
          <label for="fashion">fashion</label>
        </div>
      </div>
      <ul
        class="blocks"
        :style="
          'grid-template-rows: repeat(' +
          Math.ceil(pick.length / 3) +
          ', 150px) '
        "
      >
        <li
          :class="item.class"
          v-for="item in pick"
          :key="item.title"
          class="wow animate__fadeIn"
        >
          <img :src="item.image" alt="" />
          <span class="title">{{ item.title }}</span>
          <span class="category">{{ item.category }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import WOW from "wowjs";
export default {
  mounted() {
    new WOW.WOW({
      live: true,
      boxClass: "wow",
      animateClass: "animate__animated",

      offset: 30,
      mobile: true,
    }).init();
  },
  data() {
    return {
      all: [
        {
          title: "Brave Man",
          category: "All",
          class: "block2 ",
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
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "logo",
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "graphics",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "logo",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "graphics",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "advertising",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "Photography",
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "advertising",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "fashion",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "advertising",
          class: "block2",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "Brave Man",
          category: "fashion",
          class: "block1",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
      ],
      picked: "All",
    };
  },

  computed: {
    pick: function (picked) {
      var l = picked.picked;
      return this.all.filter(function (all) {
        return all.category == l || l == "All";
      });
    },
  },
};
</script>