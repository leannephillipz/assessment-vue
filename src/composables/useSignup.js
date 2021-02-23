import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

const error = ref(null) // global error
const isPending = ref(false)
const feedBack = ref("feedBack")

const signUp = async (email, password, displayName) => {
  // feedBack.value = {email, password, displayName}
  error.value = null
  isPending.value = true


  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)

    if (!res) {
      feedBack.value = "no response"
      throw new Error('Could not complete signup')
    }

    await res.user.updateProfile({ displayName })
    error.value = null
    isPending.value = false
    feedBack.value = "Success"
    // return res
  }
  catch(err) {
    console.log(err.message)
    isPending.value = false
    feedBack.value = "Failed"
    error.value = err.message
  }




  return { feedBack, error, isPending }
}

const useSignup = () => {
  return { signUp, feedBack, error, isPending }
}

export default useSignup
