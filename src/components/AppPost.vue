<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ Data.name }}</span>
    </div>
    <div @click="$store.commit('likeon')" :class="`${Data.filter} post-body`" :style="{ backgroundImage: `url(${Data.postImage})` }"></div>
    <div class="post-content">
      <ul>
        <!-- <li>좋아요 :{{ Data.likes }}</li> -->
        <li>좋아요 :{{ $store.state.likes }}</li>
        <li>
          <strong>작성자 :{{ Data.name }}</strong>
        </li>
        <li>{{ Data.content }}</li>
        <li class="date">작성일:{{ Data.date }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Data: Object,
    i: Number,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.post-content ul li {
  margin-top: 10px;
}
.date {
  font-size: 12px;
  color: grey;
}
</style>
