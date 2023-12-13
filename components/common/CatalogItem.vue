<script setup lang="ts">
  defineProps<{
    category: Catalog;
    isSelectedCategory: boolean;
    viewport?: 'mobile' | 'desktop';
    variant?: 'logo' | 'image' | null;
  }>();

  const emit = defineEmits(['showChildren', 'handleLinkClick']);
</script>

<template>
  <!-- Mobile link -->
  <NuxtLink
    v-if="!category.children.length && viewport === 'mobile'"
    :to="`/category/${category.id}`"
    class="catalog_item"
    :class="{ 'bg-[#1111111f]': isSelectedCategory }"
    @click="emit('handleLinkClick', category)"
  >
    <div
      :class="
        cn(
          'flex w-full items-center gap-x-[5px] truncate md:gap-x-[10px] lg:flex-col lg:gap-y-[10px]',
          {
            'lg:max-w-[80px]': variant === 'image',
          }
        )
      "
    >
      <img
        v-if="variant === 'image' && category.image"
        class="h-[35px] w-[35px] rounded-full object-cover md:h-[45px] md:w-[45px] lg:h-[80px] lg:w-[80px]"
        :src="category.image"
        :alt="useMultiLang(category, 'title')"
      />

      <span
        :class="
          cn('catalog_text', {
            'lg:text-center': variant === 'image',
          })
        "
      >
        {{ useMultiLang(category, 'title') }}
      </span>
    </div>
  </NuxtLink>

  <!-- Mobile button -->
  <button
    v-if="category.children.length && viewport === 'mobile'"
    type="button"
    class="catalog_item"
    :class="{ 'bg-[#1111111f]': isSelectedCategory }"
    @click="emit('showChildren', category)"
  >
    <div class="flex flex-1 items-center gap-x-[10px] truncate">
      <img
        v-if="variant === 'logo' && category.logo"
        class="h-[20px] w-[20px] object-cover"
        :src="category.logo"
        :alt="useMultiLang(category, 'title')"
      />

      <span class="catalog_text">
        {{ useMultiLang(category, 'title') }}
      </span>
    </div>

    <SvgoArrowDown
      :fontControlled="false"
      class="ml-2 h-full w-[10px] -rotate-90 text-transparent"
    />
  </button>

  <!-- Desktop link -->
  <NuxtLink
    v-if="viewport !== 'mobile'"
    :to="`/category/${category.id}`"
    class="catalog_item"
    :class="{ 'bg-[#1111111f]': isSelectedCategory }"
    @click="emit('handleLinkClick', category)"
  >
    <div
      :class="
        cn('flex items-center truncate', {
          'flex-1 gap-x-[10px] ': variant === 'logo',
          'w-full gap-x-[5px] md:gap-x-[10px] lg:max-w-[80px] lg:flex-col lg:gap-y-[10px]':
            variant === 'image',
        })
      "
    >
      <img
        v-if="variant === 'image' && category.image && category.image?.length > 0"
        class="h-[80px] w-[80px] rounded-full object-cover"
        :src="category.image"
        :alt="useMultiLang(category, 'title')"
      />

      <img
        v-if="variant === 'logo' && category.logo && category.logo?.length > 0"
        class="h-[20px] w-[20px] object-cover"
        :src="category.logo"
        :alt="useMultiLang(category, 'title')"
      />

      <span
        :class="
          cn('catalog_text', {
            'lg:text-center': variant === 'image',
          })
        "
      >
        {{ useMultiLang(category, 'title') }}
      </span>
    </div>

    <SvgoArrowDown
      v-if="category.children.length"
      :fontControlled="false"
      class="ml-2 h-full w-[10px] -rotate-90 text-transparent"
    />
  </NuxtLink>
</template>

<style>
  .catalog_item {
    @apply relative flex w-full items-center justify-between py-[7.5px] text-left before:absolute before:bottom-0 before:left-[-8px] before:top-0 before:rounded-l-[10px] before:bg-[#1111111f] before:content-[''] after:absolute after:bottom-0 after:right-[-8px] after:top-0 after:rounded-r-[10px] after:bg-[#1111111f] after:content-[''] md:py-[12.5px] md:before:left-[-12px] md:after:right-[-12px] lg:rounded-[20px] lg:px-[25px] lg:before:content-[none] lg:after:content-[none] lg:hover:bg-[#1111111f] lg:hover:before:w-3 lg:hover:after:w-3 4xl:px-[30px] 4xl:text-[20px] 4xl:leading-[25px];
  }

  .catalog_text {
    @apply mr-auto w-full truncate text-[12px] font-medium leading-[15px] md:text-[14px] md:leading-[17px];
  }
</style>
