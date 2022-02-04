<template>
    <div>
        <div class="flex items-center justify-between mb-2">
             <v-date-picker ref="calendar" 
                v-model="range" 
                :columns="2" 
                is-range 
                :model-config="modelConfig"
                :available-dates='{ start: new Date(startDate[0].timestamp), end: new Date() }'>
                 <template v-slot="{togglePopover}">
                    <button @click="togglePopover" class="bg-gray-700 w-52 rounded-sm overflow-hidden flex items-center relative">
                        <div class="h-8 w-8 bg-gray-800 flex items-center justify-center bg-opacity-50"><i class="icon-calendar3"></i></div>
                        <div class="ml-3">{{range.start}} s.d {{range.end}}</div>
                        <div class="absolute w-full h-8 hover:bg-gray-800 hover:bg-opacity-30"></div>
                    </button>
                 </template>
             </v-date-picker>
             <div>
                 <button @click="saveAs" class="bg-gray-700 h-8 px-3 rounded-sm">Simpan Excel</button>
             </div>
        </div>
        <div class="rounded-sm overflow-hidden border border-gray-700">
            <table class="w-full divide-y divide-gray-800">
                <thead class="flex w-full">
                    <tr class="flex w-full">
                        <th @click="sortBy('timestamp')" :class="[sortKey == 'timestamp'? 'text-green-500':'']" class="bg-gray-700 px-2 py-2 cursor-pointer hover:text-green-500 w-1/2">
                            Waktu
                            <i v-if="sortKey == 'timestamp'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('ph')" :class="[sortKey == 'ph'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            pH
                            <i v-if="sortKey == 'ph'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('do')" :class="[sortKey == 'do'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            DO
                            <i v-if="sortKey == 'do'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('ec')" :class="[sortKey == 'ec'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            EC
                            <i v-if="sortKey == 'ec'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('temp')" :class="[sortKey == 'temp'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            Temp
                            <i v-if="sortKey == 'temp'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('pump')" :class="[sortKey == 'pump'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            Pump
                            <i v-if="sortKey == 'pump'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('co2')" :class="[sortKey == 'co2'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            CO<sub>2</sub>
                            <i v-if="sortKey == 'co2'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('o2')" :class="[sortKey == 'o2'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            O<sub>2</sub>
                            <i v-if="sortKey == 'o2'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('hum')" :class="[sortKey == 'hum'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            Hum
                            <i v-if="sortKey == 'hum'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('orp')" :class="[sortKey == 'orp'? 'text-green-500':'']" class="bg-gray-700 px-1 py-2 cursor-pointer hover:text-green-500 text-right w-1/5">
                            ORP
                            <i v-if="sortKey == 'orp'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                    </tr>
                </thead>
                <tbody id="scroll" class="flex flex-col w-full divide-y divide-gray-700 items-center overflow-y-scroll h-md h-lg">
                    <tr v-for="(log,i) in loggers" :key="i" class="w-full flex">
                        <td class="px-2 py-1.5 w-1/2">{{log.timestamp}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-yellow-500">{{log.ph}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-red-500">{{log.do}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-green-500">{{log.ec}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-gray-400">{{log.temp}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-blue-500">{{log.pump}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-orange-500">{{log.co2}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-rose-700">{{log.o2}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-emerald-700">{{log.hum}}</td>
                        <td class="px-2 py-1.5 text-right w-1/5 text-cyan-600">{{log.orp}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-right mt-3">
            <paginate :pages="pages" @get-page="getData($event)"></paginate>
        </div>
    </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import Paginate from '../../components/paginate.vue'
export default {
    components: {
        Paginate,
    },
    data () {
        return {
            pages: 0,
            loggers: [],
            sortKey: 'timestamp',
            sortOrder: 'DESC',
            startDate: '',
            range: {
                start: '',
                end: ''
            },
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD'
            }
        }
    },
    created () {
        this.startDate = ipcRenderer.sendSync('avaliabledate')
        this.range.start = this.checkDate(new Date())
        this.range.end = this.checkDate(new Date())
    },
    mounted () {
        this.getData(1)
    },
    methods: {
        checkDate (d) {
            let date = new Date(d)
            let Y = date.getFullYear()
            let M = date.getMonth() + 1
            let D = date.getDate()
            M = checkTime(M)
            D = checkTime(D)
            function checkTime (i) {
                if(i < 10) {
                    i = `0${i}`
                }
                return i;
            }
            return `${Y}-${M}-${D}`
        },
        getData (i) {
            let params = {
                page: i,
                key: this.sortKey,
                order: this.sortOrder,
                start: this.range.start,
                end: this.range.end
            }
            let data = ipcRenderer.sendSync('getData', params) // menambil data pertama kali di simpan
            this.pages = data.pages
            this.loggers = data.logger
            document.getElementById('scroll').scrollTop = 0;
        },
        sortBy (key) {
            if(key == this.sortKey) {
                this.sortOrder = (this.sortOrder == 'DESC') ? 'ASC': 'DESC'
            } else {
                this.sortKey = key
                this.sortOrder = 'DESC'
            }
            this.getData(1)
        },
        saveAs () {
            let params = {
                start: this.range.start,
                end: this.range.end
            }
            ipcRenderer.send('export', params)
        }
    },
    watch: {
        range () {
            this.getData(1)
        }
    }
}
</script>

<style>
    @media (min-width: 800px) { 
        .h-md {
            height: 310px !important;
        }
    }
    @media (min-width: 1024px) { 
        .h-lg {
            height: 580px !important;
        }
    }
    
</style>