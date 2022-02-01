<template>
    <div>
        <div class="rounded-sm overflow-hidden border border-gray-700">
            <table class="min-w-full divide-y divide-gray-800">
                <thead>
                    <tr>
                        <th class="bg-gray-700 px-3 py-2">Tanggal</th>
                        <th class="bg-gray-700 px-3 py-2 text-right">pH</th>
                        <th class="bg-gray-700 px-3 py-2 text-right">DO</th>
                        <th class="bg-gray-700 px-3 py-2 text-right">EC</th>
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
            loggers: []
        }
    },
    mounted () {
        let data = ipcRenderer.sendSync('getData', 1)
        this.pages = data.pages
        this.loggers = data.logger
    },
    methods: {
        getData (i) {
            let data = ipcRenderer.sendSync('getData', i)
            this.pages = data.pages
            this.loggers = data.logger
        }
    }
}
</script>