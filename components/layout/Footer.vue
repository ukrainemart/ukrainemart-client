<script setup lang="ts"></script>

<template>
  <footer class="bg-black pb-padding-b-footer-xs pt-[30px] lg:pb-[100px] lg:pt-[70px]">
    <div class="container justify-between lg:flex">
      <ul
        class="grid grid-cols-1 justify-between gap-[15px] md:grid-cols-3 lg:w-full lg:max-w-[80%] xl:gap-y-[30px]"
      >
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('whatIsUkrainemart') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('personalAccount') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('signup') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <UiHr class="md:hidden" />
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('subHeader.subscriptions') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('toUaExporters') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('toIntlImporters') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <UiHr class="md:hidden" />
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('faq') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('contractSupport') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>
              {{ $t('technicalSupport') }}
            </PagesFooterText>
          </UiButtonOpacity>
        </li>
      </ul>
      <div class="mt-[35px] flex flex-col items-center md:mt-[45px] lg:mt-0">
        <h5>
          <PagesFooterText>
            {{ `${$t('ourSocialNetworks')}:` }}
          </PagesFooterText>
        </h5>
        <div
          class="mt-[5px] flex max-w-[120px] justify-between gap-[25px] md:mt-[10px] lg:max-w-none 3xl:mt-[20px]"
        >
          <UiButtonOpacity to="/">
            <SvgoViber class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]" />
          </UiButtonOpacity>
          <UiButtonOpacity to="/">
            <SvgoFacebook class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]" />
          </UiButtonOpacity>
          <UiButtonOpacity to="/">
            <SvgoInstagram class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px]" />
          </UiButtonOpacity>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
