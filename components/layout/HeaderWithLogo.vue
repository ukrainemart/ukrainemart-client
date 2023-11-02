<script setup lang="ts"></script>

<template>
  <header class="px-5 py-[25px] md:px-10 md:py-[30px] lg:py-10">
    <div class="flex justify-between">
      <NuxtLink to="/" class="font-namu text-[20px] font-light">Ukrainemart</NuxtLink>

      <div class="flex">
        <div class="mr-[55px] hidden gap-[35px] md:flex">
          <UIButtonPrimary text="Увійти" />
          <UIButtonText text="Зареєструватися" />
        </div>

        <div>
          <div>
            <CommonButtonBurger />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
