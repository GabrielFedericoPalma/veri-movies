const { authState, user } = useFirebaseAuth()

export default defineNuxtRouteMiddleware(() => {
   
    (async function() {
        await authState()
        if(user){
            return navigateTo('/')
        }else {
            return navigateTo('/login')
        }
    })()
    
})