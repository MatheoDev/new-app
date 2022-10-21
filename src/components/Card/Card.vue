<template>
  <el-row>
    <el-card :body-style="{ padding: '0px' }">
      <img :id="article.id" :src="article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/150'" class="image" :alt="article.urlToImage" />
      <div style="padding: 14px">
        <span class="title"> {{ article.title }} </span>
        <div class="bottom">
          <span class="date">{{ article.publishedAt }}</span>
          <el-button type="info" class="search-bar__btn" @click="handleClick">Voir plus</el-button>
        </div>
      </div>
    </el-card>
  </el-row>
</template>


<script>
import { ElCard, ElRow, ElButton } from 'element-plus';


export default {
  name: 'Card',

  components: {
    "el-card": ElCard,
    "el-row": ElRow,
    "el-button": ElButton,
  },

  props: {
    article: {
      type: Object,
      required: true,
    }
  },

  methods: {
    handleClick() {
      // retdirect vers le lien de l'article en target
      window.open(this.article.url, '_blank');
    }
  }
}
</script>


<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.button {
  padding: 0;
  min-height: auto;
}

.title {
  display: block;
  height: 60px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>