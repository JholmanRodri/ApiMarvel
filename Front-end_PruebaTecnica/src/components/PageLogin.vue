<template>
    <div>
    <form @submit.prevent="submitForm">
      <label for="username">Nombre de usuario</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Contraseña</label>
      <input type="password" id="password" v-model="password">
      <button type="submit" @click="login()">Iniciar sesión</button>
    </form>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        return {
            correo: "",
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            }
        }
    },
    methods: {
        login() {
            this.valido = this.correo.toUpperCase();
            axios.post("usuarios/login", {
                email: this.valido,
                password: this.password
            })
                .then(response => {
                    console.log(response.data);
                    this.$store.dispatch("setToken", response.data.token);
                    this.$store.dispatch("setDatos", response.data.usuario);
                    this.$router.push("/Home")
                    // localStorage.setItem("datos",JSON.stringify(response.data.usuario))
                })
                .catch(error => {
                    if (error.response.data.errores) {
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: error.response.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    console.log(error);
                })
        },
    }
}
</script>