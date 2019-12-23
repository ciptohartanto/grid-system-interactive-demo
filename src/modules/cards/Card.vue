<template>
  <div class="card">
  <container-row>
    <grid
      :xs = 6
      :sm = 6
      :md = 6
      :lg = 12
       >
      <div class="card-thumbnail">
        <thumbnail :ratio="imageRatio" :imageURL='imageURL'></thumbnail>
      </div>
    </grid>
    <grid
      :xs = 6
      :sm = 6
      :md = 6
      :lg = 12
      >
      <div class="card-text">
        <typography
          data-cardtitle
          class = "card-title"
          :typotag = 'titleTag'
          :typoclass = 'titleClass'
          :text = 'cardTitle'
          ></typography>

        <typography
          data-cardsubtitle
          class = "card-subtitle"
          :typotag = 'subtitleTag'
          :typoclass = 'subtitleClass'
          :text = 'cardSubtitle'
          ></typography>
      </div>
    </grid>
  </container-row>
  </div>
</template>
<script>
import ContainerRow from './../../components/ContainerRow.vue'
import Grid from './../../components/Grid.vue'
import Typography from './../../components/Typography.vue'
import Thumbnail from './../thumbnails/Thumbnail.vue'
import {TYPO_TAGS_CLASSES} from './../../components/Constants.js'
export default {
  name: 'Card',
  components: {
    ContainerRow,
    Grid,
    Typography,
    Thumbnail
  },
  props: {
    titleTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.TITLE.TAG
    },
    subtitleTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.TAG
    },
    titleClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.TITLE.CLASS
    },
    subtitleClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.SUBTITLE.CLASS
    },
    imageRatio: {
      type: String,
      default: 'square'
    },
    imageURL: {
      type: String,
      default: ''
    },
    cardTitle: {
      type: String,
      default: ''
    },
    cardSubtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="sass" scoped>
.card
  display: flex
  border-radius: 14px
  border: 1px solid rgba(purple,.8)
  padding: 5px
  margin-top: 10px
  margin-bottom: 10px

  &-thumbnail
    @include break-point($bp-xs)
      border-radius: 14px 0 0 14px
      overflow: hidden
    @include break-point($bp-sm)
      border-radius: 14px 0 0 14px
      overflow: hidden
    @include break-point($bp-md)
      border-radius: 14px 0 0 14px
      overflow: hidden
    @include break-point($bp-lg)
      border-radius: 14px 14px 0 0
      overflow: hidden

  &-title
    @include ellipsis-multiline(2)
    @include break-point($bp-sm)
      @include ellipsis-multiline(1)

  &-subtitle
    @include break-point($bp-xs)
      @include ellipsis-multiline(1)
      margin-bottom: -10px
    @include break-point($bp-sm)
      @include ellipsis-multiline(1)
      margin-bottom: -10px


  // variations
  &--cool
    display: flex
    flex-wrap: wrap
    border-color: red
    .card-thumbnail
      @include break-point($bp-xs)
        width: 47%
      @include break-point($bp-sm)
        width: 35%
      @include break-point($bp-md)
        width: 42%
      @include break-point($bp-lg)
        width: 100%
    .card-text
      @include break-point($bp-xs)
        margin-left: 10px
        width: calc(100% - 47% - 10px)
      @include break-point($bp-sm)
        margin-left: 10px
        width: calc(100% - 35% - 10px)
      @include break-point($bp-md)
        margin-left: 15px
        width: calc(100% - 42% - 15px)
      @include break-point($bp-lg)
        width: 90%

</style>
