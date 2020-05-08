<template lang="html">
  <v-container>
    <v-alert>
      Esta página no existe
    </v-alert>
    <v-btn
      :to="{name:'home'}"
    >
      Volver
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name:"PageNotFound"
}
</script>

<style lang="css" scoped>
</style>
