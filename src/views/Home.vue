<template>
 <div class="home">
  <div class="header"></div>
  <div class="content"></div>
 </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
 name: "Home",
 components: {
  HelloWorld
 }
};
</script>

<style lang="scss" scoped>
.home {
 background: red;
}
</style>