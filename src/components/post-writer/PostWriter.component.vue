<!-- @PostWriter.component.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
<script setup lang="ts">
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
import { usePostWriterHook } from "@/components/post-writer/composables/post-writer.composable"
import { PostType } from "@/types/Post.type"
import highlight from 'highlight.js'
import debounce from 'lodash/debounce'
import { parse } from "marked"
import { onMounted, ref, watch } from 'vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const props = defineProps<{
	post: PostType
}>()

const emit = defineEmits<{
	(event: 'savePost', newPost: PostType): void
}>()
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
const { post } = props
const title = ref<PostType['title']>(post.title)
const { content, html, contentEditable } = usePostWriterHook()

// console.log('html tag:', html.value)

// Will be undefined on the first render because setup
// will be called first before the component has been mounted
console.log('[ contentEditable\'s value ]:', contentEditable.value)
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ component-functions ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀

/**☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
 * @watch:
 *  watch requires watching a specific data source and applies
 *  side effects in a separate callback function. It also is lazy
 *  by default - i.e. the callback is only called when the watched
 *  source has changed.
 *
  watch(content, (newContent: string) => {
		//..........
		html.value = parse(newContent)
		console.log('watch:', html.value)
	},
		{ immediate: true }
	)
 * ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */

/**☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
 * @watchEffect:
 * Runs a function immediately while reactively tracking its
 * dependencies and re-runs it whenever the dependencies are changed.
	watchEffect(() => {
		//..........
		html.value = parse(content.value, {
			gfm: true,
			breaks: true,
			highlight: (code: string) => (
				// .value from highlight.js not ref()
				highlight.highlightAuto(code).value
			)
		})
		// console.log('watch:', html.value)
	})
 *** ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ */

const parseHtml = (value: string) => {
	//..........
	html.value = parse(value, {
		gfm: true,
		breaks: true,
		highlight: (code: string) => (
			// .value from highlight.js not ref()
			highlight.highlightAuto(code).value
		)
	})
}

// Makes the text editor responsive and will
// render more smoothly when adding markdown
watch(content, debounce((newValue: string) => (
			parseHtml(newValue)
		), 250
	), { immediate: true }
)

const handleInput = () => {
	//..........
	if ( !contentEditable.value ) throw Error('Value not defined')
	content.value = contentEditable.value.innerText || ''
}

// Runs when the component is mounted. Not when the component
// is rendered. Which means contentEditable.value will no
// longer be undefined
onMounted(() => {
	//..........
	contentEditable.value!!.textContent = content.value
	console.log('[ contentEditable\'s value ]:', contentEditable.value)
})

const savePost = (): void => {
	//..........
	// 1. creating a new post interface
	const newPost: PostType = {
		...props.post,
		html: html.value,
		title: title.value,
		markdown: content.value
	}
	// 2. emitting an event
	emit('savePost', newPost)
}
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
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
			</div>
		</div>
	</div>
  <!-- ⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ -->
	<div class="columns">
		<div class="column">
			<!-- @contenteditable:
				   - a global attribute  is an enumerated attribute indicating if
				     the element should be editable by the user. If so, the browser
				     modifies its widget to allow editing. The attribute must take
				     one of the following values:
				      • true or an empty string, which indicates that the
				        element is editable.
				      • false, which indicates that the element is not editable.
				 -->
			<div contenteditable ref="contentEditable"
			     @input="handleInput"
			     style="border-radius: 8px;" />
			<!-- @ref: is a template ref, to get ⬆️ a reference from a dom element -->
		</div>
		
		<div class="column">
			<div v-html="html" />
		</div>
		
		<div class="columns">
			<div class="column">
				<button class="button is-primary is-pulled-right"
				@click="savePost"
				>
					Submit
				</button>
			</div>
		</div>
		
	</div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<style>
.column {
	overflow-y: scroll;
}
</style>
