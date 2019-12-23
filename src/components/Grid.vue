<template>
    <div :class="[_computeGridXS, _computeGridSM, _computeGridMD, _computeGridLG]">
      <slot></slot>
    </div>
</template>
<script>

import { EventBus } from '@/event-bus'
export default {
  name: 'Grid',
  props: {
    xs:{
      type: Number
    },
    sm:{
      type: Number
    },
    md:{
      type: Number
    },
    lg:{
      type: Number
    }
  },
  data () {
    return {
      currentXS: 12,
      currentMD: 12,
      currentLG: 12,
      newXS: 12,
      newSM: 12,
      newMD: 12,
      newLG: 12,
    }
  },
  computed: {
    _computeGridXS: function () {
      let grid_xs = ''
      if (this.newXS === 12) {
        grid_xs = `grid-xs_12--${this.xs}`
      }
      else if (this.newXS === 8) {
        let updatedXS = ''
        if(this.xs === 1) {
          updatedXS = this.xs
        } else {
          updatedXS = Math.floor(this.xs * (this.newXS / this.currentXS))
        }
        grid_xs = `grid-xs_8--${updatedXS}`
      }
      else if (this.newXS === 6) {
        let updatedXS = ''
        if(this.xs === 1) {
          updatedXS = this.xs
        } else  {
          updatedXS = Math.floor(this.xs * (this.newXS / this.currentXS))
        }
        grid_xs = `grid-xs_6--${updatedXS}`
      }
      else if (this.newXS === 4) {
        let updatedXS = ''
        if(this.xs === 1) {
          updatedXS = this.xs
        } else  {
          updatedXS = Math.floor(this.xs * (this.newXS / this.currentXS))
        }
        grid_xs = `grid-xs_4--${updatedXS}`
      }
      return grid_xs
    },
     _computeGridSM: function () {
      let grid_sm = ''
      if (this.newSM === 12) {
        grid_sm = `grid-sm_12--${this.sm}`
      }
      else if (this.newSM === 8) {
        let updatedMD = ''
        if (this.sm === 1) {
          updatedMD = this.sm
        } else {
          updatedMD = Math.floor(this.sm * (this.newSM / this.currentMD))
        }
        grid_sm = `grid-sm_8--${updatedMD}`
      }
      else if (this.newSM === 6) {
        let updatedMD = ''
        if (this.sm === 1) {
          updatedMD = this.sm
        } else {
          updatedMD = Math.floor(this.sm * (this.newSM / this.currentMD))
        }
        grid_sm = `grid-sm_6--${updatedMD}`
      }
      else if (this.newSM === 4) {
        let updatedMD = ''
        if (this.sm === 1) {
          updatedMD = this.sm
        } else {
          updatedMD = Math.floor(this.sm * (this.newSM / this.currentMD))
        }
        grid_sm = `grid-sm_4--${updatedMD}`
      }
      return grid_sm
    },
    _computeGridMD: function () {
      let grid_md = ''
      if (this.newMD === 12) {
        grid_md = `grid-md_12--${this.md}`
      }
      else if (this.newMD === 8) {
        let updatedMD = ''
        if (this.md === 1) {
          updatedMD = this.md
        } else {
          updatedMD = Math.floor(this.md * (this.newMD / this.currentMD))
        }
        grid_md = `grid-md_8--${updatedMD}`
      }
      else if (this.newMD === 6) {
        let updatedMD = ''
        if (this.md === 1) {
          updatedMD = this.md
        } else {
          updatedMD = Math.floor(this.md * (this.newMD / this.currentMD))
        }
        grid_md = `grid-md_6--${updatedMD}`
      }
      else if (this.newMD === 4) {
        let updatedMD = ''
        if (this.md === 1) {
          updatedMD = this.md
        } else {
          updatedMD = Math.floor(this.md * (this.newMD / this.currentMD))
        }
        grid_md = `grid-md_4--${updatedMD}`
      }
      return grid_md
    },
    _computeGridLG: function () {
     let grid_lg = ''
      if (this.newLG === 12) {
        grid_lg = `grid-lg_12--${this.lg}`
      }
      else if (this.newLG === 8) {
        let updatedLG = ''
        if (this.lg === 1) {
          updatedLG = this.lg
        } else {
          updatedLG = Math.floor(this.lg * (this.newLG / this.currentLG))
        }
        grid_lg = `grid-lg_8--${updatedLG}`
      }
      else if (this.newLG === 6) {
        let updatedLG = ''
        if (this.lg === 1) {
          updatedLG = this.lg
        } else {
          updatedLG = Math.floor(this.lg * (this.newLG / this.currentLG))
        }
        grid_lg = `grid-lg_6--${updatedLG}`
      }
      else if (this.newLG === 4) {
        let updatedLG = ''
        if (this.lg === 1) {
          updatedLG = this.lg
        } else {
          updatedLG = Math.floor(this.lg * (this.newLG / this.currentLG))
        }
        grid_lg = `grid-lg_4--${updatedLG}`
      }
      return grid_lg
    }
  },
  created() {
    EventBus.$on("received:gridValue", data => {
      this.newXS = Number(data)
      this.newSM = Number(data)
      this.newMD = Number(data)
      this.newLG = Number(data)
    })
  }
}
</script>

<style lang="sass" scoped>


// mixins for grid
@mixin grid($breakpoint, $grid-total-lines, $desired-gutter)
  @for $i from 1 through $grid-total-lines
    &-#{$breakpoint}--#{$i}
      width: calc(#{$i} / #{$grid-total-lines} * 100% - #{$desired-gutter})
      margin-left: calc(#{$desired-gutter} / 2)
      margin-right: calc(#{$desired-gutter} / 2)





// init grid classes
.grid
  //base 12
  @include break-point($bp-xs)
    display: inline-block
    @include grid($breakpoint-xs_12, 12, var(--gutter_xs))
  @include break-point($bp-sm)
    display: inline-block
    @include grid($breakpoint-sm_12, 12, var(--gutter_sm))
  @include break-point($bp-md)
    display: inline-block
    @include grid($breakpoint-md_12, 12, var(--gutter_md))
  @include break-point($bp-lg)
    display: inline-block
    @include grid($breakpoint-lg_12, 12, var(--gutter_lg))

  //base 8
  @include break-point($bp-xs)
    display: inline-block
    @include grid($breakpoint-xs_8, 8, var(--gutter_xs))
  @include break-point($bp-sm)
    display: inline-block
    @include grid($breakpoint-sm_8, 8, var(--gutter_sm))
  @include break-point($bp-md)
    display: inline-block
    @include grid($breakpoint-md_8, 8, var(--gutter_md))
  @include break-point($bp-lg)
    display: inline-block
    @include grid($breakpoint-lg_8, 8, var(--gutter_lg))

  //base 6
  @include break-point($bp-xs)
    display: inline-block
    @include grid($breakpoint-xs_6, 6, var(--gutter_xs))
  @include break-point($bp-sm)
    display: inline-block
    @include grid($breakpoint-sm_6, 6, var(--gutter_sm))
  @include break-point($bp-md)
    display: inline-block
    @include grid($breakpoint-md_6, 6, var(--gutter_md))
  @include break-point($bp-lg)
    display: inline-block
    @include grid($breakpoint-lg_6, 6, var(--gutter_lg))

  //base 4
  @include break-point($bp-xs)
    display: inline-block
    @include grid($breakpoint-xs_4, 4, var(--gutter_xs))
  @include break-point($bp-sm)
    display: inline-block
    @include grid($breakpoint-sm_4, 4, var(--gutter_sm))
  @include break-point($bp-md)
    display: inline-block
    @include grid($breakpoint-md_4, 4, var(--gutter_md))
  @include break-point($bp-lg)
    display: inline-block
    @include grid($breakpoint-lg_4, 4, var(--gutter_lg))


</style>