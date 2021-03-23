<template>
  <template v-if="$store.selected.scourses[0]"> <!--if stops an error -->
    {{$store.selected.scourses[0].title}}
  </template>
</template>
