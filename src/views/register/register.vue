<template>
    <div>
        <div class="grid lg:grid-cols-3 sm:grid-cols-5 gap-3">
            <div class="lg:col-span-2 sm:col-span-3">
                <h1 class="text-lg">Privacy Polys</h1>
                <p v-for="i in 5" :key="i"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, animi? Temporibus aperiam nulla unde adipisci cumque illo, facere ullam sit quis saepe voluptatum ut perspiciatis inventore enim autem, incidunt fugiat.</p>
            </div>
            <div class="lg:col-span-1 sm:col-span-2 border p-5 rounded-sm bg-cyan-700 border-cyan-900 shadow-md text-gray-300 relative overflow-hidden">
                <div class="mb-5">FORM DAFTAR</div>
                <form @submit.prevent="onSubmit">
                    <!-- <div class="mb-3">
                        <label for="">Lokasi Sensor</label>
                        <input type="text" class="h-9 mt-1 bg-cyan-600 border-cyan-600 border rounded-sm px-3 w-full focus:outline-none placeholder-cyan-500" placeholder="cont (kebun, lab, rungan a)">
                    </div> -->
                    <div class="mb-3">
                        <label for="">Nama Lengkap</label>
                        <input v-model="form.name" @keydown="error.name = ''" type="text" class="h-9 mt-1 bg-cyan-600 border-cyan-600 border rounded-sm px-3 w-full focus:outline-none placeholder-cyan-500" placeholder="nama lengkap">
                        <span v-if="error.name" class="text-xs text-red-300">{{error.name}}</span>
                    </div>
                    <div class="mb-3">
                        <label for="">Eamil</label>
                        <input v-model="form.email" @keydown="error.email = ''" type="email" class="h-9 mt-1 bg-cyan-600 border-cyan-600 border rounded-sm px-3 w-full focus:outline-none placeholder-cyan-500" placeholder="nama@email.com">
                        <span v-if="error.email" class="text-xs text-red-300">{{error.email}}</span>
                    </div>
                    <div class="mb-3">
                        <label for="">Passowrd</label>
                        <input v-model="form.password" @keydown="error.password = ''" type="password" class="h-9 mt-1 bg-cyan-600 border-cyan-600 border rounded-sm px-3 w-full focus:outline-none placeholder-cyan-500" placeholder="password">
                        <span v-if="error.password" class="text-xs text-red-300">{{error.password}}</span>
                    </div>
                    <div class="mb-5">
                        <label for="">Ulangi passowrd</label>
                        <input v-model="form.repeat_password" @keydown="error.repeat_password = ''" type="password" class="h-9 mt-1 bg-cyan-600 border-cyan-600 border rounded-sm px-3 w-full focus:outline-none placeholder-cyan-500" placeholder="password">
                        <span v-if="error.repeat_password" class="text-xs text-red-300">{{error.repeat_password}}</span>
                    </div>
                    <div class="mt-10">
                        <button class="bg-yellow-600 text-gray-800 font-medium w-full h-9 rounded-sm">DAFTAR</button>
                    </div>
                </form>
                <div v-show="isLoading" class="bg-white absolute inset-0 bg-opacity-30 flex items-center justify-center">
                    <div class="text-center">
                        <i class="icon-spinner4 icon-3x text-gray-600 animate-spin"></i>
                        <div class="mt-3">Mohon tunggu...</div>
                    </div>
                </div>
                <div v-show="notif" class="bg-yellow-500 absolute inset-0 flex items-center justify-center text-gray-300">
                    <div class="text-center">
                        <div class="flex items-center justify-center border-2 border-green-500 rounded-full w-24 h-24 animate-bounce m-auto">
                            <i class="icon-checkmark4 icon-3x text-green-500"></i>
                        </div>
                        <div class="text-center text-gray-200 text-lg">Pendaftaran berhasil</div>
                        <div class="text-gray-800">Terimaksin</div>
                        <div class="mt-3">
                            <router-link to="/" class="bg-gray-800 p-2 rounded-sm block items-center hover:bg-gray-900" exact>Kembali ke beranda</router-link>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            isLoading: false,
            notif: false,
            form: {
                name: 'Nendi Sofiandy',
                email: 'nendisofiandy84@gmail.com',
                password: 'pwlan123',
                repeat_password: 'pwlan123'
            },
            error: {
                name: '',
                email: '',
                password: '',
                repeat_password: '',
            }
        }
    },
    methods: {
        onSubmit () {
            if(!this.form.name) {
                this.error.name = 'Nama harus diisi!!'
            }
            if(!this.form.email) {
                this.error.email = 'Email harus diisi!!'
            }
            if(!this.form.password) {
                this.error.password = 'Password harus diisi!!'
            }
            if(!this.form.repeat_password) {
                this.error.repeat_password = 'Ulangi password!!'
            }
            if(this.form.name && this.form.email && this.form.password && this.form.repeat_password) {
                if(this.form.password != this.form.repeat_password) {
                    this.error.repeat_password = 'password tidak sama'
                } else {
                    this.onRegister()
                }
            }
        },
        onRegister () {
            this.isLoading = true
            axios.post('/auth/login', {
                email: 'nendisofiandy84@gmail.com',
                password: 'pwlan123'
            })
            .then((res) => {
                console.log(res);
                let token = res.data.access_token
                this.$store.commit('auth/SET_TOKEN', token)
                this.isLoading = false
                this.notif = true
            })
            .catch(err => {
                if(err.response) {
                    console.log(err.response.data);
                }
            })
        }
    }    
}
</script>