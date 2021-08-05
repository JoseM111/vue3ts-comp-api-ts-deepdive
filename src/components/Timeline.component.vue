<!-- TimelineComponent.vue -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { thisMonth, thisWeek, today } from "@/data/post.data"
import moment from "moment"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type PeriodType = string | 'Today' | 'This Week' | 'This Month'

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent({
  name: 'TimelineComponent',
  props: {
    periods: {
      type: Array as () => Array<string>,
      required: false,
      default: [ 'Today', 'This Week', 'This Month' ]
    }
  },
  //: Composition api: setup
  setup: () => {
    //☰☰☰☰☰☰☰☰☰☰
    const postDates = [ today, thisWeek, thisMonth ]
    const currentPeriod = ref<PeriodType>('Today')
    
    /** computed is recalculating all of the ref values */
    const posts = computed(() => {
          //..........
          return postDates.filter((post) => {
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
<!-- 🌀🌀💻================================================= -->

// 🌀🌀💻 HTML 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<template>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
  <nav class="is-primary panel">
    
    <span class="panel-tabs">
      
      <a v-for="period in periods"
         :key="period"
         :class="{ 'is-active' : period === currentPeriod }"
         @click="setPeriod(period)"
      >
        <span style="font-weight: 600;">
          {{ period }}
        </span>
      </a>
      
    </span>
    
    <a v-for="post in posts"
       :key="post.id"
       class="panel-block"
    >
      
      <a style="font: 1.2rem small-caps bold, 'Iceland', sans-serif; color: red">
        {{ post.title }}
      </a>
      
      <div style="font: 1.2rem small-caps bold, 'Iceland',
                  sans-serif; padding-left: 10px;"
      >
        {{ post.created.format('Do MMM') }}
      </div>
      
    </a>
    
  </nav>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
</template>
<!-- 🌀🌀💻================================================ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
<!-- 🌀🌀💻================================================ -->

