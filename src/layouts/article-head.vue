<template>
  <div>
    <typography
    v-if="articleTitle !== ''"
    :typotag='titleTag'
    :typoclass='titleClass'
    :text="articleTitle"
    ></typography>

    <typography
    v-if="articleSubtitle !== ''"
    :typotag='subtitleTag'
    :typoclass='subtitleClass'
    :text="articleSubtitle"
    ></typography>

    <typography
    v-if="articleAuthor !== ''"
    :typotag='minorTag'
    :typoclass='minorClass'
    :text="articleAuthor"
    ></typography>

  </div>

</template>
<script>
import { TYPO_TAGS_CLASSES } from './../components/Constants.js'
import typography from './../components/Typography.vue'
export default {
  name: 'ArticleHead',
  components: {
    typography
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
    titleTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.TITLE.TAG
    },
    subtitleTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.TAG
    },
    minorTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.MINOR.TAG
    },
    titleClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.TITLE.CLASS
    },
    subtitleClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.SUBTITLE.CLASS
    },
    minorClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.HEADLINE.MINOR.CLASS
    }
  }
}
</script>
<style>

</style>
