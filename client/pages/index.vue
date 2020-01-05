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
              <div class="fill-height gradient white--text d-flex flex-column align-center justify-center">
                <h1 class="display-4 pb-12">Nuxt Adonis Starter</h1>
                <p class="display-2 pb-4">All you need to do is clone, install, and run.</p>
                <p class="headline">Harness the power Nuxt, Vuetify, and Adonis combined.</p>
              </div>
            </v-img>
          </v-container>

          <!-- Features Section -->
          <v-container id="features" class="py-12 d-flex align-center justify-space-around" fluid>
            <section class="d-flex flex-column align-center">
              <v-icon size="128">mdi-autorenew</v-icon>
              <p class="headline">Reduce development times</p>
            </section>
            <section class="d-flex flex-column align-center">
              <v-icon size="128">mdi-account</v-icon>
              <p class="headline">Baked in user management and authentication</p>
            </section>
            <section class="d-flex flex-column align-center">
              <v-icon size="128">mdi-server</v-icon>
              <p class="headline">Developer-friendly AdonisJS backend</p>
            </section>
          </v-container>

          <!-- Adding Resources Section -->
          <v-container id="resources" class="pa-0" fluid>

          </v-container>

        </main>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}

</style>
