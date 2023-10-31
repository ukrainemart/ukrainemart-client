<!-- // TODO: add disabled styles -->

<script setup lang="ts">
  type Props = {
    text: string; // The text to display on the button
    type?: 'button' | 'submit'; // The type of the button. Default value - button
    styles?: string; // Additional custom styles for the button
    size?: 'sm' | 'lg'; // Size of the button: 'sm' for mobile, 'lg' for desktop. Default value - sm
    variant?: 'primary' | 'outline'; // Button style: 'primary' or 'outline'. Default value - primary
    disabled?: boolean; // Indicates whether the button is disabled. Default value - false
  };

  withDefaults(defineProps<Props>(), {
    type: 'button',
    styles: '',
    size: 'sm',
    variant: 'primary',
    disabled: false,
  });
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="
      cn(
        'flex items-center justify-center gap-[9px] rounded-[50px] font-montserrat font-medium transition-opacity duration-100 ease-linear hover:opacity-70 focus:outline-none disabled:cursor-not-allowed',
        {
          // size
          'px-[28px] py-[8px] text-[12px] leading-4': size === 'sm',
          'px-[35px] py-[13px] text-[20px] leading-6': size === 'lg',
          // variant
          'bg-black text-white': variant === 'primary',
          'border-2 border-solid border-black bg-white text-black': variant === 'outline',
          // variant & size
          border: variant === 'outline' && size === 'sm',
          'px-[26px] py-[6px]': variant === 'outline' && size === 'sm',
          'px-[33px] py-[11px]': variant === 'outline' && size === 'lg',
        },
        styles
      )
    "
  >
    <slot name="icon" />

    {{ text }}
  </button>
</template>
