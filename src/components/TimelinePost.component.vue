<!-- @TimelinePostComponent -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script setup lang="ts">
import { PostType } from "@/types/Post.type"
import { ref } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const props = defineProps<{
	post: PostType
}>()

const { post } = props


const titleStyle = ref({
	color: 'dodgerblue',
	font: '1.2rem bold, ' +
		'Goldman, sans-serif',
})

const timelineContainerStyle = ref(`
			is-flex
			is-flex-direction-column
			is-align-items-flex-start
		`)

const dateStyle = ref({
	color: "red",
	font: "1.2rem bold, 'Goldman', sans-serif",
})
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
