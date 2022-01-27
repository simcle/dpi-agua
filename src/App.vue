<template>
	<div>
		<div class="fixed w-full top-0">
			<div class="flex items-center justify-between bg-gray-800 drag">
				<div class="px-5 py-1 text-red-500"></div>
				<div class="flex items-center">
					<a href="#" @click="minimize" class="hover:bg-gray-700 py-1 px-2 cursor-auto"><i class="icon-minus3" style="font-size: 12px;"></i></a>
					<a href="#" @click="maximize" class="hover:bg-gray-700 py-1 px-2 cursor-auto"><i class="icon-checkbox-unchecked" style="font-size: 12px;"></i></a>
					<a href="#" @click="close" class="hover:bg-gray-700 py-1 px-2 cursor-auto"><i class="icon-cross2" style="font-size: 12px;"></i></a>
				</div>
			</div>
			<div class="py-2 flex items-center justify-between px-5">
				<div>
					<a href="#" @click.prevent="port_connection = true" class="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-sm"><i class="icon-alignment-unalign" :class="{'text-green-500': status}"></i></a>
				</div>
				<div>
				
				</div>
			</div>
		</div>
		<div class="content p-3">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</div>

		<port-connection :show="port_connection" @close-modal="port_connection=false"></port-connection>
		<alert :show="alert" @close-alert="onDismiss"></alert>
	</div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { mapGetters } from 'vuex'
import portConnection from './components/portconnection.vue'
import Alert from './components/alert.vue'
export default {
	components: {
		portConnection,
		Alert
	},
	data () {
		return {
			alert: false,
			port_connection: false
		}
	},
	computed: {
		...mapGetters({
			status: 'get_status'
		}),
	},
	methods: {
        minimize: () => ipcRenderer.send('minimize'),
        maximize: () => ipcRenderer.send('maximize'),
        close: () => ipcRenderer.send('close'),
		onDismiss () {
			this.alert = false
			localStorage.removeItem('path')
		}
    },
	watch: {
		status (val) {
			this.alert = !val
		}
	}
}
</script>


<style>
	.drag {
		-webkit-app-region: drag;
	}
	.content{
		margin-top: 68px;
	}
</style>