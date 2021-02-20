<!-- <template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'


// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
      const router = useRouter()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(route.params.id)

    load()

    const handleClick = async () => {
      await projectFirestore.collection('posts')
      .doc(props.id)
      .delete()

        router.push({ name: 'Home' })
    }


    return { error, post, handleClick }
  },
}
</script>

<style scoped>

</style> -->
