<!-- @TimelinePostComponent -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<template>
  <a :key="post.id"
     class="panel-block"
  >
    <div class="is-flex is-flex-direction-column is-align-items-flex-start">

      <!--⚫️ Post-Title ⚫️-->
      <span style="
        color: dodgerblue;
         font: 1.2rem bold, 'Goldman', sans-serif;">
      <a>{{ post.title }}</a>
      </span>
      <!--⚫️ Post-Date ⚫️-->
      <div>
        <span style="
        color: red;
         font: 1.2rem bold, 'Goldman', sans-serif;">
          {{ post.created.format('Do MMM') }}
        </span>
      </div>

    </div>

  </a>
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<script lang="ts">
import { defineComponent } from 'vue'
import { PostType } from "@/types/Post.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default defineComponent({
  name: 'TimelinePostComponent',
  props: {
    post: {
      type: Object as () => PostType,
      required: true,
    }
  },
})
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
