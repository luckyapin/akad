<template>
  <div class="right__menu">
    <input type="text" placeholder="Search..." class="search" />
    <div class="loupe">
      <ion-icon name="search-outline"></ion-icon>
    </div>
    <div class="posts wow animate__fadeInUpSmall">
      <div class="title">Posts</div>
      <ul class="category">
        <li class="active">POPULAR</li>
        <li class="">LATEST</li>
      </ul>

      <ul class="post-1">
        <li v-for="item in posts" :key="item.title">
          <div class="image">
            <img v-bind:src="item.image" alt="" />
          </div>
          <a href="">
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="date">{{ item.date }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="categories wow animate__fadeInUpSmall">
      <div class="title">CATEGORIES</div>
      <ul>
        <li v-for="item in categories" :key="item.title">
          <a href=""
            >{{ item.title }}<span>{{ item.count }}</span></a
          >
        </li>
      </ul>
    </div>
    <div class="tags wow animate__fadeInUpSmall">
      <div class="title">TAGS CLOUD</div>
      <ul class="blocks">
        <li v-for="item in tags" :key="item.title">
          <a href="">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="instagram wow animate__fadeInUpSmall">
      <div class="title">instagram</div>
      <ul class="blocks">
        <li v-for="item in instagram" :key="item.src">
          <a href=""><img :src="item.src" alt="" /></a>
        </li>
      </ul>
    </div>
    <div class="categories wow animate__fadeInUpSmall">
      <div class="title">ARCHIVES</div>
      <ul>
        <li v-for="item in archives" :key="item.title">
          <a href=""
            >{{ item.title }}<span>{{ item.count }}</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/js/post.js";
export default {
  data() {
    return {
      posts: [
        {
          title: "MAGNA MOLLIS ULTRICIES 1",
          date: "3th october 2015",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "MAGNA MOLLIS ULTRICIES 2",
          date: "3th october 2015",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
        {
          title: "MAGNA MOLLIS ULTRICIES 3",
          date: "3th october 2015",
          image: "https://picsum.photos/800/500?random=" + Math.random(),
        },
      ],
      categories: [
        {
          title: "Business",
          count: "15",
        },
        {
          title: "Photography",
          count: "22",
        },
        {
          title: "Journal",
          count: "27",
        },
        {
          title: "Web development",
          count: "30",
        },
      ],
      tags: [
        { title: "css" },
        { title: "html" },
        { title: "javascript" },
        { title: "jquery" },
        { title: "bootstrap" },
        { title: "web development" },
        { title: "ui & ux" },
      ],
      instagram: [
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
        { src: "https://picsum.photos/800/500?random=" + Math.random() },
      ],
      archives: [
        {
          title: "jan-feb 2015",
          count: "15",
        },
        {
          title: "feb-mar 2015",
          count: "22",
        },
        {
          title: "mar-apr 2015",
          count: "27",
        },
        {
          title: "apr-may 2015",
          count: "30",
        },
      ],
    };
  },
};
</script>