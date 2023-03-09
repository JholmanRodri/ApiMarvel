<template>
    <div>
        <nav class="navbar">
            <div class="navbar-title">
                <a href="#" class="navbar-brand">Marvel Studio</a>
            </div>
            <ul class="navbar-menu" v-if="close === 1">
                <li class="navbar-item">
                    <a href="#" class="navbar-link" @click="cambioRegistro()">Registro</a>
                </li>
                <li class="navbar-item">
                    <a href="#" class="navbar-link" @click="cambioLogin()">Inicio de Sesión</a>
                </li>
            </ul>
        </nav>

        <div v-if="cambio === 0">
            <div class="login-container">
                <h2 class="login-header">Iniciar Sesión</h2>
                <form>
                    <input type="text" v-model="email" class="login-input" placeholder="Correo Electrónico">
                    <input type="password" v-model="password" class="login-input" placeholder="Contraseña">
                    <button type="submit" class="login-submit-btn" @click="login()">Iniciar Sesión</button>
                    <a href="#" class="forgot-password-link">¿Olvidaste tu Contraseña?</a>
                </form>
            </div>
        </div>

        <div v-if="cambio === 1">
            <div class="login-container">
                <h2 class="login-header">Registro</h2>
                <form>
                    <input type="text" v-model="usernameRegister" class="login-input" placeholder="Nombre">
                    <input type="text" v-model="documento" class="login-input" placeholder="documento">
                    <input type="text" v-model="emailRegister" class="login-input" placeholder="Correo Electrónico">
                    <input type="password" class="login-input" v-model="passwordRegister" placeholder="Contraseña">
                    <button type="submit" class="login-submit-btn" @click="registro()">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        return {
            email: "",
            password: '',
            usernameRegister: '',
            documento: '',
            emailRegister: '',
            passwordRegister: '',
            cambio: 0,
            close: 1
        }
    },
    methods: {
        cambioRegistro() {
            this.cambio = 1
        },
        cambioLogin() {
            this.cambio = 0
        },
        login() {
            this.valido = this.email.toUpperCase();
            axios.post("/usuarios/login", {
                email: this.valido,
                password: this.password
            })
                .then(response => {
                    console.log(response.data);
                    this.$store.dispatch("setToken", response.data.token);
                    this.$store.dispatch("setDatos", response.data.usuario);
                    this.$router.push("/Home")
                    this.close = 0
                })
                .catch(error => {
                    console.log(error);
                })
        },
        registro() {
            axios.post("/registro", {
                nombre: this.usernameRegister,
                email: this.emailRegister,
                password: this.passwordRegister,
                documento: this.documento
            })
                .then(response => {
                    console.log(response.data);

                    // this.email = this.emailRegister;
                    // this.password = this.passwordRegister;
                    // this.login(); 
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
}

</script>
<style lang="scss">
.login-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10rem;
    padding: 30px;
    background-color: #f9f9f9;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.login-header {
    text-align: center;
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
}

.login-input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    color: #333;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    transition: border-color 0.2s ease-in-out;
}

.login-input:focus {
    outline: none;
    border-color: #6eb1ff;
}

.login-input:hover {
    background-color: #eeeeee;
}

.login-submit-btn {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    background-color: #6eb1ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #212121;
}

.navbar-title {
    font-size: 24px;
    font-weight: bold;
}

.navbar-brand {
    color: #fff;
    text-decoration: none;
}

.navbar-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-item {
    margin-left: 20px;
}

.navbar-link {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
}

.navbar-link:hover {
    background-color: #6eb1ff;
}</style>