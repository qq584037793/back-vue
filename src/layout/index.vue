<template>
  <!-- 全体布局 -->
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 侧边菜单 -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
    <div class="main-container">
      <div class="fixer-header">
        <!-- 导航栏 -->
        <navbar />
      </div>
      <!-- 主画面 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transform: width #{sideBarDuration};
}
.hideSidebar .fixed-header {
  width: calc(100-#{$hideSideBarWidth});
}
</style>
