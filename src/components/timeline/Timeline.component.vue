<!-- @Timeline.component.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
    <nav class="is-primary panel">
<!---->
    <span
	    class="panel-tabs"
	    style="font: small-caps 1.1rem bold, 'Krona One', sans-serif;">

      <!--suppress HtmlUnknownAttribute -->
      <a
	      v-for="period in periods"
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
import { extractedUtilsStore, PeriodType } from "@/components/timeline/Timeline.utils"
import TimelinePostComponent from "@/components/TimelinePost.component.vue"
// import { thisMonth, thisWeek, today } from "@/data/post.data"
import moment from "moment"
import { computed, defineComponent } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
export default defineComponent( {
	name: 'TimelineComponent',
	components: {
		TimelinePostComponent,
	},
	props: {
		periods: {
			type: Array as () => Array<PeriodType>,
			required: false,
			default: [ 'Today', 'This Week', 'This Month' ]
		}
	},
	//: Composition api: setup
	setup: async () => {
		//☰☰☰☰☰☰☰☰☰☰
		const { currentPeriod, allPosts } = await extractedUtilsStore()
		
		/** computed is recalculating all of the ref values */
		const posts = computed( () => {
				//..........
				return allPosts.filter( (post) => {
					//..........
					switch ( currentPeriod.value ) {
						case 'Today':
							return post.created.isAfter( moment().subtract( 1, 'day' ) )
						case 'This Week':
							return post.created.isAfter( moment().subtract( 1, 'week' ) )
						case 'This Month':
							return post.created.isAfter( moment().subtract( 1, 'month' ) )
					}
					
					return false
				} )
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
} )
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">

</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->


