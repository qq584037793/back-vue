<template>
  <!-- 一级菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子菜单 -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航栏</span>
      </template>
      <el-menu-item index="1-1">index1</el-menu-item>
      <el-menu-item index="1-2">index2</el-menu-item>
    </el-submenu>
    <!-- 具体菜单 -->
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>4</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
