/** Timeline.utils.ts */
import { useStore } from "@/stores/store"
import { PostType } from "@/types/Post.type"
import { ref } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type PeriodType = 'Today' | 'This Week' | 'This Month'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useUtilsStore = async () => {
	//☰☰☰☰☰☰☰☰☰☰
	const store = useStore()
	// const postDates = [ today, thisWeek, thisMonth ]
	const currentPeriod = ref<PeriodType>( 'Today' )
	
	if ( !store.getState().posts.loaded ) await store.fetchPosts()
	
	const { ids } = store.getState().posts
	
	const allPosts: PostType[] = ids.reduce<PostType[]>( (accumulator, id) => {
		//___________
		const posts = store.getState().posts.allPosts.get( id )
		
		if ( !posts ) throw new Error( 'This post was not found' )
		
		/* The concat() method is used to merge two or more arrays.
		 This method does not change the existing arrays, but
		 instead returns a new array. */
		return accumulator.concat( posts )
	}, [] )
	return { currentPeriod, allPosts }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
