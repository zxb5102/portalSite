<template>
  <div class="login">
  </div>
</template>

<script>
  export default {
  }
  function windowSizeChange() {
    var width = document.documentElement.clientWidth;
    if (width > 992) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
</script>

<style scoped lang="less">
  .login {
    @media (min-width: 992px) {
    }
  }
</style>

