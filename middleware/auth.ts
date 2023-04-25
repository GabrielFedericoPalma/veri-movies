const { authState } = useFirebaseAuth()

export default defineNuxtRouteMiddleware(() => {
   
    (async function() {
        const user = await authState()
        if(user){
            return navigateTo('/')
        }else {
            return navigateTo('/login')
        }
    })()
    
})