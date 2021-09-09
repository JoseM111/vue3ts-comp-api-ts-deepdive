<!-- @Timeline.component.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<script lang="ts">
import { PeriodType, useTimelineHook } from "@/components/timeline/composables/timeline.composable"
import TimelinePostComponent from "@/components/timeline/TimelinePost.component.vue"
import { PostType } from "@/types/Post.type"
import moment from "moment"
import { computed, defineComponent, ref } from "vue"
// import { thisMonth, thisWeek, today } from "@/data/post.data"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent({
	name: 'TimelineComponent',
	components: { TimelinePostComponent },
	// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
	async setup() {
		//☰☰☰☰☰☰☰☰☰☰
		const periods = ref<PeriodType[]>([ 'Today', 'This Week', 'This Month' ])
		const { currentPeriod, allPosts } = await useTimelineHook()
		
		/** computed is recalculating all of the ref values */
		const posts = computed<PostType[]>(() => {
			//..........
			return allPosts.filter((post: PostType) => {
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
		})
		
		function setPeriodOnClicked(period: PeriodType): void {
			currentPeriod.value = period
		}
		
		return { periods, posts, currentPeriod, setPeriodOnClicked }
	}
})
</script>
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
				@click="setPeriodOnClicked(period)"
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

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">

</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->


