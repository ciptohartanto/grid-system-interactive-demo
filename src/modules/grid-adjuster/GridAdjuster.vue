<template>
  <select class="gridAdjuster" @change="_comboGetGridValue_CheckBox" v-model="gridValue">
    <option>4</option>
    <option>6</option>
    <option>8</option>
    <option>12</option>
  </select>
</template>
<script>
import { EventBus } from "@/event-bus";

export default {
  name: "GridAdjuster",

  data: function() {
    return {
      gridValue: 12,
      shadowStat: false
    };
  },
  methods: {
    _getGridValue: function() {
      EventBus.$emit("received:gridValue", this.gridValue);
    },
    _turnOnCheckbox: function() {
      this.shadowStat = true;
      EventBus.$emit("updated:checkBoxOnFromGridAdjuster", this.shadowStat);
      document.querySelector("[data-checkbox]").checked = true;
    },
    _comboGetGridValue_CheckBox: function() {
      this._getGridValue();
      this._turnOnCheckbox();
    }
  }
};
</script>
<style lang="sass" scoped>

</style>