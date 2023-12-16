<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();

  const emits = defineEmits(['deleteAction']);

  const deleteAction = () => emits('deleteAction');
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div
      class="grid grid-cols-[70px_repeat(11,_1fr)] gap-y-[15px] rounded-[5px] border-2 border-transparent bg-status_dark_gray px-2.5 pb-[15px] pt-2.5 font-medium transition-all duration-100 hover:border-[#B6B6B6] md:grid-cols-[120px_repeat(11,_1fr)] md:grid-rows-[repeat(3,min-content)] md:gap-y-0 md:rounded-[10px] md:p-5 lg:grid-cols-[150px_repeat(11,_1fr)] lg:rounded-[20px] lg:px-[25px] lg:py-[33px]"
    >
      <div class="md:row-span-3">
        <img
          :src="product.main_image?.path"
          :alt="useMultiLang(product, 'title')"
          class="h-[75px] w-[60px] rounded-[5px] object-cover md:h-[135px] md:w-[100px] md:rounded-[10px] lg:w-[110px] lg:rounded-[20px]"
        />
      </div>

      <div class="col-span-4 flex flex-col">
        <h2 class="mb-[2px] text-[10px] md:mb-[5px] md:text-[14px] lg:mb-2.5 lg:text-[16px]">
          {{ useMultiLang(product, 'title') }}
        </h2>

        <p
          class="text-[7px] leading-[9px] text-status_gray md:text-[10px] md:leading-[12px] lg:text-[14px] lg:leading-[17px]"
        >
          {{ useMultiLang(product.category, 'title') }}
        </p>
      </div>

      <div
        class="col-span-7 text-right text-[14px] font-semibold md:row-span-3 md:text-[16px] lg:text-[20px]"
      >
        <div
          v-if="product?.price_type === 'fixed'"
          class="ml-auto flex w-fit items-center justify-between gap-x-2.5 md:gap-x-5 lg:gap-x-[25px]"
        >
          <span class="text-[7px] font-normal text-status_gray md:text-[12px] lg:text-[16px]">
            {{
              `${product?.prices[0]?.min_amount} ${useMultiLang(product.prices[0].unit, 'title')}`
            }}
          </span>
          {{ product?.prices[0]?.price }}
        </div>

        <ul
          v-if="product?.price_type === 'variated'"
          class="ml-auto flex w-fit flex-col gap-y-[5px] md:gap-y-[7px] lg:gap-y-2.5"
        >
          <li
            v-for="(price, i) in product?.prices"
            :key="i"
            class="flex items-center justify-between gap-x-2.5 md:gap-x-5 lg:gap-x-[25px]"
          >
            <span class="text-[7px] font-normal text-status_gray md:text-[12px] lg:text-[16px]">
              {{
                `${$t('from')} ${price?.min_amount} ${$t('to')} ${price?.max_amount} ${useMultiLang(
                  price.unit,
                  'title'
                )}`
              }}
            </span>
            {{ price?.price }}
          </li>
        </ul>
      </div>

      <div
        class="col-start-1 col-end-6 flex gap-x-2.5 md:col-start-2 md:row-start-2 md:row-end-3 md:gap-x-[15px] lg:gap-x-[25px]"
      >
        <div
          class="flex items-center gap-x-[3px] text-[10px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
        >
          <SvgoShowPassword
            :fontControlled="false"
            class="h-[9px] w-[13px] text-status_gray md:h-[11px] md:w-[16px] lg:h-[15px] lg:w-[22px]"
          />
          {{ product.views }}
        </div>

        <div
          class="flex items-center gap-x-[3px] text-[12px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
        >
          <SvgoHearth
            :fontControlled="false"
            class="h-[12px] w-[13px] text-status_gray md:h-[15px] md:w-[16px] lg:h-[20px] lg:w-[21px]"
          />
          {{ product.favorites_count }}
        </div>

        <!-- <div
          class="flex items-center gap-x-[3px] text-[10px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
        >
          <SvgoEnvelop
            :fontControlled="false"
            class="h-[11px] w-[13px] text-status_gray md:h-[13px] md:w-[16px] lg:h-[18px] lg:w-[22px]"
          />
          32
        </div> -->
      </div>

      <div
        class="col-start-6 col-end-[-1] flex justify-end md:col-start-2 md:col-end-6 md:row-start-3 md:row-end-3 md:mt-auto md:justify-self-start"
      >
        <a
          href="#"
          class="mr-2.5 flex items-center text-[7px] leading-[9px] text-status_gray underline underline-offset-2 transition-colors duration-150 hover:text-black md:mr-[15px] md:text-[10px] md:leading-[12px] lg:mr-[30px] lg:text-[14px] lg:leading-[17px]"
        >
          {{ $t('analytics') }}
        </a>

        <UiButtonOpacityEdit class="mr-2.5 lg:mr-[15px]" :to="'edit_product/' + product.id" />

        <UiButtonOpacityDelete @click.prevent="deleteAction" />
      </div>
    </div>
  </NuxtLink>
</template>

<style></style>
