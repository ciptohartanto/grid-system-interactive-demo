<template>
  <container-row>
    <grid v-for="(card, index) in articleCards" :key="index" :xs="6" :sm="4" :md="6" :lg="3">
      <card
        :imageURL="card.article_body_content.article_body_image"
        :cardTitle="card.article_body_content.article_body_title"
        :cardSubtitle="card.article_body_content.article_body_subtitle"
      ></card>
    </grid>
  </container-row>
</template>
<script>
import ContainerRow from "./../components/ContainerRow.vue";
import Grid from "./../components/Grid.vue";
import Card from "./../modules/cards/Card.vue";

export default {
  name: "ArticleBody",
  components: {
    ContainerRow,
    Grid,
    Card
  },
  props: {
    articleCards: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style scoped>
.test {
  display: block;
}
.kon {
  margin-left: 10px;
}
</style>
