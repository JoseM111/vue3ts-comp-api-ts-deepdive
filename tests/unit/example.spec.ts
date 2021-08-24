/* example.spec.ts */
import { flushPromises, mount } from "@vue/test-utils"
import TimelineComponent from '@/components/timeline/Timeline.component.vue'
import { thisMonth, thisWeek, today } from "@/data/post.data";
// import { nextTick } from "vue"
import { PostType } from "@/types/Post.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type DescriptionWithTrigger = { desc: string, getTrigger: string }
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

jest.mock('axios', () => ({
	get: (_: string) => {
		return Promise.resolve({
			data: [ today, thisWeek, thisMonth ]
		})
	}
}))

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

function mountTimeline() {
	//..........
	return mount({
		components: { TimelineComponent },
		template: `
		  <suspense>
		  <template #default>
		    <TimelineComponent />
		  </template>
		  <template #fallback>
		    Loading...
		  </template>
		  </suspense>
		`
	})
}

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
const testOnlyWithTrigger = ({ desc, getTrigger }: DescriptionWithTrigger,
	{ post }: { post: PostType }): void => {
	//..........
	// it.only skips other test
	it(desc, async () => {
		//..........
		const wrapper = mountTimeline()
		// By adding the await to the wrapper, it will return nextTick automatically
		await wrapper.get(getTrigger).trigger('click')
		
		// We have to wait or the next animation frame for the test to pass
		// await nextTick()
		
		expect(wrapper.html())
			.toContain(post.created.format('Do MMM'))
	})
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
/* Test */
describe('TimelineComponent', () => {
	//..........
	it('should render today post default', async () => {
		//..........
		const wrapper = mountTimeline()
		
		await flushPromises()
		console.log(wrapper.html())
		
		expect(wrapper.html())
			.toContain(today.created.format('Do MMM'))
	})
	
	testOnlyWithTrigger({
			desc: 'should update when the this week is clicked',
			getTrigger: '[data-test="This Month"]'
		}, { post: thisWeek }
	)
	testOnlyWithTrigger({
			desc: 'should update when the this month is clicked',
			getTrigger: '[data-test="This Month"]'
		}, { post: thisMonth }
	)
	
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

