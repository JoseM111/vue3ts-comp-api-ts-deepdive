/* store.ts */
import { PostType } from '@/types/Post.type'
import { reactive, readonly } from 'vue'
import axios from 'axios'
import { today, thisWeek, thisMonth } from '@/data/post.data'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

interface IPostsState {
    // o(n)
    ids: string[]
    // o(1)
    // posts.get(1) => {...}
    allPosts: Map<string, PostType>
    // Checks if we loaded all of 
    // our state to the server
    loaded: boolean
}

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

interface State {
    posts: IPostsState
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

class Store {
    //: - ©MEMBER-PROPERTIES|
    private readonly state: State

    // ⚫️⚫️☰☰☰☰ constructor ☰☰☰☰⚫️⚫️
    constructor(initialState: State) {
        this.state = reactive(initialState)
    }

    // ⚫️⚫️☰☰☰☰ member methods ☰☰☰☰⚫️⚫️
    getState() {
        return readonly(this.state)
    }
    
    async fetchPosts(): Promise<void> {
        const response = await axios.get<PostType[]>('/posts')
        const postsState: IPostsState = {
            ids: [],
            allPosts: new Map(),
            loaded: false
        }
        
        for (const post of response.data) {
            postsState.ids.push(post.id)
            postsState.allPosts.set(post.id, post)
        }
        
        // By passing our state.posts to our local
        // postsState, it will only rerender the dom once
        this.state.posts = postsState
    }
}

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const allPosts = new Map<string, PostType>()

allPosts.set(today.id, today)
allPosts.set(thisWeek.id, thisWeek)
allPosts.set(thisMonth.id, thisMonth)
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const store = new Store({
    posts: {
        allPosts,
        ids: [today.id, thisWeek.id, thisMonth.id],
        loaded: false,
    },
})

// Composable function to access the store through out the app
export function useStore(): Store {
    return store
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰