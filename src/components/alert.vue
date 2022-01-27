<template>
    <transition name="modal" mode="out-in">
        <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <transition name="slide" >
                    <div v-show="show" class="inline-block align-bottom bg-gray-800 rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xs sm:w-full">
                        <div class="p-5">
                            <div class="flex mb-3">
                                <div><i class="icon-warning icon-2x text-yellow-500"></i></div>
                                <div class="ml-3 pl-1">
                                    <div class="text-base font-medium leading-none mb-1">Koneksi terputus</div>
                                    <div class="text-xs">Silahkan periksa sambungan kabel usb, pastikan terhubung dengan baik!!</div>
                                </div>
                            </div>
                            <div class="text-right -mb-2 -mr-2">
                                <a href="#" class="bg-gray-600 px-1 py-0.5 rounded-sm hover:bg-gray-700" @click="$emit('close-alert')">keluar</a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

    </transition>
</template>
<script>
export default {
    props: {
        show: Boolean
    }
}
</script>
