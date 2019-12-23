<template>
  <div class="container">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
// grid classes
.container
  display: block
  width: 100%

.row
  display: flex
  flex-wrap: wrap
  @include break-point($bp-xs)
    margin-left: calc(var(--gutter_xs) / 2 * -1)
    margin-right: calc(var(--gutter_xs) / 2 * -1)
  @include break-point($bp-sm)
    margin-left: calc(var(--gutter_sm) / 2 * -1)
    margin-right: calc(var(--gutter_sm) / 2 * -1)
  @include break-point($bp-md)
    margin-left: calc(var(--gutter_md) / 2 * -1)
    margin-right: calc(var(--gutter_md) / 2 * -1)
  @include break-point($bp-lg)
    margin-left: calc(var(--gutter_lg) / 2 * -1)
    margin-right: calc(var(--gutter_lg) / 2 * -1)

</style>
