/** router.ts */
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/Home.component.vue'
import NewPostComponent from '@/components/NewPost.component.vue'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰


export const router = createRouter( {
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/posts/new', component: NewPostComponent },
	]
} )
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
