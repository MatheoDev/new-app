<template>
  <div class="home">
    <SearchBar />
    <!-- <NewsList /> -->
    <Paginate />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import Paginate from '@/components/Paginate/Paginate.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    Paginate
  }
}
</script>
