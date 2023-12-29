<script setup lang="ts">
  defineProps<{
    image: string;
  }>();

  const isOpen = ref(false);
</script>

<template>
  <div class="inline-block">
    <UiButton @click="isOpen = true">
      <img :src="image" alt="" class="inline-block h-full w-full object-contain" />
    </UiButton>

    <UiModal
      v-model="isOpen"
      :ui="{
        container: 'items-center !p-0',
        base: '!px-[20px] !bg-transparent !shadow-none',
        width: '',
      }"
    >
      <img
        :src="image"
        alt=""
        class="inline-block !max-h-[90vh] !max-w-[90vh] object-contain object-center 4xl:!max-h-[40%]"
      />
    </UiModal>
  </div>
</template>

<style scoped></style>
