<template>
  <div>
    <h4>หน้าแรก</h4>
    <div class="row no-gutters">
      <a
        v-for="post in posts"
        :key="post.id"
        :href="post.url"
        class="col-3 cover-img"
      >
        <img class="img-fluid" :src="post.thumbnailUrl" :alt="post.title" />
        <h6 class="m-3 text-truncate">
          {{ post.title }}
        </h6>
      </a>
    </div>

    <nav>
      <ul class="pagination justify-centent-center">
        <li v-for="(key, value) in links" class="page-item">
          <a @click="loadMore(key)" href="#" class="page-link">{{ value }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      links: []
    }
  },
  methods: {
    loadMore(key) {
      console.log(key)
    }
  },

  async asyncData({ $axios }) {
    let { data, links } = await $axios.get(
      "../api/server.js"
    )
    console.log(links)
    return {
      posts: data,
      links
     };
  },
  head: {
    title: "หน้าแรก"
  }
};
</script>
