<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1" @click="step--">Prev</li>
      <li v-if="step == 2" @click="step--">Prev</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @write="write = $event" :step="step" :Data="Data" :image="image"/>
  <button @click="more" v-if="step == 0">더보기</button>

  <div class="footer" v-if="step == 0">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">Upload</label>
    </ul>
  </div>

</template>

<script>
import Container from "./components/AppContainer.vue";
import postdata from "./assets/postdata";
import axios from "axios";
axios.post();

export default {
  name: "App",
  data() {
    return {
      step: 0,
      Data: postdata,
      image: "",
      write: "",
      clickfilter: "",
    };
  },
  mounted() {
    this.emitter.on("clickbox", (a) => {
      this.clickfilter = a;
      console.log(a);
    });
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      let mypost = {
        name: "Minny",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.image,
        likes: 40,
        date: "Apr 4",
        liked: false,
        content: this.write,
        filter: this.clickfilter,
      };
      this.Data.unshift(mypost);
      this.step = 0;
    },
    more() {
      axios.get(`https://port-0-vue-sns-server-5x7y2mlhanapjt.sel4.cloudtype.app/list`).then((result) => {
        console.log(result.data.list);
        console.log(this.Data.push(result.data.list[0]));
      });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0].type);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f51a;
}
ul {
  padding: 5px;
  list-style-type: none;
}
div{
  background-color: #fff;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
