<template>
  <div id="tab-bar">
    <slot>用来插入tab-bar-item</slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>
<style scope>
  #tab-bar {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #1c2631;
  background-color:#fff;
}
#tab-bar .tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
#tab-bar .tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 5px 0 2px 0;
  vertical-align: middle;
}
.active div{
  color:red;
}
</style>