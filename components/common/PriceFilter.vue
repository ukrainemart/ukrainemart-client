<script setup lang="ts">
  import Slider from '@vueform/slider';

  const PRICE_MAX_LENGTH = 9;
  const { priceRange, handlerFilter } = inject('priceRange') as {
    priceRange: {
      api: {
        min: number;
        max: number;
      };
      input: {
        min: number;
        max: number;
      };
    };
    handlerFilter: (filterValue: any, filterType: string) => void;
  };

  const handlerPriceUpdate = (value: string | number[], type: string) => {
    switch (type) {
      case 'min': {
        handlerFilter({ min: Number(value), max: priceRange.input.max }, 'price');
        break;
      }
      case 'max': {
        handlerFilter({ min: priceRange.input.min, max: Number(value) }, 'price');
        break;
      }
      case 'range': {
        handlerFilter({ min: value[0], max: value[1] }, 'price');
        break;
      }
      default:
        throw new Error(`Unexpected input type: ${type} or value: ${value}`);
    }
  };

  const handleInputLength = (value: string, type: string) => {
    let newValue = value;

    if (Number(value) > PRICE_MAX_LENGTH) {
      newValue = value.slice(0, PRICE_MAX_LENGTH);
    }

    handlerPriceUpdate(newValue, type);
  };
</script>

<template>
  <!-- REVIEW empty/parent category -->
  <div v-if="priceRange.api.min !== null && priceRange.api.max !== null">
    <div class="flex flex-col gap-2.5 2xl:gap-[15px]">
      <!-- NOTE 8px height of slider button -->
      <div class="flex h-[8px] items-center justify-center md:h-2.5 2xl:h-[12px]">
        <Slider
          :value="[priceRange.input.min, priceRange.input.max]"
          :min="priceRange.api.min"
          :max="priceRange.api.max"
          :tooltips="false"
          :showTooltip="'drag'"
          class="price_slider"
          @update="handlerPriceUpdate($event, 'range')"
        />
      </div>

      <div class="flex justify-between">
        <input
          id="minInput"
          ref="minInput"
          class="slider_values_item"
          type="number"
          name="min-price"
          :min="priceRange.api.min"
          :max="priceRange.api.max"
          :value="priceRange.input.min"
          @input="(event: any) => handleInputLength(event.target.value, 'min')"
        />

        <input
          id="maxInput"
          ref="maxInput"
          class="slider_values_item"
          type="number"
          name="max-price"
          :min="priceRange.api.min"
          :max="priceRange.api.max"
          :value="priceRange.input.max"
          @input="(event: any) => handleInputLength(event.target.value, 'max')"
        />
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
    @apply h-px w-[calc(100%-8px)] cursor-pointer md:w-[calc(100%-10px)] 2xl:h-[2px] 2xl:w-[calc(100%-12px)];
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
