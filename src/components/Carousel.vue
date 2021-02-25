<template>
  <!-- Carousel -->
  <div>
    <b-carousel
      id="carousel-1"
      class="mb-5 mt-5"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="750"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="image"
        v-for="(image, index) in images"
        :key="index"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null,
      images: [
        'https://area51gaming.com/media/steelseries-general-news_fDVGOCG.jpg',
        'https://matrixwarehouse.co.za/wp-content/uploads/2019/08/razer-PC-Gaming.jpg',
        'https://esncard.org/sites/default/files/erasmus_banner_1.png',
        'https://fulcrumvfx.com/wp-content/uploads/2019/06/xbox0.jpg'
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
</style>
