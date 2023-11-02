<script setup lang="ts"></script>

<template>
  <div class="bg-transparent py-[35px] md:py-[50px] 4xl:py-[75px]">
    <div class="container">
      <div class="mb-[20px] flex items-center justify-between">
        <slot name="title"></slot>
        <slot name="additional_elements"></slot>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped></style>
