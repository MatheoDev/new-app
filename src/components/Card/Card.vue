<template>
     <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          :src="article.urlToImage"
          class="image"
          :alt="article.urlToImage"
        />
        <div style="padding: 14px">
          <span class="title"> {{ article.title }} </span>
          <div class="bottom">
            <span class="date">{{ article.publishedAt }}</span>
            <el-button text class="button"> Voir Plus </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>


<script>
import {ElCard, ElRow, ElCol, ElButton} from 'element-plus';


export default {
    name: 'Card',
    components: {
        "el-card": ElCard,
        "el-row": ElRow,
        "el-col": ElCol,
        "el-button": ElButton,
    },

    props: {
        article: {
            type: Object,
            required: true,
        }
    }

    // props: {
    //         retriveTitle: $store.state.news.title,
    //         currentDate: $store.state.news.publishedAt,
            
                
    //         },

}
</script>


<style>

.time {
  font-size: 12px;
  color: #999;
}

.button {
  padding: 0;
  min-height: auto;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>