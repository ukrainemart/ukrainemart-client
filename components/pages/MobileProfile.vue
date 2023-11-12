<script setup lang="ts">
  defineProps<{
    isOpen: boolean;
  }>();

  const emits = defineEmits(['switchMenu']);

  const switchMenu = (value: boolean) => {
    emits('switchMenu', value);
  };
</script>

<template>
  <Transition name="page">
    <div
      v-show="isOpen"
      class="fixed left-0 top-0 z-[10] flex h-full w-full flex-col justify-end bg-dark-transparent"
      @click="switchMenu(false)"
    >
      <div
        :class="
          cn(
            'delay-300s relative translate-y-[100%]  rounded-t-[20px] bg-white p-[30px] duration-200 md:px-[40px]',
            {
              'translate-y-[0%]': isOpen,
            }
          )
        "
        @click.stop=""
      >
        <CommonUserIconName name="Andriy Ivanov" />
        <CommonProfileMenuList @switchMenu="switchMenu" class="mt-[20px] md:mt-[26px]" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
