<template>
  <div class="popup" :class="{'popup--active': isPopupOpen}">
    <div class="popup-body">
      <knob
        class="popup-close"
        text="X"
        :knobtag="knobTag"
        :knobsize="knobSize"
        :knobstyle="knobStyle"
        @click.native="_closePopup"
      />
      <form>
        <div class="popup-title">
          <typography
            :typotag="popupTitleTag"
            :typoclass="popupTitleClass"
            :text="popupTitleText1"
          />
        </div>
        <div class="popup-list">
          <div class="popup-item">
            <input type="checkbox" data-checkbox @click="_toggleCheckbox" />
            <label>Show Grid</label>
          </div>
        </div>

        <div class="popup-title">
          <typography
            :typotag="popupTitleTag"
            :typoclass="popupTitleClass"
            :text="popupTitleText2"
          />
        </div>
        <div class="popup-list">
          <div class="popup-item">
            <label class="popup-text--xs">Gutter XS</label>
            <input
              v-model="xs_val"
              class="popup-range"
              type="range"
              min="0"
              max="20"
              @input="_comboCSS_Checkbox('xs')"
            />
            <typography
              :typotag="popupSliderItemTag"
              :typoclass="popupSliderItemClass"
              :text="xs_val + ' px'"
            />
          </div>
          <div class="popup-item">
            <label class="popup-text--sm">Gutter SM</label>
            <input
              v-model="sm_val"
              class="popup-range"
              type="range"
              min="0"
              max="30"
              @input="_comboCSS_Checkbox('sm')"
            />
            <typography
              :typotag="popupSliderItemTag"
              :typoclass="popupSliderItemClass"
              :text="sm_val + ' px'"
            />
          </div>
          <div class="popup-item">
            <label class="popup-text--md">Gutter MD</label>
            <input
              v-model="md_val"
              class="popup-range"
              type="range"
              min="0"
              max="40"
              @input="_comboCSS_Checkbox('md')"
            />
            <typography
              :typotag="popupSliderItemTag"
              :typoclass="popupSliderItemClass"
              :text="md_val + ' px'"
            />
          </div>
          <div class="popup-item">
            <label class="popup-text--lg">Gutter LG</label>
            <input
              v-model="lg_val"
              class="popup-range"
              type="range"
              min="0"
              max="50"
              @input="_comboCSS_Checkbox('lg')"
            />
            <typography
              :typotag="popupSliderItemTag"
              :typoclass="popupSliderItemClass"
              :text="lg_val + ' px'"
            />
          </div>
        </div>

        <div class="popup-title">
          <typography
            :typotag="popupTitleTag"
            :typoclass="popupTitleClass"
            :text="popupTitleText3"
          />
        </div>
        <div class="popup-list">
          <div class="popup-item">
            <grid-adjuster />
            <typography
              class="popup-optionText"
              :typotag="popupSliderItemTag"
              :typoclass="popupSliderItemClass"
              text="grids in a row"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Typography from "./../../components/Typography.vue";
import Knob from "./../knobs/Knob.vue";
import GridAdjuster from "./../grid-adjuster/GridAdjuster.vue";
import {
  TYPO_TAGS_CLASSES,
  KNOB_TAGS,
  KNOB_CLASSES
} from "./../../components/Constants.js";
import { EventBus } from "@/event-bus";
const BREAKPOINTS = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg"
};

export default {
  name: "Popup",
  components: {
    Typography,
    Knob,
    GridAdjuster
  },
  data() {
    return {
      xs_val: 10,
      sm_val: 10,
      md_val: 15,
      lg_val: 20,
      shadowStat: false,
      isPopupOpen: true
    };
  },
  props: {
    popupTitleText1: {
      type: String,
      default: "Show Grid"
    },
    popupTitleText2: {
      type: String,
      default: "Gutter Settings"
    },
    popupTitleText3: {
      type: String,
      default: "Grid Settings"
    },
    popupTitleTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.TITLE.TAG
    },
    popupTitleClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.TITLE.CLASS
    },
    popupSliderItemTag: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.MINOR.TAG
    },
    popupSliderItemClass: {
      type: String,
      default: TYPO_TAGS_CLASSES.SECONDARY.MINOR.CLASS
    },
    knobTag: {
      type: String,
      default: () => KNOB_TAGS.TEXT
    },
    knobStyle: {
      type: String,
      default: () => KNOB_CLASSES.BANNER.TINY.NEUTRAL
    },
    knobSize: {
      type: String,
      default: () => KNOB_CLASSES.BANNER.TINY.CLASS
    },
    bp_xs: {
      type: String,
      default: () => BREAKPOINTS.XS
    },
    bp_sm: {
      type: String,
      default: () => BREAKPOINTS.SM
    },
    bp_md: {
      type: String,
      default: () => BREAKPOINTS.MD
    },
    bp_lg: {
      type: String,
      default: () => BREAKPOINTS.LG
    }
  },
  methods: {
    _closePopup: function() {
      this.isPopupOpen = false;
    },
    _doCSS: function(breakpoint) {
      let xs_val = this.xs_val;
      let sm_val = this.sm_val;
      let md_val = this.md_val;
      let lg_val = this.lg_val;
      if (breakpoint === BREAKPOINTS.XS) {
        document.documentElement.style.setProperty(
          "--gutter_xs",
          xs_val + "px"
        );
      } else if (breakpoint === BREAKPOINTS.SM) {
        document.documentElement.style.setProperty(
          "--gutter_sm",
          sm_val + "px"
        );
      } else if (breakpoint === BREAKPOINTS.MD) {
        document.documentElement.style.setProperty(
          "--gutter_md",
          md_val + "px"
        );
      } else {
        document.documentElement.style.setProperty(
          "--gutter_lg",
          lg_val + "px"
        );
      }
    },
    _toggleCheckbox: function() {
      this.shadowStat = !this.shadowStat;
      EventBus.$emit("toggleCheckbox", this.shadowStat);
    },
    _turnOnCheckbox: function() {
      this.shadowStat = true;
      EventBus.$emit("checkBoxIsOn", this.shadowStat);
      document.querySelector("[data-checkbox]").checked = true;
    },
    _comboCSS_Checkbox: function(breakpoint) {
      this._doCSS(breakpoint);
      this._turnOnCheckbox();
    }
  },
  created: function() {
    EventBus.$on("updated:checkBoxOnFromGridAdjuster", data => {
      this.shadowStat = data; // true
    });
  }
};
</script>
<style lang="sass" scoped>
.popup
  display: none
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(black,.7)
  z-index: 30
  text-align: left
  &--active
    display: flex
    justify-content: center
    align-items: center

  &-body
    width: 30%
    min-width: 320px
    background-color: white
    border-radius: 14px
    padding: 20px
    position: relative
  &-item
    display: flex
    justify-content: flex-start
    align-items: center
  &-range
    margin-left: 20px
    margin-right: 20px
  &-close
    position: absolute
    right: 20px
    top: 20px
  &-list
    margin-bottom: 20px
  &-optionText
    margin-left: 10px
  &-text
    &--xs
      @include break-point($bp-xs)
        background-color: yellow
        color: black
        font-weight: 600
    &--sm
      @include break-point($bp-sm)
        background-color: yellow
        color: black
        font-weight: 600
    &--md
      @include break-point($bp-md)
        background-color: yellow
        color: black
        font-weight: 600
    &--lg
      @include break-point($bp-lg)
        background-color: yellow
        color: black
        font-weight: 600
</style>