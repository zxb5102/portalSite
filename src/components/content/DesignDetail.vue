<template>

</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      var clientWidth = document.documentElement.clientWidth;
      if (clientWidth < 992) {
        this.$router.push("/pdaDesignDetail");
      } else {
        this.$router.push("/pcDesignDetail");
      }
    }
  };
</script>
<style>

</style>


