<template>
  <div class="post wow animate__fadeIn">
    <div class="site-header wow animate__fadeInUpSmall">
      <div class="site-hero">
        <div class="title">Post Title</div>
        <div class="subtitle">home / blog /post</div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="image">
          <img src="https://picsum.photos/800/500?random=" alt="" />
        </div>
        <div class="title">DUIS AUTE IRURE DOLOR IN REPREHENDERIT.</div>
        <div class="date">DATE : 2012-03-11</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>consectetur adipisicing</li>
          <li>Sit eum consequatur</li>
          <li>Deserunt quisquam aperiam</li>
          <li>dolorum maiores, cumque eligendi</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sint
          placeat praesentium dolorum minima, et laborum similique cupiditate
          minus nemo qui tempore corporis eum quisquam harum perferendis saepe
          tempora ipsum. Quia sint placeat praesentium dolorum minima, et
          laborum similique cupiditate minus nemo qui tempore corporis eum
          quisquam harum perferendis saepe tempora ipsum. Quia sint placeat
          praesentium dolorum minima, et laborum similique cupiditate minus nemo
          qui tempore corporis eum quisquam harum perferendis saepe tempora
          ipsum. Quia sint placeat praesentium dolorum minima, et laborum
          similique cupiditate minus nemo qui tempore corporis eum quisquam
          harum perferendis saepe tempora ipsum.
        </p>
        <div class="quote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sint
          placeat praesentium dolorum minima, et laborum similique cupiditate
          minus nemo qui tempore corporis eum quisquam harum perferendis saepe
          tempora ipsum.
        </div>
        <div class="block">
          <div class="image">
            <img src="https://picsum.photos/800/500?random=" alt="" />
          </div>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              sint placeat praesentium dolorum minima, et laborum similique
              cupiditate minus nemo qui tempore corporis eum quisquam harum
              perferendis saepe tempora ipsum. Quia sint placeat praesentium
              dolorum minima, et laborum similique cupiditate minus nemo qui
              tempore corporis eum quisquam harum perferendis saepe tempora
              ipsum.
            </p>
            <ul>
              <li>consectetur adipisicing</li>
              <li>Sit eum consequatur</li>
              <li>Deserunt quisquam aperiam</li>
              <li>dolorum maiores, cumque eligendi</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <bottomNav></bottomNav>
      </div>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import WOW from "wowjs";
import sidebar from "@/components/sidebar.vue";
import bottomNav from "@/components/bottomNav.vue";
export default {
  name: "post",

  mounted() {
    new WOW.WOW({
      live: true,
      boxClass: "wow",
      animateClass: "animate__animated",

      offset: 30,
      mobile: true,
    }).init();
  },
  components: { sidebar, bottomNav },
};
</script>