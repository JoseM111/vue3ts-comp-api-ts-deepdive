/** timeline-post.composable.ts */
import { ref } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useTimelinePostHook = () => {
	//☰☰☰☰☰☰☰☰☰☰
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
	
	return { titleStyle, timelineContainerStyle, dateStyle }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
