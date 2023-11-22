<script setup lang="ts">
  defineProps<{
    category: Category;
  }>();
</script>

<template>
  <div>
    <p>
      {{ useMultiLang(category?.breadcrumb, 'title') }}
    </p>
    <ul>
      <li v-for="c in category?.same_categories" :key="c.id" class="text-status_gray">
        {{ useMultiLang(c, 'title') }}
      </li>
    </ul>
  </div>
</template>

<style></style>
