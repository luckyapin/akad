
<template>
  <div class="">
    <nav>
      <div class="header wow animate__fadeInUpSmall">
        <a href="" class="logo">AKAD.</a>
        <div class="menu">
          <div class="burger"><span></span></div>
          <div class="burger__menu">
            <ul class="menu__list">
              <li>
                <a href="/" class="menu__link">Home</a>
              </li>
              <li>
                <a href="/about" class="menu__link">about us</a>
              </li>
              <li>
                <a href="/services" class="menu__link">services</a>
              </li>
              <li class="portfolio">
                <a href="/portfolio" class="menu__link">portfolio</a>
                <div class="portfolio__menu">
                  <ul class="portfolio-menu">
                    <li>
                      <a href="/portfolio" class="menu__link">portfolio list</a>
                    </li>
                    <li>
                      <a href="/portfolio/single" class="menu__link"
                        >singe project 1</a
                      >
                    </li>
                    <li>
                      <a href="/portfolio/second" class="menu__link"
                        >singe project 2</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li class="blog">
                <a href="/blog" class="menu__link">blog</a>
                <div class="blog__menu">
                  <ul class="blog-menu">
                    <li><a href="/blog" class="menu__link">posts list</a></li>
                    <li>
                      <a href="/blog/post" class="menu__link">single post</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/contact" class="menu__link">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <router-view />

    <div class="newsletter wow animate__fadeInUpSmall">
      <div class="text">
        <div class="title">YOU THINK WE'RE COOL? LET'S WORK TOGETHER</div>
        <input type="button" value="get in touch" class="getIt" />
      </div>
      <div class="form">
        <div class="title">STAY INFORMED WITH OUR NEWSLETTER</div>
        <div class="sutitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="input-email">
          <input type="text" name="" id="" placeholder="" class="email" />
          <span class="email-text">your email</span>
        </div>
        <input type="button" value="send" class="send" />
      </div>
    </div>
    <footer class="wow animate__fadeInUpSmall">
      <ul class="links">
        <li class=""><a href="" class="link">home</a></li>
        <li class=""><a href="" class="link">about us </a></li>
        <li class=""><a href="" class="link">services</a></li>
        <li class=""><a href="" class="link">portfolio</a></li>
        <li class=""><a href="" class="link">blog</a></li>
        <li class=""><a href="" class="link">contact us</a></li>
      </ul>
      <div class="createBy">
        <div class="title">Created by akhouad 2016. All Rights Reserved</div>
        <Socials></Socials>
      </div>
    </footer>
  </div>
</template>
<script>
import Socials from '@/components/socials.vue'
import WOW from 'wowjs'
export default {
  name: 'main-layout',
  components: {
    Socials
  },
  mounted () {
    new WOW.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animate__animated',

      offset: 30,
      mobile: true
    }).init()
  }
}
</script>
