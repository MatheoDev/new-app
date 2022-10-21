<template>
  <div class="search-bar">
    <form class="search-bar__form">
      <el-input v-model="$store.state.form.search" placeholder="Recherche" class="search-bar__input"/>
      <el-select v-model="$store.state.form.sorting" placeholder="Categorie" class="search-bar__input">
        <el-option
          v-for="item in $store.state.sorting"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
      <el-button type="primary" class="search-bar__btn" @click="handleSearch" :loading="$store.state.loading">Rechercher</el-button>
    </form>
  </div>
</template>

<script>
import { ElInput, ElSelect, ElButton } from 'element-plus'

export default {
  name: 'SearchBar',
  components: {
    "el-input": ElInput,
    "el-select": ElSelect,
    "el-button": ElButton,
  },
  methods: {
    handleSearch() {
      this.$store.dispatch('search')
    }
  }
}
</script>

<style scoped>
.search-bar__form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem 0;
  gap: 10px;
}
.search-bar__input {
  flex: 1;
}
</style>
