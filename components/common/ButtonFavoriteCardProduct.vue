<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <UiButtonTemplateFavorites :product="product">
    <template #button="{ isDisabledFavoritesBtn, onClickFavoritesBth, isFavoritesProduct }">
      <button
        :disabled="isDisabledFavoritesBtn"
        class="group/favorites absolute right-[10%] top-[7%] w-[20%] rounded-[50%] bg-white pt-[20%] duration-hover group-hover:opacity-100 is-hover:opacity-0"
        @click.prevent="onClickFavoritesBth"
      >
        <SvgoHearth
          v-if="!isFavoritesProduct"
          :class="
            cn(
              'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-black duration-hover is-hover:group-hover/favorites:text-status_red'
            )
          "
        />
        <SvgoHearthBg
          v-else
          :class="
            cn(
              'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-status_red duration-hover is-hover:group-hover:text-status_red'
            )
          "
        />
      </button>
    </template>
  </UiButtonTemplateFavorites>
</template>

<style scoped></style>
