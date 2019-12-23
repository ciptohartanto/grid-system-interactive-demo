<template>
  <div class="notif"></div>
</template>

<script>
export default {
  name: 'HelperNotif'
}
</script>

<style lang="sass" scoped>
.notif
  background: rgba(yellow,.8_12)
  position: fixed
  top: 0
  right: 0
  height: 60px
  width: 80px
  z-index: 40
  &:before
    content: 'Break Point is'
    position: absolute
    left: 0
    right: 0
    top: 0
    padding: 4px
    font-size: px2rem(13px)
  &:after
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 30px
    text-align: center
    font-weight: 600
    @include break-point($bp-xs)
      content: 'XS'
    @include break-point($bp-sm)
      content: 'SM'
    @include break-point($bp-md)
      content: 'MD'
    @include break-point($bp-lg)
      content: 'LG'
</style>