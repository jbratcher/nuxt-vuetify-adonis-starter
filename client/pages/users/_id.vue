<template>
  <v-layout>
    <v-col>

      <v-container class="profile-card">

        <v-avatar size="128">
          <v-img
            :src="user.profile_image_source"
          />
        </v-avatar>

        <p>
          {{ user.full_name }}
        </p>

        <p>
          {{ user.email }}
        </p>

        <v-file-input
          :rules="profileImageRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Update your profile picture"
          prepend-icon="mdi-camera"
          label="Profile Picture"
        />

      </v-container>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    profileImageRules: [
      value => !value || value.size < 2000000 || 'Profile image size should be less than 2 MB!',
    ],
  }),
  computed: {
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
  },
  created() {
    this.fetchUserById();
  },
  methods: {
    ...mapActions('auth', [
      'fetchUserById',
    ]),
  },
}
</script>

<style lang="scss">
  .profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 80vw;

    p:first-of-type {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 1rem 0 0.75rem;
    }

    p{
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  @media screen and (min-width: 768px) {
    .profile-card {
      width: 50vw;
    }
  }
</style>
