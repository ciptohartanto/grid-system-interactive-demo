<template>
  <div :class="{'gridShadow': shadowStat} ">
    <container-row>
      <grid
        v-for="(helpergrid, index) in helpergrids"
        :key='index'
        :xs = 1
        :sm = 1
        :md = 1
        :lg = 1
        />
    </container-row>
  </div>
</template>
<script>
import ContainerRow from './../../components/ContainerRow.vue'
import Grid from './../../components/Grid.vue'
import { EventBus } from '@/event-bus'

export default {
  name: 'Helper-GridShadow',
  components: {
    ContainerRow,
    Grid
  },
  data () {
    return {
      helpergrids: 12,
      shadowStat: false
    }
  },
  created() {
    EventBus.$on('toggleCheckbox', (data) => {
      this.shadowStat = data
    })
    EventBus.$on('checkBoxIsOn', (data) => {
      this.shadowStat = data
    })
    EventBus.$on('received:gridValue', (data) => {
      this.helpergrids = Number(data)
    })
    EventBus.$on("updated:checkBoxOnFromGridAdjuster", data => {
      this.shadowStat = data
    })
  }
}
</script>
<style lang="sass" scoped>
.gridShadow
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  z-index: 10
  [class^='grid-']
    height: 140vh
    background: rgba(purple,.2)
</style>