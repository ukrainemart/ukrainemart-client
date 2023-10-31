<script setup lang="ts">
  const tests = ['H', 'E', 1, 'P'];
  let a: string | number = 0;

  a = 'me';
</script>

<template>
  <h1
    :class="
      cn('h-10 bg-red-800 p-2', {
        'bg-sky-500': typeof a === 'number',
        'bg-green-500': typeof a === 'string',
      })
    "
  >
    T: {{ tests }} {{ a }}
  </h1>
  <p class="text-red-700">qwdqqwdwqdqwdwq</p>
  <div class="flex items-center bg-gray-800">
    <li v-for="test in tests" :key="test" class="p-1 uppercase text-white">test</li>
  </div>
  <UButton :ui="{ rounded: 'rounded-full' }" class="mx-auto block">UButton</UButton>
</template>
