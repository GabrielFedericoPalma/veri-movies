<script lang="ts" setup >
const { registerUser } = useFirebaseAuth()

let mode = ref('sign_in')
let titleMode = ref('Sing In')
let titleSwitch = ref('Create User')
let messageSwitch = ref("Don't you have an account ?")

const switchMode = () => {
    if(mode.value === 'sign_in'){
        mode.value = 'create_user'
        titleMode.value = 'Create User'
        titleSwitch.value = 'Sign In'
        messageSwitch.value = "Do you have an account ?"
    }else{
        mode.value = 'sign_in'
        titleMode.value = 'Sing In'
        titleSwitch.value = 'Create User'
        messageSwitch.value = "Don't you have an account ?"
    }
}

const creds = reactive({
  email: "",
  password: ""
})

async function login() {
    await registerUser(creds.email, creds.password, mode.value)
}

</script>

<template>

    <ClientOnly>
        <Teleport to="body">
            <section class="bg" >
                <form @submit.prevent="login">
                    <h1>Veri-Movies</h1>
                    <h2>{{ titleMode }}</h2>
                    <input type="email" name="email" required v-model="creds.email" >
                    <input type="password" name="password" required v-model="creds.password" >
                    <button type="submit" >{{ titleMode }}</button>
                    <p>
                        {{ messageSwitch }}
                    </p>
                    <p @click="switchMode()" class="switch" >
                        {{ titleSwitch }}
                    </p>
                    <p>
                        <small>v 1.0.2</small>
                    </p>
                </form>
            </section>
        </Teleport>
    </ClientOnly>
    
</template>

<style scoped>
section {display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;}
section.bg {background-image: url('/assets/img/bg.jpg'); background-size: contain; width: 100%; height: 100%; position: fixed; top:0;}
section form {width: 100%; max-width: 20rem; background: rgba(0, 0, 0, 0.863); padding: 2rem 1rem; display: flex; flex-direction: column; justify-content: space-between;}
section form p {text-align: center;  margin:0.5rem}
section form button {cursor: pointer; min-width: 125px; margin-bottom: 1.5rem;}
p.switch {cursor: pointer; text-decoration: underline;}
form h1 {margin-bottom: 0;font-weight: 500;}
form h2 {margin-bottom: 1rem; font-size: 21px; text-align: center;}
form input, form button {padding: 0.5rem; margin: 0.5rem auto; background-color: black; border-radius: 8px; border: 1px solid}
form input {min-width: 245px;}
form button:hover {opacity: 0.8}
p small {font-size: 12px;}
</style>