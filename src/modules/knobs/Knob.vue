<template>
  <Component
    :is="_knobTag"
    class="button"
    :class="[_knobSize, _knobStyle]"
    >
    <slot name="icon-on-left" />
    {{text}}
    <slot name="icon-on-right" />
  </Component>
</template>
<script>
import { KNOB_TAGS, KNOB_CLASSES } from './../../components/Constants.js'


export default {
  name: 'Knob',
  props: {
    text: {
      type: String,
      default: () => ''
    },
    knobtag: {
      type: String,
      default: () => ''
    },
    knobstyle: {
      type: String,
      default: () => ''
    },
    knobsize: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    _knobTag: function() {
      let knobTag = ''
      if (this.knobtag === KNOB_TAGS.TEXT) {
        knobTag = KNOB_TAGS.TEXT
      } else {
        knobTag = KNOB_TAGS.BUTTON
      }
      return knobTag
    },
    _knobStyle: function() {
      let knobStyle= ''
      if (this.knobstyle === KNOB_CLASSES.BANNER.TINY.POSITIVE) {
        knobStyle = KNOB_CLASSES.BANNER.TINY.POSITIVE
      } else if (this.knobstyle === KNOB_CLASSES.BANNER.TINY.NEGATIVE) {
        knobStyle = KNOB_CLASSES.BANNER.TINY.NEGATIVE
      } else {
        knobStyle = KNOB_CLASSES.BANNER.TINY.NEUTRAL
      }
      return knobStyle
    },
    _knobSize: function() {
      let knobSize = ''
      if (this.knobsize === KNOB_CLASSES.BANNER.TINY.CLASS) {
        knobSize = KNOB_CLASSES.BANNER.TINY.CLASS
      }
      return knobSize
    }
  }
}
</script>
<style lang="sass" scoped>
.button
  cursor: pointer
  &-banner
    display: inline-block
    text-transform: uppercase
    letter-spacing: .4em
    &--neutral
      background-color: transparent
      &:hover
        opacity: .7
    &--positive
      background-color: $button-color-positive
      color: white
      &:hover
        opacity: .7
    &--negative
      background-color: $button-color-negative
      color: white
      &:hover
        opacity: .7
    &--tiny
      padding: 3px 10px
      border-radius: $button-tiny-borderRadius

</style>