<template>
    <div>
        <div class="rounded-sm overflow-hidden border border-gray-700">
            <table class="min-w-full divide-y divide-gray-800">
                <thead>
                    <tr>
                        <th @click="sortBy('timestamp')" :class="[sortKey == 'timestamp'? 'text-green-500':'']" class="bg-gray-700 px-3 py-2 cursor-pointer hover:text-green-500">
                            Waktu
                            <i v-if="sortKey == 'timestamp'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('ph')" :class="[sortKey == 'ph'? 'text-green-500':'']" class="bg-gray-700 px-3 py-2 cursor-pointer hover:text-green-500 text-right">
                            pH
                            <i v-if="sortKey == 'ph'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('do')" :class="[sortKey == 'do'? 'text-green-500':'']" class="bg-gray-700 px-3 py-2 cursor-pointer hover:text-green-500 text-right">
                            DO
                            <i v-if="sortKey == 'do'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                        <th @click="sortBy('ec')" :class="[sortKey == 'ec'? 'text-green-500':'']" class="bg-gray-700 px-3 py-2 cursor-pointer hover:text-green-500 text-right">
                            EC
                            <i v-if="sortKey == 'ec'" :class="[sortOrder === 'ASC' ? 'icon-arrow-up12':'icon-arrow-down12']"></i>
                            <i v-else class="icon-menu-open"></i>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    <tr v-for="(log,i) in loggers" :key="i">
                        <td class="px-3 py-1.5">{{log.timestamp}}</td>
                        <td class="px-3 py-1.5 text-right">{{log.ph}}</td>
                        <td class="px-3 py-1.5 text-right">{{log.do}}</td>
                        <td class="px-3 py-1.5 text-right">{{log.ec}}</td>
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
        Paginate
    },
    data () {
        return {
            pages: 0,
            loggers: [],
            sortKey: 'timestamp',
            sortOrder: 'DESC'
        }
    },
    mounted () {
        this.getData(1)
    },
    methods: {
        getData (i) {
            let params = {
                page: i,
                key: this.sortKey,
                order: this.sortOrder
            }
            let data = ipcRenderer.sendSync('getData', params)
            this.pages = data.pages
            this.loggers = data.logger
        },
        sortBy (key) {
            if(key == this.sortKey) {
                this.sortOrder = (this.sortOrder == 'DESC') ? 'ASC': 'DESC'
            } else {
                this.sortKey = key
                this.sortOrder = 'DESC'
            }
            this.getData(1)
        }
    }
}
</script>