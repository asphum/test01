<template>
  <div>
    <div class=""><Menu /></div>
    <div class="container"><nuxt /></div>
    <div class=""><Foot /></div>
  </div>
</template>
<script>
import Menu from '~/components/Menu.vue'
import Foot from '~/components/Foot.vue'
export default {
  components: {
    Menu,
    Foot
  }
}
</script>
