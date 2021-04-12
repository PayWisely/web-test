<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Inventory
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Add Inventory</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <date-selector @date-selected="onDateChanged"></date-selector>
              </v-col>

              <v-col cols="12">
                <v-range-slider
                  v-model="inventoryTimes"
                  label="Time Range"
                  :max="24"
                  :min="1"
                  class="align-center"
                >
                  <template v-slot:append>
                    <div class="timesDisplay">
                      {{ inventoryTimes[0] }}:00 - {{ inventoryTimes[1] }}:00
                    </div>
                  </template>
                </v-range-slider>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  :items="[2,4,6,8,10,12,14]"
                  v-model="tableSize"
                  label="Table Size"
                  required
                  disabled
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="tableQuantity"
                  type="number"
                  label="Table Quantity"
                  :min="1"
                  :max="20"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"
            text
            @click="clear"
          >
            Close
          </v-btn>
          <v-btn color="blue darken-1"
            text
            @click="submit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import DateSelector from '../components/DateSelector.vue'
import * as inventorySvc from '../services/inventory.service'

export default Vue.extend({
  components: { DateSelector },
  name: 'InventoryDialog',
  data: () => ({
    dialog: false,
    inventoryDate: null,
    inventoryTimes: [11,13],
    tableQuantity: 1,
    tableSize: 4,
  }),
  methods: {
    onDateChanged(val) {
      this.inventoryDate = val;
    },

    reset () {
      this.inventoryDate = null
      this.inventoryTimes = [11,13]
      this.tableQuantity = 1
      this.tableSize = 4
    },

    submit () {
      console.log('save clicked', this.inventoryDate, this.inventoryTimes, this.tableQuantity, this.tableSize)

      inventorySvc.default.add({
        date: this.inventoryDate,
        times: this.inventoryTimes,
        quantity: this.tableQuantity,
        size: this.tableSize
      }).then(() => {
        this.reset();
        this.dialog = false
      }).catch(error => {
        // TODO display error
        console.log('add inventory failed', error);
      });
    },

// TODO actually clear the data...

    clear () {
      console.log('clear clicked')
      this.reset();
      this.dialog = false
    },

  }  
})
</script>
<style lang="scss">
.timesDisplay {
  display: flex;
  justify-content: center;
  width: 120px;
  margin-top: -18px;
}
</style>