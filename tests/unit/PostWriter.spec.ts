/* PostWriter.spec.ts */
import PostWriterComponent from '@/components/post-writer/PostWriter.component.vue'
import { mount } from "@vue/test-utils"
// import { nextTick } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

/* Test */
describe('PostWriterComponent', () => {
	//..........
	it('should emit a save event with a new post', async () => {
		//..........
		const wrapper = mount(PostWriterComponent, {
			props: {
				post: {
					title: 'New Title'
				}
			}
		})
		
		await wrapper.find('[data-test="title"]')
		.setValue('My new title')
		await wrapper.find('[data-test="submit"]')
		.trigger('click')
		
		const emitted = wrapper.emitted().savePost as any [0][0]
		console.log('emitted:', emitted)
		
		expect(emitted.title)
		.toBe('My new title')
		
	})
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

