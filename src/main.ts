import { createApp } from 'vue'
import App from '@/App.vue'
import axios from "axios"
import { thisMonth, thisWeek, today } from "@/data/post.data"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

function delay(): Promise<unknown> {
	//..........
	return new Promise((res) => {
		setTimeout(res, 2000)
	})
}

// @ts-ignore
axios.get = async (url: string) => {
	//..........
	if ( url === '/posts' ) {
		/* delay function for the <suspense> vue component */
		await delay()
		
		return Promise.resolve({
			data: [ today, thisWeek, thisMonth ]
		})
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const app = createApp(App)
app.mount('#app')
