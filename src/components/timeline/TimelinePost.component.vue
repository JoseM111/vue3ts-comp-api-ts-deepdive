<!-- @TimelinePostComponent -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script setup lang="ts">
import { useTimelinePostHook } from "@/components/timeline/composables/timeline-post.composable"
import { PostType } from "@/types/Post.type"
import { defineProps } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const props = defineProps<{
	post: PostType
}>()
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const { titleStyle, timelineContainerStyle, dateStyle } = useTimelinePostHook()
const { post } = props

</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<template>
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
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
	<!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
