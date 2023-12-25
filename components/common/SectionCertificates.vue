<script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed';

  const { width } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();

  const props = defineProps<{
    certificates?: Certificate[];
  }>();

  const widthSlide = computed(() => {
    if (width.value >= BREAKPOINTS_LG) {
      return 131;
    }
    return 220;
  });

  const heightSlide = computed(() => {
    if (width.value >= BREAKPOINTS_LG) {
      return 131;
    }
    return 275;
  });
</script>

<template>
  <ClientOnly>
    <UiSectionTitle v-if="certificates && certificates.length > 0">
      <template #title>
        <span class="m-auto block text-left">
          {{ $t('labels.certificates') }}
        </span>
      </template>
      <template #content>
        <Swiper
          class="swiper_main w-full"
          :slides-per-view="'auto'"
          :spaceBetween="30"
          :breakpoints="{
            375: {
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide
            v-for="certificate in certificates"
            :key="certificate.id"
            class="!h-[275px] !w-fit overflow-hidden rounded-[5px] lg:!h-[131px]"
          >
            <a :href="certificate.path" class="block">
              <vue-pdf-embed
                :width="widthSlide"
                :height="heightSlide"
                class="block object-cover"
                :source="certificate.path"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </template>
    </UiSectionTitle>
  </ClientOnly>
</template>

<style scoped></style>
