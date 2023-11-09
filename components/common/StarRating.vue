<script setup lang="ts">
  type Props = {
    ratingValue?: number;
    isReadOnly?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    ratingValue: 3.5,
    isReadOnly: false,
  });

  const rating = ref(props.ratingValue);
  const numberOfStars = ref(5);

  const updateRating = (newRating: number) => {
    if (!props.isReadOnly) {
      rating.value = newRating;
    }
  };
</script>

<template>
  <div class="flex gap-[2px] 2xl:gap-[3px]">
    <button
      v-for="index in numberOfStars"
      :key="index"
      type="button"
      :class="{ 'text-black': index <= rating, 'text-transparent': index > rating }"
      :disabled="props.isReadOnly"
      @click="updateRating(index)"
    >
      <SvgoStar
        :fontControlled="false"
        class="h-[15px] w-[15px] md:h-[20px] md:w-[20px] 2xl:h-[25px] 2xl:w-[25px]"
      />
    </button>
  </div>
</template>
