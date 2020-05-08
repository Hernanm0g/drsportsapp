<template>
  <v-app>
    <v-app-bar
      app
      hide-on-scroll
      color="primary"
      dense
      dark
    >
      <v-toolbar-title>DRSportsApp</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'DRSportsApp',
};
</script>
