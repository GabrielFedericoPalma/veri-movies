const { authState } = useFirebaseAuth()

export default defineNuxtRouteMiddleware(() => {
   
    (async function() {
        const ok = await authState()
        if(ok){
            return navigateTo('/')
        }else {
            return navigateTo('/login')
        }
    })()
    
})