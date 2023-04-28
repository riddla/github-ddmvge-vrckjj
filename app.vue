<script setup>
const { $dayjs } = useNuxtApp();
const d = $dayjs();
const doy = typeof d.dayOfYear;
</script>
<template>
  <div>
    DayJS: {{ d }}<br />
    DayJS dayOfYear type: {{ doy }}
  </div>
</template>
