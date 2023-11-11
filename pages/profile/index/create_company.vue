<script setup lang="ts"></script>

<template>
  <LayoutProfilePage :title="$t('create_company.application_submission')">
    <form action="#">
      <div>
        <div
          class="grid max-w-[1110px] gap-[15px] md:gap-[20px] xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[15px]"
        >
          <UiLabel class="!text-status_gray" :label="$t('create_company.name_legal_entity') + ':'">
            <UiInputOutline />
          </UiLabel>
          <UiLabel
            :label="$t('create_company.enter_edrpou_code') + ':'"
            type="text"
            class="!text-status_gray"
          >
            <UiInputOutline />
          </UiLabel>

          <UiLabel
            :label="$t('create_company.contact_person_number') + ':'"
            type="text"
            class="!text-status_gray xl:row-span-1"
          >
            <CommonPhoneInputOutline />
          </UiLabel>

          <UiLabel
            :label="$t('create_company.describe_plan_using_platform') + ':'"
            type="text"
            class="!text-status_gray xl:row-span-2"
          >
            <UiTextareaOutline class="h-[125px] md:h-[159px] xl:h-[147px]"
          /></UiLabel>

          <UiLabel
            :label="$t('create_company.have__experience_export_import')"
            type="text"
            class="!text-status_gray xl:row-span-1"
          >
            так ні
          </UiLabel>
        </div>

        <UiButtonPrimary class="mt-[25px] md:mt-[45px]">{{ $t('send_request') }}</UiButtonPrimary>
      </div>
    </form>
  </LayoutProfilePage>
</template>

<style scoped></style>
