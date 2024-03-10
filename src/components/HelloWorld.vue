<script>
export default {
  beforeCreate(){
    document.querySelector('body').setAttribute('style', 'background-color: #282828')
  },
  data() {
    return {
      msg: 'Hello World',
      content: 'This my frist vue.',
      profile: '<a href="https://github.com/touero" target="_blanck" style="color: #458588">click here go to</a>',
      gClass: 'gclass',
      isClick: false,
      notClick: true,
    }
  }
}
</script>

<template>
  <h1 v-bind:class="gClass">Hello World</h1>
  <div :class="gClass">This my frist vue.</div>
  <p v-html="profile"></p>
  <button :disabled="isClick">ableClick</button>
  <button :disabled="notClick">enableClick</button>
</template>

<style>
.gclass{
  color: gray;
}
</style>