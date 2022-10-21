<template>
  <div class="liste__card">
    <div v-for="article in $store.state.news" class="liste__card__item" :key="article.author+article.publishedAt">
      <Card :article="article" />
    </div>
  </div>
</template>

<script>
import Card from '../Card/Card.vue';
export default {
    name: "ListCard",
    components: { Card }
}
</script>

<style>
.liste__card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
.liste__card__item {
  width: 100%;
}
</style>
