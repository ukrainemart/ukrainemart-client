<script setup lang="ts"></script>

<template>
  <div
    class="flex h-header-sm flex-col overflow-x-hidden md:h-header-md xl:h-header-xl 2xl:h-header-2xl"
  >
    <div class="flex flex-1 flex-col items-center justify-center px-5 text-center">
      <h1
        class="mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"
      >
        Ukrainemart
      </h1>

      <p
        class="mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"
      >
        Перша в Україні B2B платформа для українських експортерів та міжнародних імпортерів
      </p>

      <div>
        <div
          class="relative min-w-[305px] rounded-[50px] border border-solid border-black md:w-[446px] lg:w-[600px]"
        >
          <label for="Search" class="absolute right-[15px] top-1/2 -translate-y-1/2">
            <SvgoSearch
              :fontControlled="false"
              class="!mb-0 h-[12px] w-[12px] cursor-text text-status_gray md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"
            />
          </label>

          <input
            id="Search"
            type="search"
            name="Search"
            placeholder="Почніть пошук"
            class="w-full bg-transparent py-[9px] pl-[15px] pr-8 text-[10px] text-black outline-none placeholder:text-status_gray md:py-[12px] md:pl-[18px] md:pr-[36px] md:text-[14px] lg:py-[15px] lg:pl-[21px] lg:pr-10 lg:text-[17px]"
          />
        </div>

        <p
          class="ld:mt-[5px] ml-[18px] mt-[3px] text-left text-[7px] font-medium text-black md:mt-[7px] md:text-[13px] lg:text-[17px]"
        >
          Наприклад: <span class="underline">Зерно</span> або <span class="underline">Олія</span>
        </p>
      </div>
    </div>

    <CommonSectionCategories />
  </div>
</template>

<style></style>
