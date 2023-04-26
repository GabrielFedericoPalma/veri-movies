import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, onAuthStateChanged} from 'firebase/auth'

export default function() {

    const { $auth } = useNuxtApp()
    const user = useState<User | null>("fb_user", () => null)
    const router = useRouter()

    const logout = () => {
        signOut($auth).then(() => {
            user.value = null
            router.push('/login')
        }).catch((error) => {
            alert(error.message)
        });
    }

    const authState = () => {
        return new Promise((resolve, reject) => {
          onAuthStateChanged($auth, usr => {
                user.value = usr            
                resolve(usr)
          }, e => reject(e));
        })
    }

    const registerUser = async (email: string, password: string, mode: string): Promise<boolean> => {

        try {
            let userCreds = null
            if(mode === 'create_user'){
                userCreds = await createUserWithEmailAndPassword($auth, email, password)
            }else{
                userCreds = await signInWithEmailAndPassword($auth, email, password)
            }
            
        if (userCreds) {
            user.value = userCreds.user
            router.push('/')
            return true
        }
        } catch (error: unknown) {
        if (error instanceof Error) {
            // handle error
            alert(error.message)
            
        }
        return false
        }
        return false

    }

    return {
        user,
        registerUser,
        logout,
        authState
    }
}