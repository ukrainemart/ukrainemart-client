<script setup lang="ts"></script>

<template>
  <div class="bg-transparent">
    <div class="container">
      <div class="mb-[20px]">
        <slot name="title"></slot>
        <slot name="additional_elements"></slot>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped></style>
