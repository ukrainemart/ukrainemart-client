<script setup lang="ts">
  definePageMeta({
    validate: async (route: any): Promise<any> => {
      const id = route.query.id || null;
      try {
        const res: any = await useFetch(`${useUrlApi()}/user/password/reset/check/${id}`);
        if (res.data.value.status === 1) {
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    },
  });
</script>

<template>
  <AuthPasswordRecovery />
</template>

<style scoped></style>
