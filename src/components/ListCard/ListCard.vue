<template>
  <div class="liste__card">
    <div v-for="article in $store.state.news" :key="article.id" :article="article" />
  </div>
</template>

<script>
export default {
  name: 'ListCard',
}
</script>
