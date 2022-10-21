<template>
  <div class="home">
    <SearchBar />

    <ListCard />
    <!-- <NewsList /> -->
    <Paginate />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import Paginate from '@/components/Paginate/Paginate.vue'
import ListCard from '@/components/ListCard/ListCard.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    Paginate,
    ListCard
  },
  mounted() {
    this.$store.dispatch('search')
  }
}
</script>
