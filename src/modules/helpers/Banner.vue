<template>
  <div class="bannerEditMe" :class="checkStuff">
    <typography
      :text='bannerText'
      :typotag="bannerTag"
      :typoclass="typoclass"
    />
    <div class="bannerEditMe-buttons">
      <knob
        text="uh-uh"
        :knobtag="knobTag"
        :knobsize="knobSize"
        :knobstyle="knobNegative"
        @click.native="_closeBanner"
        :isBannerOpen='isBannerOpen'
      />
      <knob
        text="uh-huh"
        :knobtag="knobTag"
        :knobsize="knobSize"
        :knobstyle="knobPositive"
        @click.native="_setPopup"
        isPopupOpen="isPopupOpen"
      />
    <popup
      v-if="isPopupOpen === true"
      :isPopupOpen="_firePopup"
    />
    </div>

  </div>
</template>
<script>
import { TYPO_TAGS_CLASSES, KNOB_TAGS, KNOB_CLASSES } from './../../components/Constants.js'
import Typography from './../../components/Typography.vue'
import Knob from './../knobs/Knob.vue'
import Popup from './../popups/popup.vue'



export default {
  name: 'Helper-Banner',
  components: {
    Typography,
    Knob,
    Popup
  },
  data () {
    return {
      helpergrids: 12,
      isPopupOpen: false,
      isBannerOpen: true
    }
  },
  props: {
    bannerTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.MINOR.TAG
    },
    typoclass: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.TITLE.CLASS
    },
    bannerText: {
      type: String,
      default: 'Yo, wanna do somethin\' cool?'
    },
    knobTag: {
      type: String,
      default: KNOB_TAGS.TEXT
    },
    knobSize: {
      type: String,
      default: KNOB_CLASSES.BANNER.TINY.CLASS
    },
    knobPositive: {
      type: String,
      default: KNOB_CLASSES.BANNER.TINY.POSITIVE
    },
    knobNegative: {
      type: String,
      default: KNOB_CLASSES.BANNER.TINY.NEGATIVE
    }
  },
  methods: {
    _setPopup: function() {
      this.isPopupOpen = !this.isPopupOpen
    },
    _firePopup: function() {
      this.isPopupOpen = true
    },
    _closeBanner: function() {
      this.isBannerOpen = false
    }
  },
  computed: {
    checkStuff() {
      let bannerClass = ''
      if (this.isBannerOpen === false) {
        bannerClass = 'bannerEditMe--hidden'
      }
      return bannerClass
    }
  }
}
</script>

<style lang="sass" scoped>
.bannerEditMe
  display: flex
  flex-wrap: wrap
  flex-direction: column
  background: rgba(pink,.8)
  padding: 20px
  margin-bottom: 20px
  text-align: center
  &-buttons
    display: flex
    justify-content: center
    align-items: center
    .button
      margin-right: 10px

  &--hidden
    display: none
</style>