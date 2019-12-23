<template>
 <div class="articleWrapper">
  <container-row>
    <grid
      :xs = defaultXS
      :sm = defaultSM
      :md = defaultMD
      :lg = defaultLG
    >
      <helper-grid-shadow />
      <article-head
        :article-title='articleTitle'
        :article-subtitle='articleSubtitle'
        :article-author='articleAuthor'
      ></article-head>

      <article-body
        :articleCards='articleCards'
      ></article-body>
    </grid>
  </container-row>
 </div>
</template>

<script>
import ContainerRow from './../components/ContainerRow.vue'
import Grid from './../components/Grid.vue'
import ArticleHead from './article-head.vue'
import ArticleBody from './article-body.vue'
import HelperGridShadow from './../modules/helpers/GridShadow.vue'

export default {
  name: 'ArticleWrapper',
  components: {
    ContainerRow,
    Grid,
    ArticleHead,
    ArticleBody,
    HelperGridShadow
  },
  props: {
    articleTitle: {
      type: String,
      default: () => ''
    },
    articleSubtitle: {
      type: String,
      default: () => ''
    },
    articleAuthor: {
      type: String,
      default: () => ''
    },
    articleCards: {
      type: Array
    }
  },
  data: function () {
    return {
      defaultXS: 12,
      defaultSM: 12,
      defaultMD: 12,
      defaultLG: 12
    }
  }
}
</script>

<style lang="sass" scoped>
.articleWrapper
  position: relative
  height: 100%
  @include break-point($bp-xs)
    margin-left: 18px
    margin-right: 18px
  @include break-point($bp-sm)
    margin-left: 24px
    margin-right: 24px
  @include break-point($bp-md)
    max-width: 725px
    margin-left: auto
    margin-right: auto
  @include break-point($bp-lg)
    max-width: 1300px
    margin-left: auto
    margin-right: auto
</style>
