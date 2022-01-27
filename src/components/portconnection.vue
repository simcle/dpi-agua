<template>
    <transition name="modal" mode="out-in">
        <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <transition name="slide" >
                    <div v-show="show" class="inline-block rounded-sm align-bottom text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                        <div class="bg-gray-900">
                            <div class="bg-gray-800 flex justify-between items-center py-1.5">
                                <div class="text-gray-500 pl-3">DAFTAR PORT</div>
                                <div class="pr-1">
                                    <a href="#" @click="$emit('close-modal')" class="bg-gray-700 p-1 hover:bg-red-800"><i class="icon-cross2"></i></a>
                                </div>
                            </div>
                            <div class="p-3">
                                <div class="text-center mb-3">Silahkan pilih PORT !!</div>
                                <div class="px-5 mb-5">
                                    <ul class="space-y-3">
                                        <li v-for="(port, i) in ports" :key="i" :class="[port.path == path ? 'bg-green-500 bg-opacity-10':'']" class="border border-gray-600 rounded-sm relative flex items-center py-2 hover:border-gray-500 hover:bg-gray-800">
                                            <input v-model="path" :id="i" type="radio" class="form-radio ml-3" name="port" :value="port.path">
                                            <label :for="i" class="py-2 absolute w-full px-10 cursor-pointer">{{port.path}} {{port.manufacturer}}</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-right px-5 mb-2">
                                    <button @click="$emit('close-modal')" class="mr-3 border rounded-sm border-gray-600 h-7 px-5 hover:bg-gray-800">Batal</button>
                                    <button @click="onConnection" :disabled="!path || isLoading" :class="[!path ? 'opacity-50 cursor-not-allowed':'hover:bg-green-600', isLoading ? 'opacity-40 cursor-wait':'']" class="mr-3 rounded-sm bg-green-500 h-7 px-5 text-white">CONNECT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>

<script>

import serialport from 'serialport'
import {conPort} from '../arduino'
export default {
    props: {
        show: Boolean
    },
    data () {
        return {
            ports: [],
            timeOut: '',
            path: '',
            isLoading: false
        }
    },
    methods: {
        async getSerialport () {
            await serialport.list()
            .then((ports, err) => {
                if(err) {
                    console.log(err);
                }
                if(ports.length === 0) {
                    console.log('tidak ada port yang ditemukan');
                }
                this.ports = ports

            })
            this.timeOut = setTimeout(() => {
                this.getSerialport()
            }, 1000)
        },
        onConnection () {
            this.isLoading = true
            conPort(this.path)
            .then(() => {
                this.isLoading = false
                localStorage.setItem('path', this.path)
                this.$emit('close-modal')
            })
        }
    },
    watch: {
        show (val) {
            if(val) {
                this.getSerialport()
                this.path = localStorage.getItem('path')
            }
            if(!val) {
                clearTimeout(this.timeOut)
            }
        }
    }
}
</script>