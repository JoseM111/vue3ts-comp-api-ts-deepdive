<!-- @Timeline.component.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
    <nav class="is-primary panel">
<!---->
    <span class="panel-tabs"
          style="font: small-caps 1.1rem bold, 'Krona One', sans-serif;">

      <!--suppress HtmlUnknownAttribute -->
      <a v-for="period in periods"
         :key="period"
         :class="{ 'is-active': period === currentPeriod }"
         :data-test="period"
         @click="setPeriod(period)"
      >
        {{ period }}
      </a>

    </span>

<!--⚫️ TimelinePostComponent ⚫️-->
    <TimelinePostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="panel-block"
    />

  </nav>

  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TimelinePostComponent from "@/components/TimelinePost.component.vue"
// import { thisMonth, thisWeek, today } from "@/data/post.data"
import moment from "moment"
import { useStore } from '@/stores/store'
import { PostType } from '@/types/Post.type'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type PeriodType = string | 'Today' | 'This Week' | 'This Month'

function delay(): Promise<unknown> {
  //..........
  return new Promise((res) => {
    setTimeout(res, 2000)
  })
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent({
  name: 'TimelineComponent',
  components: {
    TimelinePostComponent,
  },
  props: {
    periods: {
      type: Array as () => Array<string>,
      required: false,
      default: [ 'Today', 'This Week', 'This Month' ]
    }
  },
  //: Composition api: setup
  setup: async () => {
    //☰☰☰☰☰☰☰☰☰☰
    /* delay function for the <suspense> vue component */
    await delay()
    
    const store = useStore()
    // const postDates = [ today, thisWeek, thisMonth ]
    const currentPeriod = ref<PeriodType>('Today')

    const { ids } = store.getState().posts
    const allPosts: PostType[] = ids.reduce<PostType[]>((accumulator, id) => {
      //___________
      const posts = store.getState().posts.allPosts.get(id)
      
      if (!posts) throw new Error('This post was not found')
      
      /* The concat() method is used to merge two or more arrays.
         This method does not change the existing arrays, but
         instead returns a new array. */
      return accumulator.concat(posts)
    }, [])

    /** computed is recalculating all of the ref values */
    const posts = computed(() => {
          //..........
          return allPosts.filter((post) => {
            //..........
            switch ( currentPeriod.value ) {
              case 'Today':
                return post.created.isAfter(moment().subtract(1, 'day'))
              case 'This Week':
                return post.created.isAfter(moment().subtract(1, 'week'))
              case 'This Month':
                return post.created.isAfter(moment().subtract(1, 'month'))
            }

            return false
          })
        }
    )

    function setPeriod(period: PeriodType): void {
      currentPeriod.value = period
    }

    return {
      posts,
      setPeriod,
      currentPeriod,
    }
  },
})
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">

</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->


