<template>

  <div>
    <Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
      <template slot-scope="scope">
        <div
          class="pic"
          :style="{
            'background-image': `url(${scope.data.id.url})`
          }"
        />
      </template>
      <img class="like-pointer" slot="like" src="../assets/like-txt.png">
      <img class="nope-pointer" slot="nope" src="../assets/nope-txt.png">
    </Tinder>
    <div class="btns">
      <img src="../assets/nope.png" @click="decide('nope')">
      <img src="../assets/like.png" @click="decide('like')">
    </div>
   
  </div>
  
</template>

<script>
import Tinder from "vue-tinder";
import store from '../store/index.js';

export default {
  name: "Swipe",
  components: { Tinder },
  data: () => ({
    queue: [],
    like: [],
    indexCard: 0,
    offset: 0,
    source: store.state.place
  }),
  created() {
    this.mock();
  },
  methods: {
    mock(count = this.source.length) {
      
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: this.source[this.offset] });
        this.offset++;
      }
      this.queue = this.queue.concat(list);
      
    },
    onSubmit() {
      if (this.queue.length <= 0) {
        this.mock();
        store.commit('like_save',this.like);
        this.$router.push('/result');
      }
    },
    decide (choice) {
      this.$refs.tinder.decide(choice)
      console.log(choice)
      if (choice === 'like') {
        this.like.push({ "name" : this.source[this.indexCard].name ,
        "url" : this.source[this.indexCard].url,
        "description": this.source[this.indexCard].description,
        "rate": this.source[this.indexCard].rate,
        "opcl": this.source[this.indexCard].opcl,
        "location": this.source[this.indexCard].location,
        "phone": this.source[this.indexCard].phone,
        "price": this.source[this.indexCard].price,
        "recommendation": this.source[this.indexCard].recommendation
        
        
        
        }
        )
      }
      this.indexCard++;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}

#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 23px - 65px - 47px - 16px);
  min-width: 300px;
  max-width: 355px;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>


