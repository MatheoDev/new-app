<template>
  <el-row>
    <el-card :id="article.id" :body-style="{ padding: '0px' }">
      <img :id="article.id" :src="article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/150'" class="image" :alt="article.urlToImage" />
      <div style="padding: 14px">
        <span class="title"> {{ article.title }} </span>
        <div class="bottom">
          <span class="date">{{ article.publishedAt }}</span>
          <div class="btn">
            <el-button type="default" class="search-bar__btn" @click="handleClick">Voir plus</el-button>
            <el-button type="primary" class="search-bar__btn" @click="handleSound">PP</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </el-row>
</template>


<script>
import { ElCard, ElRow, ElButton } from 'element-plus';


export default {
  name: 'Card',

  data() {
    return {
      sound: null,
    };
  },

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
      // retdirect vers le lien de l'article 
      window.open(this.article.url, '_blank')
    },
    handleSound() {
      if (!this.sound) {
        this.sound = new SpeechSynthesisUtterance(this.article.description)
      }
      window.speechSynthesis.speak(this.sound)
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