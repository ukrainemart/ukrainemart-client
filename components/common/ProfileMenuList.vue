<script setup lang="ts">
  const emits = defineEmits(['switchMenu']);

  const closeMenu = () => {
    emits('switchMenu', false);
  };
</script>

<template>
  <ul>
    <li>
      <CommonProfileMenuLink to="/profile" @click="closeMenu">Особисті дані</CommonProfileMenuLink>
    </li>
    <li>
      <CommonProfileMenuLink @click="closeMenu">Мої замовлення</CommonProfileMenuLink>
    </li>
    <li>
      <CommonProfileMenuLink @click="closeMenu">Мої замовлення</CommonProfileMenuLink>
    </li>
    <li>
      <CommonProfileMenuLink @click="closeMenu">Мої замовлення</CommonProfileMenuLink>
    </li>
    <li>
      <CommonProfileMenuLink to="/profile/create_company" @click="closeMenu"
        >Подати заявку на створення компанії</CommonProfileMenuLink
      >
    </li>
    <li>
      <CommonProfileMenuLink @click="closeMenu">Мої товари</CommonProfileMenuLink>
    </li>
    <li class="mt-[25px] md:mt-[48px] xl:mt-[55px]">
      <CommonProfileMenuLink class="flex gap-[5px] xl:gap-[10px]" @click="closeMenu">
        <SvgoLogout class="!h-[11px] !w-[12px] xl:!h-[18px] xl:!w-[20px]" />
        <span>Вийти</span>
      </CommonProfileMenuLink>
    </li>
  </ul>
</template>

<style scoped></style>
