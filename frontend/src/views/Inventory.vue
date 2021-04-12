<template>
  <div class="inventory-wrapper">
    <div>
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

<script>
import DateSelector from '../components/DateSelector.vue'
// import * as inventorySvc from '../services/inventory.service'

export default {
  components: { DateSelector },
  name: 'Inventory',

  data() {
    return {
      headers: [
        {
          text: 'col1',
          value: 'prop1'
        },
        {
          text: 'col2',
          value: 'prop2'
        },
        {
          text: 'col3',
          value: 'prop3'
        },
        {
          text: 'col4',
          value: 'prop4'
        }
      ],
      items: []
    }
  },
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
}
</script>

<style lang="scss">
.inventory-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>