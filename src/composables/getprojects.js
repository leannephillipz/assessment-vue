import { ref } from 'vue'

const getProjects = () => {

  const projects = ref([])
  const error = ref(null)

  const load = async () => {
    try {


      let data = await fetch('http://localhost:3000/projects')
      if(!data.ok) {
        throw Error('no available data')
      }
      projects.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }
    console.log(projects, error);

  return { projects, error, load }
}

export default getProjects
