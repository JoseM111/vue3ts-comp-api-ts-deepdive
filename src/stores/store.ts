/* store.ts */
import { PostType } from '@/types/Post.type'
import { reactive, readonly } from 'vue'
import axios from 'axios'
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

const allPostMap = new Map<string, PostType>()
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const store = new Store({
    posts: {
        allPosts: allPostMap,
        ids: [],
        loaded: false,
    },
})

// Composable function to access the store through out the app
export function useStore(): Store {
    return store
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
