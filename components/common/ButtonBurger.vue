<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <button>
    <div
      :class="
        cn('tham tham-e-squeeze tham-w-6', {
          'tham-active': isActive,
        })
      "
    >
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>
  </button>
</template>
