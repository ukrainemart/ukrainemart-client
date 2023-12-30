<script setup lang="ts">
  defineProps<{
    subscription: Subscription;
  }>();
</script>

<template>
  <div
    class="mx-auto flex max-w-[350px] flex-col rounded-lg border border-gray-200 bg-white p-6 text-gray-900 shadow-sm xl:p-8 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
  >
    <h3 class="mb-4 text-2xl font-semibold">{{ useMultiLang(subscription, 'title') }}</h3>
    <div class="my-8 flex items-baseline">
      <span class="mr-2 text-5xl font-extrabold"><CommonCurrency />{{ subscription?.price }}</span>
      <span class="text-gray-500 dark:text-gray-400">/{{ subscription?.date_type }}</span>
    </div>
    <ul role="list" class="mb-8 space-y-4 text-left">
      <li v-for="item in subscription.features" :key="item.id" class="flex items-center space-x-3">
        <svg
          class="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ useMultiLang(item, 'title') }}</span>
      </li>
    </ul>
    <UiButtonPrimary>{{ $t('labels.sign_up_for_subscription') }}</UiButtonPrimary>
  </div>
</template>

<style></style>
