<template>
  <template v-if="$store.selected.scourse[0]"> <!--if stops an error -->
    {{$store.selected.scourse[0].title}}

    <div v-for="student in $store.selected.sstudents">
      <p>{{student.fname}}</p>
    </div>
  </template>
</template>
