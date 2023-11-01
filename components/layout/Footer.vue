<script setup lang="ts"></script>

<template>
  <footer class="bg-black py-[30px] lg:pb-[100px] lg:pt-[70px] xl:pb-[140px]">
    <div class="container justify-between lg:flex">
      <ul class="grid justify-between gap-[15px] md:grid-cols-3 lg:w-full lg:max-w-[80%]">
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Що таке Ukrainemart?</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Особистий кабінет</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Реєстрація</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <UiHr class="md:hidden"></UiHr>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Каталог</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Українським експортерам</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Міжнародним імпортерам</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <UiHr class="md:hidden"></UiHr>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Питання і відповіді</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Супровід контрактів</PagesFooterText>
          </UiButtonOpacity>
        </li>
        <li>
          <UiButtonOpacity>
            <PagesFooterText>Технічна підтримка</PagesFooterText>
          </UiButtonOpacity>
        </li>
      </ul>
      <div class="mt-[35px] flex flex-col items-center md:mt-[45px] lg:mt-0">
        <h5>
          <PagesFooterText>Наші соц мережі:</PagesFooterText>
        </h5>
        <div
          class="mt-[5px] flex max-w-[120px] justify-between gap-[25px] md:mt-[10px] lg:max-w-none 3xl:mt-[20px] 3xl:gap-[50px]"
        >
          <UiButtonOpacity to="/">
            <SvgoViber
              class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px] 3xl:!h-[45px] 3xl:!w-[45px]"
            ></SvgoViber>
          </UiButtonOpacity>
          <UiButtonOpacity to="/">
            <SvgoFacebook
              class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px] 3xl:!h-[45px] 3xl:!w-[45px]"
            ></SvgoFacebook>
          </UiButtonOpacity>
          <UiButtonOpacity to="/">
            <SvgoInstagram
              class="!h-[20px] !w-[20px] text-white lg:!h-[25px] lg:!w-[25px] 3xl:!h-[45px] 3xl:!w-[45px]"
            ></SvgoInstagram>
          </UiButtonOpacity>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
