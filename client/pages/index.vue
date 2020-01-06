<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="pa-0">

        <!-- Main Body -->
        <main>

          <!-- Hero Section -->
          <v-container id="hero" class="pa-0" fluid>
            <v-img
              src="https://i.picsum.photos/id/0/1920/1080.jpg"
              lazy-src="https://picsum.photos/id/0/10/6"
              aspect-ratio="1"
              max-height="90vh"
            >
              <div class="fill-height gradient white--text d-flex flex-column align-center justify-center text-center px-8">
                <h2 :class="{'display-3 pb-12': $vuetify.breakpoint.smAndDown, 'display-4 pb-12': $vuetify.breakpoint.mdAndUp}">
                  Nuxt Adonis Starter
                </h2>
                <p :class="{'headline pb-1': $vuetify.breakpoint.smAndDown, 'display-2 pb-4': $vuetify.breakpoint.mdAndUp}">
                  All you need to do is clone, install, and run.
                </p>
                <p :class="{'title': $vuetify.breakpoint.smAndDown, 'headline': $vuetify.breakpoint.mdAndUp}">
                  Harness the power Nuxt, Vuetify, and Adonis combined.
                </p>
              </div>
            </v-img>
          </v-container>

          <!-- Features Section -->
          <v-container id="features" class="py-12 d-flex flex-column align-center text-center" fluid>
            <h2 :class="{'display-1 pb-12 mr-0 pr-0': $vuetify.breakpoint.smAndDown, 'display-2 pb-12 mr-12 pr-5': $vuetify.breakpoint.mdAndUp}">
              Lots of features
            </h2>
            <section class="d-flex flex-column flex-md-row align-center justify-space-evenly">
              <section class="d-flex flex-column align-center pa-6">
                <v-icon :size="responsiveIconSize" class="py-6">
                  mdi-autorenew
                </v-icon>
                <p class="headline px-6">
                  Reduce development times
                </p>
              </section>
              <section class="d-flex flex-column align-center pa-6">
                <v-icon :size="responsiveIconSize" class="py-6">
                  mdi-account
                </v-icon>
                <p class="headline px-6">
                  Baked in user management and authentication
                </p>
              </section>
              <section class="d-flex flex-column align-center pa-6">
                <v-icon :size="responsiveIconSize" class="py-6">
                  mdi-server
                </v-icon>
                <p class="headline px-6">
                  Developer-friendly AdonisJS backend
                </p>
              </section>
            </section>
          </v-container>

          <!-- Adding Resources Section -->
          <v-container id="resources" fluid>
            <section :class="{'text-center ma-12 pa-0': $vuetify.breakpoint.smAndDown, 'text-center ma-12 pa-12': $vuetify.breakpoint.mdAndUp}">
              <h2 :class="{'display-1 pb-12': $vuetify.breakpoint.smAndDown, 'display-2 pb-12': $vuetify.breakpoint.mdAndUp}">
                Adding a new resource type
              </h2>
              <ol :class="{'headline text-left': $vuetify.breakpoint.smAndDown, 'display-1 text-left': $vuetify.breakpoint.mdAndUp}">
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  adonis make:model ModelName -mc // makes a model, resource controller, and migration in one line
                </li>
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  Add table fields to migration file
                </li>
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  Set relationships in model file
                </li>
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  Add resource routes to routes file
                </li>
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  Configure resource controller from example
                </li>
                <li :class="{'subtitle-1 text-left pb-6': $vuetify.breakpoint.smAndDown, 'title font-weight-regular text-left pb-6': $vuetify.breakpoint.mdAndUp}">
                  Configure vuex store from example
                </li>
              </ol>
            </section>
          </v-container>

        </main>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    iconSize: 32,
  }),
  computed: {
    responsiveIconSize() {
      let value = '32'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': value = '64'; break;
        case 'sm': value = '80'; break;
        case 'md': value = '96'; break;
        case 'lg': value = '112'; break;
        case 'xl': value = '128'; break;
      }
      return value
    }
  }
}
</script>

<style lang="scss">

.gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

#resources {
  background-color: #eee;
}

</style>
