<template>
  <div class="contactUs">
    <div class="site-header wow animate__fadeInUpSmall">
      <div class="site-hero">
        <div class="title">Contact Us</div>
        <div class="subtitle">home / contact</div>
      </div>
    </div>
    <div class="container">
      <div class="contact">
        <div class="form">
          <div class="top">
            <div class="input-email">
              <input type="text" placeholder="" class="email" />
              <span class="email-text">Name</span>
            </div>
            <div class="input-email">
              <input type="text" placeholder="" class="email" />
              <span class="email-text">your email</span>
            </div>
          </div>
          <div class="input-email">
            <input type="text" placeholder="" class="email" />
            <span class="email-text">object</span>
          </div>
          <div class="input-email textarea">
            <textarea class="email"> </textarea>
            <span class="email-text">message</span>
          </div>

          <input type="button" value="SEND" class="send" />
        </div>
        <div class="info">
          <div class="title">CONTACT INFO</div>
          <div class="content">
            Lorem ipsum dolor sit amet, conse adipisicing elit. Libero incidunt
            quod ab mollitia quia dolorum conse.
          </div>
          <div class="address">
            13D, Functional apartment, Unique colony, <br />Agadir 86360<br />
            +212 124-566-780<br />
            +212 124-566-780<br /><b>email@website.com </b>
          </div>
          <Socials></Socials>
        </div>
      </div>
      <div class="map"><google-map /></div>
    </div>
  </div>
</template>

<script>
import "@/assets/js/contactUs.js";
import "@/assets/js/owl.js";
import Socials from "@/components/socials.vue";
import WOW from "wowjs";
import GoogleMap from "@/components/TravelMap.vue";
export default {
  name: "contact",
  components: {
    Socials,
    GoogleMap,
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
};
</script>