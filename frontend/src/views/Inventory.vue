<template>
  <div class="inventory-wrapper">
    <div>
      <InventoryDialog />
      <date-selector @date-selected="onDateChanged"></date-selector>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-4"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DateSelector from '../components/DateSelector.vue'
import InventoryDialog from '../components/InventoryDialog.vue'
// import * as inventorySvc from '../services/inventory.service'

export default Vue.extend({
  components: { DateSelector, InventoryDialog },
  name: 'Inventory',

  data: () => ({
    headers: [
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Time',
        value: 'time'
      },
      {
        text: 'Size',
        value: 'size'
      },
      {
        text: 'Quantity',
        value: 'quantity'
      }
    ],
    items: []
  }),
  methods: {
    async onDateChanged(val) {
      try {
        // this.items = await inventorySvc.default.getInventory({
        //   date: val
        // })
        console.log('getInventory', this.items)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss">
.inventory-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>