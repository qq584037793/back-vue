<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- icon -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>HomePage</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://www.google.com/">
              <el-dropdown-item>Google</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">LogOut</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'
import hamburger from './hamburger.vue'
import breadcrumb from './Breadcrumb/index.vue'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0);
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
.right-menu {
  display: fixed;
  float: right;
  align-items: center;
  padding-right: 16px;

  ::v-deep .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .el-avatar {
        --el-avatar-background-color: none;
        margin-right: 12px;
      }
    }
  }
}
</style>
