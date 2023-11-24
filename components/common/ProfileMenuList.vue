<script setup lang="ts">
  const emits = defineEmits(['switchMenu']);
  const auth = useAuthStore();

  const isCompany = computed(() => auth.isCompany);
  const isExporter = computed(() => auth.isExporter);

  const closeMenu = () => {
    emits('switchMenu', false);
  };

  const logout = async () => {
    await auth.logout();
    closeMenu();
  };
</script>

<template>
  <ul>
    <li>
      <CommonProfileMenuLink to="/profile" @click="closeMenu">{{
        $t('profile.personal_data')
      }}</CommonProfileMenuLink>
    </li>
    <li>
      <CommonProfileMenuLink to="/profile/favorites" @click="closeMenu">{{
        $t('favorites')
      }}</CommonProfileMenuLink>
    </li>
    <li v-if="!isCompany">
      <CommonProfileMenuLink to="/profile/create_company" @click="closeMenu">{{
        $t('profile.apply_company_creation')
      }}</CommonProfileMenuLink>
    </li>
    <li v-if="isExporter">
      <CommonProfileMenuLink to="/profile/my_products" @click="closeMenu">{{
        $t('profile.my_products')
      }}</CommonProfileMenuLink>
    </li>
    <li class="mt-[25px] md:mt-[48px] xl:mt-[55px]">
      <CommonProfileMenuLink class="flex gap-[5px] xl:gap-[10px]" @click="logout">
        <SvgoLogout class="!h-[11px] !w-[12px] xl:!h-[18px] xl:!w-[20px]" />
        <span>{{ $t('profile.sign_out') }}</span>
      </CommonProfileMenuLink>
    </li>
  </ul>
</template>

<style scoped></style>
