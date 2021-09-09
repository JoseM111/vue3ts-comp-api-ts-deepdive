/** post-writer.composable.ts */
import { ref } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const usePostWriterHook = () => {
	//☰☰☰☰☰☰☰☰☰☰
	const content = ref<string>('## Title\nEnter your post content')
	const html = ref('')
	const contentEditable = ref<HTMLDivElement | undefined>(undefined)
	
	return { content, html, contentEditable }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
