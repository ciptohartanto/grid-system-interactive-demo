<template>
  <div :style="`background-image: url('${imageURL}')`" class="thumbnail" :class="_computeThumbnailClass"></div>
</template>
<script>
export default {
  name: 'Thumbnail',
  props: {
    ratio: {
      type: String,
      default: () => ''
    },
    imageURL: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    _computeThumbnailClass: function () {
      let thumb_class = ''
      if (this.ratio === 'square') {
        thumb_class = 'thumbnail--square'
      }
      return thumb_class
    }
  }
}
</script>
<style lang="sass" scoped>
.thumbnail
  background-position: center
  background-repeat: no-repeat
  background-size: cover

  &--square
    padding-top: 100%
</style>
