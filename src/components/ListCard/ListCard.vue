<template>
  <div class="liste__card">
    <Card v-for="article in $store.state.news" :key="article.author+article.publishedAt" :article="article" />
  </div>
</template>

<script>
import Card from '../Card/Card.vue';
export default {
    name: "ListCard",
    components: { Card }
}
</script>
