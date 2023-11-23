<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div
      class="grid grid-cols-[max-content_1fr_max-content] gap-y-[15px] rounded-[5px] bg-[#d9d9d9] px-2.5 pb-[15px] pt-2.5 font-medium md:rounded-[10px] md:p-5 lg:rounded-[20px] lg:px-[25px] lg:py-[33px]"
    >
      <div class="mr-2.5 md:mr-5 lg:mr-10">
        <img
          :src="product.main_image?.path"
          alt="product"
          class="h-[75px] w-[60px] rounded-[5px] object-cover md:h-[135px] md:w-[100px] md:rounded-[10px] lg:w-[110px] lg:rounded-[20px]"
        />
      </div>

      <div class="flex flex-col">
        <h2 class="mb-[2px] text-[10px] md:mb-[5px] md:text-[14px] lg:mb-2.5 lg:text-[16px]">
          {{ useMultiLang(product, 'title') }}
        </h2>
        <p
          class="text-[7px] leading-[9px] text-status_gray md:mb-5 md:text-[10px] md:leading-[12px] lg:mb-[25px] lg:text-[14px] lg:leading-[17px]"
        >
          {{ useMultiLang(product.category, 'title') }}
        </p>

        <!-- REVIEW DRY -->
        <div class="hidden gap-x-2.5 md:flex md:gap-x-[15px] lg:gap-x-[25px]">
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
            class="flex items-center gap-x-[3px] text-[10px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
          >
            <SvgoEnvelop
              :fontControlled="false"
              class="h-[11px] w-[13px] text-status_gray md:h-[13px] md:w-[16px] lg:h-[18px] lg:w-[22px]"
            />
            32
          </div>
        </div>
        <!-- REVIEW DRY -->
        <div class="mt-auto hidden md:flex">
          <a
            href="#"
            class="mr-2.5 text-[7px] leading-[9px] text-status_gray underline underline-offset-2 transition-colors duration-150 hover:text-black md:mr-[15px] md:text-[10px] md:leading-[12px] lg:mr-[30px] lg:text-[14px] lg:leading-[17px]"
          >
            {{ $t('analytics') }}
          </a>

          <SvgoEdit
            :fontControlled="false"
            class="mr-2.5 h-[11px] w-[11px] text-status_gray md:h-[14px] md:w-[14px] lg:mr-[15px] lg:h-[18px] lg:w-[18px]"
          />
          <SvgoDelete
            :fontControlled="false"
            class="h-[11px] w-[9px] text-status_gray md:h-[14px] md:w-[11px] lg:h-[18px] lg:w-[14px]"
          />
        </div>
      </div>

      <!-- REVIEW DRY -->
      <div class="order-1 flex gap-x-2.5 md:hidden md:gap-x-[15px] lg:gap-x-[25px]">
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
          class="flex items-center gap-x-[3px] text-[10px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
        >
          <SvgoEnvelop
            :fontControlled="false"
            class="h-[11px] w-[13px] text-status_gray md:h-[13px] md:w-[16px] lg:h-[18px] lg:w-[22px]"
          />
          32
        </div>
      </div>

      <div class="text-right text-[14px] font-semibold md:text-[16px] lg:text-[20px]">
        <div
          v-if="product.price_type === 'fixed'"
          class="flex items-center justify-between gap-x-2.5 md:gap-x-5 lg:gap-x-[25px]"
        >
          <span class="text-[7px] font-normal text-status_gray md:text-[12px] lg:text-[16px]">
            {{ product.prices[0].min_amount }}
          </span>
          {{ product.prices[0].price }}
        </div>

        <ul
          v-if="product.price_type === 'variated'"
          class="flex flex-col gap-y-[5px] md:gap-y-[7px] lg:gap-y-2.5"
        >
          <li
            v-for="(price, i) in product.prices"
            :key="i"
            class="flex items-center justify-between gap-x-2.5 md:gap-x-5 lg:gap-x-[25px]"
          >
            <span class="text-[7px] font-normal text-status_gray md:text-[12px] lg:text-[16px]">
              {{ `вiд ${price.min_amount} до ${price.max_amount}` }}
            </span>
            {{ price.price }}
          </li>
        </ul>
      </div>

      <!-- REVIEW DRY -->
      <div class="order-1 col-span-2 flex justify-end md:hidden">
        <a
          href="#"
          class="mr-2.5 text-[7px] leading-[9px] text-status_gray underline underline-offset-2 transition-colors duration-150 hover:text-black md:mr-[15px] md:text-[10px] md:leading-[12px] lg:mr-[30px] lg:text-[14px] lg:leading-[17px]"
        >
          {{ $t('analytics') }}
        </a>

        <SvgoEdit
          :fontControlled="false"
          class="mr-2.5 h-[11px] w-[11px] text-status_gray md:h-[14px] md:w-[14px] lg:mr-[15px] lg:h-[18px] lg:w-[18px]"
        />
        <SvgoDelete
          :fontControlled="false"
          class="h-[11px] w-[9px] text-status_gray md:h-[14px] md:w-[11px] lg:h-[18px] lg:w-[14px]"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style></style>
