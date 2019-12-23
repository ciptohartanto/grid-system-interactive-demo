<template>
  <div id="app">
    <helper-notif />
    <helper-banner />
    <article-wrapper
      :article-title='articleHeadText'
      :article-subtitle='articleHeadSubtitle'
      :article-author='articleHeadAuthor'
      :article-cards='articleCards'
    ></article-wrapper>
  </div>
</template>

<script>
import ArticleWrapper from './layouts/article-wrapper.vue'
import HelperBanner from './modules/helpers/Banner.vue'
import HelperNotif from './modules/helpers/Notif.vue'

export default {
  name: 'App',
  components: {
    ArticleWrapper,
    HelperBanner,
    HelperNotif
  },
  computed: {
    articleHeadText: function () {
      return this.$store.state.mydata.article.article_section_head.article_title
    },
    articleHeadSubtitle: function () {
      return this.$store.state.mydata.article.article_section_head.article_subtitle
    },
    articleHeadAuthor: function () {
      return this.$store.state.mydata.article.article_section_head.article_author
    },
    articleCards: function () {
      return this.$store.state.mydata.article.article_section_body
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/1_globals/_index'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
