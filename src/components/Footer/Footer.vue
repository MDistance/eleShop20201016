<template>
  <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item name="/home" to="/home" icon="wap-home-o">
      主页
    </van-tabbar-item>
    <van-tabbar-item name="/classify" to="/classify" icon="comment-o">
      分类
    </van-tabbar-item>
    <van-tabbar-item name="/shopcar" to="/shopcar" icon="shopping-cart-o"
      >购物车</van-tabbar-item
    >
    <!-- <van-tabbar-item
        icon="shopping-cart-o"
        name="/shoppingcar"
        to="/shoppingcar"
        v-else
        :badge="$store.state.count"
        >购物车</van-tabbar-item
      > -->
    <van-tabbar-item name="/my" to="/my" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      active: "/home",
    };
  },
  watch: {
    //实时监听路由状态
    "$route.path": {
      handler(val) {
        this.active = val;
      },
      immediate: true, //立即执行
    },
  },
  computed: {
    // sum(){
    //   return this.list.length
    // }
  },
};
</script>