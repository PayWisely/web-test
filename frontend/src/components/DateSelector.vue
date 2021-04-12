<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formattedDate"
            label="Select Date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    formattedDateOptions: { weekday: 'long', month: 'long', day: 'numeric' },
    formattedDate: null,
    date: null,
    menu: false,
    modal: false
  }),

  mounted() {
    const today = new Date()
    this.date = today.toISOString().substr(0, 10)
    this.formattedDate = today.toLocaleDateString(undefined, this.formattedDateOptions)
  },
  watch: {
    date: function(val) {
      // console.log('selected date val', val)

      const valArray = val.split('-')
      const selectedDate = new Date(valArray[0], valArray[1]-1, valArray[2])
      const formattedSelectedDate = selectedDate.toLocaleDateString(undefined, this.formattedDateOptions)
      this.formattedDate = formattedSelectedDate

      this.$emit('date-selected', val)
    }
  }
})
</script>

