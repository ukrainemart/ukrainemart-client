<script setup lang="ts">
  defineProps<{
    user?: boolean;
  }>();
</script>

<template>
  <div
    :class="
      cn(
        'relative mb-[5px] ml-[7px] rounded-[5px] bg-[#535353] p-[8px] md:rounded-[10px] md:p-[10px] xl:p-[12px]',
        {
          '!ml-[0px] mr-[7px] !bg-status_dark_gray': user,
        }
      )
    "
  >
    <span
      :class="
        cn('triangle_el', {
          '!left-auto right-[-11px] !rotate-[14deg] !border-l-status_dark_gray': user,
        })
      "
    />
    <p
      :class="
        cn('text-[7px] font-medium text-white md:text-[10px] xl:text-[14px]', {
          '!text-black': user,
        })
      "
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
  </div>
</template>

<style scoped>
  .triangle_el {
    background: transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 20px solid #535353;
    border-top: 20px solid transparent;
    bottom: -1px;
    transform: rotate(-102deg);
    left: -8px;
  }
</style>
