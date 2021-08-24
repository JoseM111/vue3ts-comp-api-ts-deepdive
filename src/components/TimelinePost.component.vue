<!-- @TimelinePostComponent -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<template>
  <a :key="post.id"
     class="panel-block"
  >
    <div :class="timelineContainerStyle">

      <!--⚫️ Post-Title ⚫️-->
	    <span :style="titleStyle">
		    <a>{{ post.title }}</a>
	    </span>
      <!--⚫️ Post-Date ⚫️-->
	    <div>
		    <span :style="dateStyle">
			    {{ post.created.format('Do MMM') }}
		    </span>
	    </div>

    </div>

  </a>
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script lang="ts">
import { PostType } from "@/types/Post.type"
import { defineComponent } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent( {
	name: 'TimelinePostComponent',
	props: {
		post: {
			type: Object as () => PostType,
			required: true,
		}
	},
	// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
	setup() {
		//☰☰☰☰☰☰☰☰☰☰
		const titleStyle = {
			color: 'dodgerblue',
			font: '1.2rem bold, ' +
				'Goldman, sans-serif',
		}
		
		const timelineContainerStyle = `
			is-flex
			is-flex-direction-column
			is-align-items-flex-start
		`
		
		const dateStyle = {
			color: "red",
			font: "1.2rem bold, 'Goldman', sans-serif",
		}
		
		return {
			titleStyle,
			timelineContainerStyle,
			dateStyle
		}
	}
} )
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
