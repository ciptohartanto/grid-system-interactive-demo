<template>
  <Component
    :is="_tag"
    :class="_typoClass"
  >{{text}}</Component>
</template>

<script>
import { TYPO_TAGS_CLASSES } from './Constants.js'
export default {
  name: 'typography',
  props: {
    text: {
      type: String,
      default: ''
    },
    typotag: {
      type: String,
      default: ''
    },
    typoclass: {
      type: String,
      default: ''
    }
  },
  computed: {
    _tag: function () {
      let typo_tag = ''
      if (this.typotag === TYPO_TAGS_CLASSES.HEADLINE.TITLE.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.HEADLINE.TITLE.TAG
      } else if (this.typotag === TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.TAG
      } else if (this.typotag === TYPO_TAGS_CLASSES.HEADLINE.MINOR.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.HEADLINE.MINOR.TAG
      } else if (this.typotag === TYPO_TAGS_CLASSES.SECONDARY.TITLE.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.SECONDARY.TITLE.TAG
      } else if (this.typotag === TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.TAG
      } else if (this.typotag === TYPO_TAGS_CLASSES.SECONDARY.MINOR.TAG) {
        typo_tag = TYPO_TAGS_CLASSES.SECONDARY.MINOR.TAG
      }
      return typo_tag
    },
    _typoClass: function () {
      let typo_class = ''
      if (this.typoclass === TYPO_TAGS_CLASSES.HEADLINE.TITLE.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.HEADLINE.TITLE.CLASS
      } else if (this.typoclass === TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.CLASS
      } else if (this.typoclass === TYPO_TAGS_CLASSES.HEADLINE.MINOR.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.HEADLINE.MINOR.CLASS
      } else if (this.typoclass === TYPO_TAGS_CLASSES.SECONDARY.TITLE.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.SECONDARY.TITLE.CLASS
      } else if (this.typoclass === TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.CLASS
      } else if (this.typoclass === TYPO_TAGS_CLASSES.SECONDARY.MINOR.CLASS) {
        typo_class = TYPO_TAGS_CLASSES.SECONDARY.MINOR.CLASS
      }
      return typo_class
    }
  }
}
</script>


<style lang="sass" scoped>
.typo
  // headline
  &-headline
    //-- variations
    &--mega
      font-size: px2rem(48px)
      font-weight: 600
      margin-bottom: px2rem(30px)
    &--medium
      font-size: px2rem(36px)
      font-weight: 400
      margin-bottom: px2rem(20px)
    &--small
      font-size: px2rem(28px)
      font-weight: 400
      margin-bottom: px2rem(20px)

  // title
  &-secondary
    //-- variations
    &--big
      font-size: px2rem(18px)
      font-weight: 600
      margin-bottom: px2rem(10px)
    &--medium
      font-size: px2rem(16px)
      font-weight: 400
      margin-bottom: px2rem(10px)
    &--small
      font-size: px2rem(12px)
      font-weight: 400

  // button
  &-button
    //-- variations
    &--small
      font-size: px2rem(16px)
      font-weight: 600
</style>
