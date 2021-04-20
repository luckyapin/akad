<template>
  <div class="blog">
    <div class="site-header wow animate__fadeInUpSmall">
      <div class="site-hero">
        <div class="title">BLOG POSTS</div>
        <div class="subtitle">home / blog</div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div>
          <ul class="wow animate__fadeInUpSmall">
            <li
              v-for="item in post"
              :key="item.preview"
              class="wow animate__fadeInUpSmall"
            >
              <div class="preview">
                <img :src="item.preview_img" v-if="item.preview_img" alt="" />
                <iframe
                  v-if="item.preview_vid"
                  width="100%"
                  height="500"
                  :src="item.preview_vid"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <iframe
                  v-if="item.preview_sound"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  :src="item.preview_sound"
                ></iframe>
              </div>
              <div class="date">{{ item.date }}</div>
              <div class="comments">
                <ion-icon name="chatbox-ellipses"></ion-icon>
                <span>{{ item.comments }}</span>
              </div>
              <div class="likes">
                <ion-icon name="heart"></ion-icon>
                <span>{{ item.likes }}</span>
              </div>
              <p>{{ item.text }}</p>
              <div class="continue">
                <a href="/blog/post">
                  CONTINUE READING<ion-icon name="arrow-forward"></ion-icon
                ></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="navigation">
          <a class="previous">
            <ion-icon name="caret-back-sharp"></ion-icon><span>previous</span>
          </a>
          <span> / </span>
          <a class="next">
            <span>next</span><ion-icon name="caret-forward-sharp"></ion-icon>
          </a>
        </div>
      </div>
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import WOW from 'wowjs'
import sidebar from '@/components/sidebar.vue'
export default {
  name: 'blog',

  mounted () {
    new WOW.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animate__animated',

      offset: 30,
      mobile: true
    }).init()
  },
  components: { sidebar },
  data () {
    return {
      post: [
        {
          preview_img: 'https://picsum.photos/800/500?random=' + Math.random(),
          date: 'JANUARY 13, 2016',
          comments: '8',
          likes: '15',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          preview_vid: 'https://www.youtube.com/embed/1mO_QMYV-QE',
          date: 'JANUARY 13, 2016',
          comments: '8',
          likes: '15',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          preview_sound:
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/51057943&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          date: 'JANUARY 13, 2016',
          comments: '8',
          likes: '15',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    }
  }
}
</script>
