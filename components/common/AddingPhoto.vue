<script setup lang="ts">
  const photos = ref<any[]>([]);
  const showPhotos = computed(() => photos.value.map((file) => URL.createObjectURL(file.value)));

  const updateInput = (value: any) => {
    photos.value = [...photos.value, value];
  };
</script>

<template>
  <div class="grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4">
    <div
      v-for="(photo, index) in showPhotos"
      :key="index"
      class="relative h-0 overflow-hidden pt-[100%] md:rounded-[5px] xl:rounded-[10px]"
    >
      <div class="absolute left-0 top-0 z-10 h-full w-full">
        <img :src="photo" class="block h-full w-full object-cover" alt="" />
      </div>
    </div>

    <div
      class="relative h-0 overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"
    >
      <label class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer">
        <UiInputFile class="hidden" @updateInput="updateInput" />
      </label>

      <div
        class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"
      >
        <span
          class="relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"
        />
        <p class="text_xs font-medium">{{ $t('add_photo') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
