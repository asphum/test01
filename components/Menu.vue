<template>
  <div>
    <div id="mainmenu">
      <div class="container">
        <nuxt-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="menulink hidden-sm"
        >
          <i :class="item.icon"></i
          >{{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
#mainmenu {
  background-color: #323232;
  color: #fff;
  padding: 5px;
  z-index: 100;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.menulink {
  color: #fff !important;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 5px 10px;
  display: inline-block;
  transition: 0.3s;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
  margin: 5px;
}
.menuicon {
  color: #fff !important;
  margin-right: 5px !important;
}
.menulink:hover,
.nuxt-link-exact-active {
  background-color: #eb622c;
  border-radius: 4px;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'menuicon fas fa-home',
          title: 'หน้าแรก',
          to: '/'
        },
        {
          icon: 'menuicon fas fa-book',
          title: 'เอกสาร',
          to: '/docs'
        },
        {
          icon: 'menuicon fas fa-headphones',
          title: 'เสียง',
          to: '/audios'
        },
        {
          icon: 'menuicon fas fa-image',
          title: 'รูปภาพ',
          to: '/photos'
        },
        {
          icon: 'menuicon fas fa-film',
          title: 'วิดีโอ',
          to: '/videos'
        },
        {
          icon: 'menuicon fas fa-gamepad',
          title: 'เกม',
          to: '/games'
        },
        {
          icon: 'menuicon fas fa-pen-alt',
          title: 'เว็บบอร์ด',
          to: '/boards'
        },
        {
          icon: 'menuicon fas fa-shopping-bag',
          title: 'สินค้า',
          to: '/products'
        },
      ]
    };
  }
};
</script>
