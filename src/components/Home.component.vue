<!-- @App -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	<!--
	Suspense is a special component that renders a fallback
	content instead of child components until a condition
	is met. This condition is usually async operation
	happening in the components setup function.
	-->
	<suspense>

		<template #default>
			<TimelineComponent />
		</template>

		<template #fallback>
			<SpinnerComponent />
		</template>

	</suspense>
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<script lang="ts">
import SpinnerComponent from "@/components/Spinner.component.vue"
import TimelineComponent from "@/components/timeline/Timeline.component.vue"
import { defineComponent } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent( {
	name: 'App',
	components: {
		TimelineComponent,
		SpinnerComponent,
	},
	//: Composition api: setup
	setup: () => {
		//☰☰☰☰☰☰☰☰☰☰
		
		
		return {}
	},
} )
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->



