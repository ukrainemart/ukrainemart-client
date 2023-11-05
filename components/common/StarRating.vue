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

  const updateRating = (newRating: number) => {
    if (!props.isReadOnly) {
      rating.value = newRating;
    }
  };
</script>

<template>
  <div class="flex gap-[3px]">
    <button
      v-for="index in 5"
      :key="index"
      type="button"
      :class="{ 'text-black': index <= rating, 'text-transparent': index > rating }"
      :disabled="props.isReadOnly"
      @click="updateRating(index)"
    >
      <SvgoStar :fontControlled="false" class="w-[25px]" />
    </button>
  </div>
</template>
