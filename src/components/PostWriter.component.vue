<!-- @PostWriter.component.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	<div class="columns">
		<div class="column">
			<div class="field">
				<!--☰☰☰☰| New-Post Label |☰☰☰☰-->
				<div class="label">New Post</div>
				
				<!--☰☰☰☰| Input |☰☰☰☰-->
				<!-- @v-model:
						 - directive to create two-way data bindings on form input,
						   textarea, and select elements. It automatically picks the
						   correct way to update the element based on the input type.
						   Although a bit magical, v-model is essentially syntax sugar
						   for updating data on user input events, plus special care
						   for some edge cases.
				-->
				<input v-model="title"
				       type="text"
				       class="input"
				>
				
				<!-- @contenteditable:
				   - a global attribute  is an enumerated attribute indicating if
				     the element should be editable by the user. If so, the browser
				     modifies its widget to allow editing. The attribute must take
				     one of the following values:
				      • true or an empty string, which indicates that the
				        element is editable.
				      • false, which indicates that the element is not editable.
				 -->
				<div contenteditable  ref="contentEditable"/>
				<!-- @ref: is a template ref, to get ⬆️ a reference from a dom element -->
				
				{{ title }}
			</div>
		</div>
	</div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<script lang="ts">
import { PostType } from "@/types/Post.type"
import { defineComponent, onMounted, PropType, ref } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent( {
	name: 'PostWriterComponent',
	// components: { },
	// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ props ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
	props: {
		post: {
			type: Object as PropType<PostType>,
			required: true,
		}
	},
	// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
	setup(props) {
		//☰☰☰☰☰☰☰☰☰☰
		const title = ref( props.post.title )
		const content = ref<string>( '' )
		const contentEditable = ref(undefined)
		
		// Will be undefined on the first render because setup
		// will be called first before the component has been mounted
		console.log( '[ contentEditable\'s value ]:', contentEditable.value )
		// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ component-functions ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
		
		// Runs when the component is mounted. Not when the component
		// is rendered. Which means contentEditable.value will no
		// longer be undefined
		onMounted(() => {
			console.log( '[ contentEditable\'s value ]:', contentEditable.value )
		})
		
		return {
			title,
			content,
			contentEditable,
		}
	}
} )
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

