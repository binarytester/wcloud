<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="card-image">
        <figure>
          <img :src="urlImg" alt="Placeholder image" class="fade-in" v-if="urlImg" ref="image" />
        </figure>
      </div>
      <div>
        <textarea v-model="inputText" rows="5" cols="50" class="textarea is-primary" placeholder="Digite seu texto aqui"></textarea>
      </div>
      <button class="button is-primary" @click="generateWordCloud">Gerar Word Cloud</button>
      <div>
        <div id="wordcloud"></div>
      </div>
    </div>
  </div>
</template>

<script>
import gencloud from "../utils/wordcloud"
import generateCloud from "../utils/generateCloud"

export default {
  data() {
    return {
      inputText: "",
      urlImg: ""
    };
  },
  methods: {
    generateWordCloud() {
      if (this.inputText) {
        const x = gencloud(this.inputText);
        this.urlImg = generateCloud(x);

        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.image.classList.add('active');
          });
        }, 100);
      }
    }
  }
};
</script>

<style>
/* Adicione o estilo CSS no mesmo arquivo ou em um arquivo separado */
.fade-in {
  opacity: 0;
  transition: opacity 0.5s;
}

.fade-in.active {
  opacity: 1;
}

.textarea {
  margin-top: 1%;
}

.button {
  margin-top: 1%;
}
</style>
