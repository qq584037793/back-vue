<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
      v-for="(item, index) in breadcrumbData"
      :key="item.path"
    >
      <!-- 不可点击 -->
      <span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{
        item.meta.title
      }}</span>

      <!-- 可点击 -->
      <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
        item.meta.title
      }}</a>
    </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
  // console.log(breadcrumbData.value)
}
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
// 点击事件
const onLinkClick = (item) => {
  console.log(item)
  router.push(item.path)
}
// 主体换颜色
const store = useStore()

const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }
}
</style>
