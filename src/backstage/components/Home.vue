<template>
    <div class="dv">
        <span class="h5 welcome">你好,周贵 </span>
        <!-- <b-table class="person-info" striped hover :items="items"></b-table> -->
        <div class="person-info">
            <h3 class="person-info-label">基本信息</h3>
            <div v-for="item in ary" :key="item.label" class="each-item">
                <div class="label">{{item.label}}</div>
                <div class="msg">{{item.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
const items = [
  {
    审核: "通过",
    园区: "南昌",
    设计所: "合橙设计所",
    姓名: "周贵",
    账号: "zhougui",
    邮箱: "68498695@qq.com"
  }
];
export default {
  data() {
    return {
      ary: [
        {
          label: "审核：",
          value: "通过"
        },
        {
          label: "园区：",
          value: "南昌"
        },
        {
          label: "设计所：",
          value: "合橙设计所"
        },
        {
          label: "姓名：",
          value: "周贵"
        },
        {
          label: "账号：",
          value: "zhougui"
        },
        {
          label: "邮箱：",
          value: "68498695@qq.com"
        }
      ],
      items: items
    };
  }
};
</script>
<style scoped lang="less">
.welcome {
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.each-item {
  display: block;
  margin-bottom: 20px;
  .label {
    display: inline-block;
    min-width: 100px;
    margin-right: 20px;
    //background-color: gray;
        @media (max-width: 992px) {
        min-width: 50px;
    }
  }
  .msg {
    display: inline-block;
  }
}
.person-info {
    .person-info-label{
        font-weight: 300;
        margin-bottom: 20px;
        line-height:55px;
        border-bottom: 1px solid black;
    }
    @media (max-width: 992px) {
        max-width: 95%;
    }
  @media (min-width: 992px) {
        max-width: 768px;
    }
  margin: auto;
}
</style>


