<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <div
    class="flex rounded-[5px] bg-[#d9d9d9] px-2.5 pb-5 pt-2.5 font-medium md:rounded-[10px] md:p-5 lg:rounded-[20px] lg:px-[25px] lg:py-[33px]"
  >
    <div class="mr-[15px] md:mr-5 lg:mr-10">
      <img
        :src="product.images[0].path"
        alt="product"
        class="h-[75px] w-[60px] rounded-[5px] md:h-[135px] md:w-[100px] md:rounded-[10px] lg:w-[110px] lg:rounded-[20px]"
      />
    </div>

    <div class="flex flex-1 flex-col justify-between md:mr-[15px] lg:mr-[30px]">
      <NuxtLink :to="`/product/${product.id}`">
        <h2 class="mb-[5px] text-[12px] md:text-[14px] lg:mb-2.5 lg:text-[16px]">
          {{ useMultiLang(product, 'title') }}
        </h2>
      </NuxtLink>
      <p class="mb-2.5 text-[7px] text-status_gray md:mb-[25px] md:text-[10px] lg:text-[14px]">
        Агрокультура
      </p>
      <div class="mb-[15px] text-[12px] md:mb-10 md:text-[14px] lg:mb-[30px] lg:text-[16px]">
        150 т
      </div>

      <div class="md:flex md:justify-between">
        <div class="flex gap-x-[12px] md:gap-x-[15px] lg:gap-x-[25px]">
          <div
            class="flex items-center gap-x-[3px] text-[12px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
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
            68
          </div>
          <div
            class="flex items-center gap-x-[3px] text-[12px] md:gap-x-[5px] md:text-[14px] lg:gap-x-[10px] lg:text-[16px]"
          >
            <SvgoEnvelop
              :fontControlled="false"
              class="h-[11px] w-[13px] text-status_gray md:h-[13px] md:w-[16px] lg:h-[18px] lg:w-[22px]"
            />
            32
          </div>
        </div>

        <div class="hidden md:block">
          <a
            href="#"
            class="text-[10px] text-status_gray underline underline-offset-2 transition-colors duration-150 hover:text-black lg:text-[14px]"
          >
            {{ $t('analytics') }}
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between">
      <div class="text-right text-[14px] font-semibold md:text-[18px] lg:text-[20px]">30₴</div>

      <div class="flex gap-x-[15px] md:gap-x-2.5 lg:gap-x-[15px]">
        <SvgoEdit
          :fontControlled="false"
          class="h-[13px] w-[13px] text-status_gray md:h-[14px] md:w-[14px] lg:h-[18px] lg:w-[18px]"
        />
        <SvgoDelete
          :fontControlled="false"
          class="h-[11px] w-[13px] text-status_gray md:h-[14px] lg:h-[18px] lg:w-[14px]"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
