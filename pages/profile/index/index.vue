<script setup lang="ts"></script>

<template>
  <LayoutProfilePage :title="$t('profile.personal_data')">
    <div class="max-w-[1190px]">
      <div
        class="grid grid-cols-1 gap-y-[15px] sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[84px] md:gap-y-[20px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
      >
        <UiLabel :label="$t('name') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline />
        </UiLabel>
        <UiLabel :label="$t('name_company') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline />
        </UiLabel>
        <UiLabel label="Прізвище:" class="col-span-2 sm:col-span-1">
          <UiInputOutline />
        </UiLabel>
        <UiLabel :label="$t('category') + ':'" class="col-span-2 sm:col-span-1">
          <UiSelectOutline />
        </UiLabel>
        <UiLabel :label="$t('email') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline />
        </UiLabel>
        <UiLabel label="Опис вашої компанії:" class="col-span-2 sm:col-span-1">
          <UiTextareaOutline />
        </UiLabel>
        <UiLabel :label="$t('phone_number') + ':'" class="col-span-2 sm:col-span-1">
          <CommonPhoneInputOutline />
        </UiLabel>
        <UiButtonPrimary class="col-span-2 w-fit justify-self-center">{{
          $t('save_changes')
        }}</UiButtonPrimary>
        <div
          class="mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
        >
          <UiLabel class="row-span-1" :label="$t('password_change.old_password') + ':'">
            <UiInputOutline />
          </UiLabel>
          <UiLabel class="row-span-1" :label="$t('password_change.new_password') + ':'">
            <UiInputOutline />
          </UiLabel>
          <UiLabel class="row-span-1" :label="$t('repeatPassword') + ':'">
            <UiInputOutline />
          </UiLabel>
          <UiButtonPrimary class="col-span-2 w-fit justify-self-center">{{
            $t('change_password')
          }}</UiButtonPrimary>
        </div>
      </div>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>
