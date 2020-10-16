<template>
  <div class="home">
    <!-- 顶栏 -->
    <header-top :loginshow="true"> </header-top>
    <!-- 轮播 -->
    <nav class="swipe-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </nav>
    <!-- 店铺列表 -->
    <section class="shop-list-container">
      <lazy-component>
        <img v-for="(img, index) in imageList" v-lazy="img" :key="index" />
      </lazy-component>
    </section>
    <!-- tabbar -->
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },

  components: {
    HeaderTop,
    Footer,
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>