<template>

  <!-- Dialog Wrapper -->
  <v-dialog
    v-if="isLoggedIn"
    v-model="menuOpen"
    class="pa-10"
    activator=".add-new-event"
  >
    <v-sheet class="pa-10 d-flex flex-column">

      <!-- Dialog Header -->
      <v-icon @click="menuOpen = false" class="align-self-end">
        mdi-close
      </v-icon>
      <h3>Add a new event</h3>

      <!-- Event Form -->
      <v-form
        ref="form"
        v-model="valid"
        class="newEventForm"
        lazy-validation
      >
        <v-text-field
          :value="newSpaceEventName"
          :counter="50"
          :rules="nameRules"
          @input="setNewSpaceEventName"
          class="my-5"
          label="Name"
          required
        />
        <v-textarea
          :value="newSpaceEventDescription"
          :rules="descriptionRules"
          :counter="1000"
          @input="setNewSpaceEventDescription"
          label="Description"
          name="Description"
          auto-grow
          required
        />
        <datetime
          v-model="startDateTime"
          :minute-step="15"
          type="datetime"
          value-zone="local"
          zone="local"
          use12-hour
          color="teal"
          class="my-5"
          required
        />
        <datetime
          v-model="endDateTime"
          :minute-step="15"
          type="datetime"
          value-zone="local"
          zone="local"
          use12-hour
          color="teal"
          class="my-5"
        />
        <v-textarea
          id="start"
          :value="newSpaceEventAddressName"
          :rules="addressNameRules"
          :counter="1000"
          @input="setNewSpaceEventAddressName"
          label="Address Name"
          name="AddressName"
          auto-grow
          required
        />
        <v-textarea
          id="end"
          :value="newSpaceEventFullAddress"
          :rules="fullAddressRules"
          :counter="1000"
          @input="setNewSpaceEventFullAddress"
          label="Full Address"
          name="FullAddress"
          auto-grow
          required
        />
        <v-textarea
          :value="newSpaceEventImageSource"
          :rules="imageSourceRules"
          :counter="1000"
          @input="setNewSpaceEventImageSource"
          label="Image Source"
          name="ImageSource"
          auto-grow
          required
        />

        <!-- Form Actions -->
        <v-sheet class="d-flex justify-space-evenly">
          <v-btn
            @click="resetCreateEventForm"
            color="info btn-box-shadow-secondary"
            class="my-5"
          >
            Reset
          </v-btn>
          <v-btn
            @click="createEvent"
            color="primary"
            class="my-5 btn-box-shadow-primary"
          >
            Submit
          </v-btn>
        </v-sheet>
      </v-form>

    </v-sheet>
  </v-dialog>

</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'NewEventDialog',
  components: {
    datetime: Datetime,
  },
  data: () => ({
    startDateTime: new Date().toJSON(),
    endDateTime: new Date().toJSON(),
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    startRules: [
      v => !!v || 'Start Date is required'
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 1000) || 'Description must be less than 1000 characters',
    ],
    addressNameRules: [
      v => !!v || 'Address Name is required',
      v => (v && v.length <= 1000) || 'Address Name must be less than 1000 characters',
    ],
    fullAddressRules: [
      v => !!v || 'Full Address is required',
      v => (v && v.length <= 1000) || 'Full Address must be less than 1000 characters',
    ],
    imageSourceRules: [
      v => !!v || 'Image Source is required',
      v => (v && v.length <= 1000) || 'Image Source must be less than 1000 characters',
    ],
    menuOpen: false,
  }),
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'newSpaceEventDescription',
      'newSpaceEventStart',
      'newSpaceEventEnd',
      'newSpaceEventAddressName',
      'newSpaceEventFullAddress',
      'newSpaceEventImageSource',
      'spaceEvents',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
  },
  watch: {
    // workaround to set datetime of event, cannot use v-on handlers, watching v-model changes and passing formatted date to vuex mutation
    startDateTime () {
      console.log(this.startDateTime);
      const formatted = this.startDateTime.substr(0, 19).replace('T', ' ');
      console.log(`Start value: ${formatted}`);
      this.setNewSpaceEventStart(formatted);
    },
    endDateTime () {
      console.log(this.endDateTime);
      const formatted = this.endDateTime.substr(0, 19).replace('T', ' ');
      console.log(`End value: ${formatted}`);
      this.setNewSpaceEventEnd(formatted);
    },
  },
  methods: {
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
    ]),
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setNewSpaceEventDescription',
      'setNewSpaceEventStart',
      'setNewSpaceEventEnd',
      'setNewSpaceEventAddressName',
      'setNewSpaceEventFullAddress',
      'setNewSpaceEventImageSource',
    ]),
    createEvent () {
      this.createSpaceEvent();
      this.resetCreateEventForm();
    },
    resetCreateEventForm () {
      this.$refs.form.reset();
      this.menuOpen = false;
    },
  }
}
</script>

<style lang="scss">

.v-dialog {
  width: 80vw;
}

.v-text-field__slot {
  height: 60px;
}

@media screen and (min-width: 768px) {

  .v-dialog {
    width: 50vw;
  }

}

</style>
