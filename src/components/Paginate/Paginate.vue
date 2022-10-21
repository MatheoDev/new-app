<template>
  <div class="paginatation">
    <el-pagination
      small
      layout="prev, pager, next"
      :total="$store.state.paginate.total"
      :page-size="8"
      :current-page="$store.state.paginate.page"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ElPagination } from 'element-plus'
export default {
  name: 'Paginate',
  components: {
    "el-pagination": ElPagination
  },
  methods: {
    handleCurrentChange(page) {
      this.$store.state.paginate.page = page
      this.$store.dispatch('search')
    }
  }
}
</script>

<style>
.paginatation {
  display: flex;
  justify-content: end;
  margin: 1rem 0;
}
</style>
