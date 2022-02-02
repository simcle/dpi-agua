<template>
	<div>
		<div class="fixed w-full top-0 z-30">
			<!-- windows win32 navbar -->
			<div v-if="arg.navbar" class="flex items-center justify-between bg-gray-800 drag">
				<div class="px-5 py-1 text-gray-500">dpi-agua v{{arg.version}}</div>
				<div class="flex items-center">
					<a href="#" @click="minimize" class="hover:bg-gray-700 py-1 px-3 cursor-auto"><i class="icon-minus3" style="font-size: 12px;"></i></a>
					<a href="#" @click="maximize" class="hover:bg-gray-700 py-1 px-3 cursor-auto"><i class="icon-checkbox-unchecked" style="font-size: 12px;"></i></a>
					<a href="#" @click="close" class="hover:bg-red-700 hover:text-gray-200 py-1 px-3 cursor-auto"><i class="icon-cross2" style="font-size: 12px;"></i></a>
				</div>
			</div>
			<!-- /windons navbar  -->

			<!-- macOS navbar -->
			<div v-else>
				<div v-if="show" class="bg-gray-800 flex items-center justify-center drag">
					<div class="px-3 py-1">dpi-agua v{{arg.version}}</div>
				</div>
			</div>
			<!-- /macOS navbar -->

			<div class="py-2.5 bg-black flex items-center justify-between px-5">
				<div class="flex space-x-2">
					<router-link to="/" class="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-sm" exact><i class="icon-home"></i></router-link>
					<router-link to="/logger" class="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-sm" exact><i class="icon-file-spreadsheet"></i></router-link>
					<a href="#" @click.prevent="port_connection = true" class="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-sm"><i class="icon-alignment-unalign" :class="{'text-green-500': status}"></i></a>
					<router-link to="/register" class="bg-yellow-500 text-gray-100 h-8 w-8 flex items-center justify-center rounded-sm" exact><i class="icon-cloud-upload"></i></router-link>
				</div>
				<div>
					<div><i class="icon-connection" :class="[internet ? 'text-green-500':'text-gray-700']"></i></div>
				</div>
			</div>
		</div>
		<div :class="[arg.navbar === false && show ? 'content':'content-macos-fullscreen'] " class="p-3">
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
			port_connection: false,
			arg: {
				version: '',
				navbar: true
			},
			show: true
		}
	},
	created () {
		window.addEventListener('online', this.internetStataus)
		window.addEventListener('offline', this.internetStataus)
		this.internetStataus()
		this.arg = ipcRenderer.sendSync('OperatingSystem')
		ipcRenderer.on('navbarMacOS', (_, message) => {
			this.show = message
		})
	},
	computed: {
		...mapGetters({
			status: 'get_status',
			internet: 'get_internet'
		}),
	},
	methods: {
        minimize: () => ipcRenderer.send('minimize'),
        maximize: () => ipcRenderer.send('maximize'),
        close: () => ipcRenderer.send('close'),
		onDismiss () {
			this.alert = false
			localStorage.removeItem('path')
		},
		internetStataus () {
			this.$store.commit('SET_INTERNET', window.navigator.onLine)
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
	.active {
		@apply bg-cyan-600 text-gray-300 !important
	}
	.drag {
		-webkit-app-region: drag;
	}
	.content{
		margin-top: 68px;
	}
	.content-macos-fullscreen {
		margin-top: 43px;
	}
</style>