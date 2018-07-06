<template>
<div class="footer">
    <nav>
        <router-link :to="'groupRoomList'">
            <i id="icon-3"></i>
            <p>房间列表</p>
        </router-link>
        <router-link :to="'groupSetting'">
            <i class="icon-3"></i>
            <p>群设置</p>
        </router-link>
    </nav>
</div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-image: -webkit-linear-gradient(90deg, #adadae, #f1f1f1);
    a {
      position: relative;
      display: block;
      height: 4rem;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      color: #595757;
      background: url("../../static/img/border-tabs.png") center right no-repeat;
      background-size: 0.2rem 75%;
      #icon-3 {
        background: url("../../static/img/room.png") center center no-repeat;
        display: block;
        margin: auto;
        width: 2rem;
        height: 2rem;
        background-size: 75%;
        margin-top: 0.5rem;
      }
      .icon-3 {
        background-position-x: -9rem;
      }
      [class*="icon-"] {
        display: block;
        margin: auto;
        width: 2rem;
        height: 2rem;
        background: url("../../static/img/icon-tabs.png") no-repeat;
        background-size: auto 200%;
        margin-top: 0.5rem;
      }
    }
    a:last-child{
      background: none;
    }
  }
}
</style>


