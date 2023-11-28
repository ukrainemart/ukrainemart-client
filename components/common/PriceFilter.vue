<script setup lang="ts">
  import Slider from '@vueform/slider';

  const price = ref({
    min_price: 200,
    max_price: 4000,
    min_value: 1300,
    max_value: 2500,
  });

  // const { price } = defineProps(['price']);
  // const emit = defineEmits();
  // const [isVisible, setIsVisible] = useToggle(true);
  // const PRICE_MAX_LENGTH = 9;

  // const handlerPriceUpdate = (value: any, type: string) => {
  //   switch (type) {
  //     case 'min':
  //       emit('update:price', { min_price: Number(value), max_price: price.max_price }, 'price');
  //       break;
  //     case 'max':
  //       emit('update:price', { min_price: price.min_price, max_price: Number(value) }, 'price');
  //       break;
  //     case 'range':
  //       emit('update:price', { min_price: value[0], max_price: value[1] }, 'price');
  //       break;
  //     default:
  //       throw new Error(`Unexpected filterType - ${type}}`);
  //   }
  // };

  // const handleInputLength = (value: any, type: string) => {
  //   if (Number(value) > PRICE_MAX_LENGTH) {
  //     value = value.slice(0, PRICE_MAX_LENGTH);
  //   }

  //   handlerPriceUpdate(value, type);
  // };
</script>

<template>
  <div class="">
    <div class="flex flex-col gap-2.5 2xl:gap-[15px]">
      <!-- NOTE 8px height of slider button -->
      <div class="flex h-[8px] items-center md:h-2.5 2xl:h-[12px]">
        <Slider
          :value="[price.min_value, price.max_value]"
          :min="price.min_price"
          :max="price.max_price"
          :tooltips="true"
          :showTooltip="'drag'"
          class="price_slider"
        />
        <!-- @update="handlerPriceUpdate($event, 'range')" -->
      </div>

      <div class="flex justify-between">
        <input
          id="minInput"
          ref="minInput"
          class="slider_values_item"
          type="number"
          name="min-price"
          :min="price.min_price"
          :max="price.max_price"
          :value="price.min_value"
        />
        <!-- @input="(event: any) => handleInputLength(event.target.value, 'min')" -->

        <input
          id="maxInput"
          ref="maxInput"
          class="slider_values_item"
          type="number"
          name="max-price"
          :min="price.min_price"
          :max="price.max_price"
          :value="price.max_value"
        />
        <!-- @input="(event: any) => handleInputLength(event.target.value, 'max')" -->
      </div>
    </div>
  </div>
</template>

<style>
  @import '@vueform/slider/themes/default.css';

  :root {
    /* // NOTE range slider */
    /* --slider-height: 1px; */
    --slider-bg: #d9d9d9;
    --slider-connect-bg: black;
    --slider-handle-border: 1px;
    /* --slider-handle-width: 8px;
    --slider-handle-height: 8px; */
    --slider-handle-shadow: none;
    --slider-handle-shadow-active: none;
    --slider-handle-ring-color: transparent;
    --slider-handle-bg: black;
  }

  .price_slider {
    @apply mx-auto h-px w-[calc(100%-8px)] md:w-[calc(100%-10px)] 2xl:h-[2px] 2xl:w-[calc(100%-12px)];
  }

  .slider_values_item {
    @apply relative flex w-full max-w-[80px] cursor-pointer justify-center gap-[3px] rounded-[50px] border-[1px] border-black bg-transparent p-[8px] text-center text-[10px] leading-[12px] focus:outline-0 md:max-w-[100px] md:p-[11px] md:text-[12px] md:leading-[15px] 2xl:p-[15px] 2xl:text-[16px] 2xl:leading-[20px];
  }

  .slider-horizontal .slider-handle {
    top: -3.5px;
    height: 8px;
    width: 8px;

    @media (min-width: 834px) {
      top: -4.5px;
      height: 10px;
      width: 10px;
    }

    @media (min-width: 1024px) {
      top: -5px;
      height: 12px;
      width: 12px;
    }
  }
</style>
