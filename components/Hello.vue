<script setup lang="ts">
  import IconEnvelop from '~/assets/images/svg/Envelop.svg';
</script>

<template>
  <div class="flex flex-wrap gap-4 p-5">
    <div>
      <UIButton text="Зв'язатися" size="lg">
        <template #icon>
          <IconEnvelop class="!h-[15px] !w-[19px]" />
        </template>
      </UIButton>
    </div>

    <div>
      <UIButton text="Зв'язатися" size="lg" variant="outline">
        <template #icon>
          <IconEnvelop class="!h-[15px] !w-[19px]" />
        </template>
      </UIButton>
    </div>

    <div>
      <UIButton text="Детальніше" variant="outline" styles="bg-green-600" />
    </div>
    <div>
      <UIButton text="Детальніше" />
    </div>

    <div>
      <UIButton text="Увійти" size="lg" />
    </div>
    <div>
      <UIButton text="Увійти" size="lg" variant="outline" styles="text-orange-400" />
    </div>

    <div>
      <UIButton text="Увійти" />
    </div>

    <div>
      <UIButton text="Увійти" variant="outline" />
    </div>
  </div>
</template>
