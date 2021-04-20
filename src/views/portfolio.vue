<template>
  <div class="portfolio">
    <div class="site-header wow animate__fadeInUpSmall">
      <div class="site-hero">
        <div class="title">Post Title</div>
        <div class="subtitle">home / blog /post</div>
      </div>
    </div>
    <div class="container">
      <works></works>
    </div>
  </div>
</template>
<script>
import works from '@/components/works.vue'
export default {
  components: {
    works
  }
}
</script>
