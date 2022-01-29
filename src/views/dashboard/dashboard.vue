<template>
    <div>
        <div class="grid grid-cols-3 gap-3">
            <!-- Dissolved Oxygen -->
            <div class="col-span-1 bg-yellow-400 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M19.6,11.8c-4.3,0-7.9,3.5-7.9,7.9c0,4.3,3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9S23.9,11.8,19.6,11.8z M8,21.5
                            l-7.9-0.1C0.6,27.6,4.1,33,9,36.1l4-6.8C10.3,27.6,8.5,24.8,8,21.5z M7.9,18.5c0.3-3.5,2.2-6.5,5-8.5l-4-6.8C3.9,6.5,0.4,12,0,18.4
                            L7.9,18.5z M31.2,21.7c-0.5,2.8-2,5.3-4.1,7l4,6.9c4.4-3.2,7.4-8.1,8-13.8L31.2,21.7z M15.5,8.6c1.3-0.5,2.7-0.7,4.1-0.7
                            c1.9,0,3.6,0.4,5.2,1.2l4-6.8C26.1,0.9,23,0,19.7,0c-2.9,0-5.6,0.6-8.1,1.7L15.5,8.6z M24.6,30.3c-1.5,0.7-3.2,1.1-5,1.1
                            c-1.4,0-2.7-0.3-4-0.7l-4,6.9c2.4,1.1,5.1,1.7,8,1.7c3.2,0,6.2-0.8,8.9-2.1L24.6,30.3z M31.3,3.9l-4,6.9c2.3,2,3.8,4.8,4.1,8
                            l7.9,0.1C39,12.7,35.9,7.3,31.3,3.9z M35.7,2h-0.4V1.7h1V2h-0.4v1.1h-0.2V2z M36.5,1.7h0.4l0.3,0.9l0,0l0.3-0.9h0.4V3h-0.2V2l0,0
                            l-0.3,1h-0.2l-0.3-1l0,0v1h-0.3V1.7H36.5z"/>
                        </svg>

                    </div>
                    <div class="text-gray-800 font-medium text-lg">Dissolved Oxygen</div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-800 mb-5">{{data.do}} mg/L</div>
            </div>
            <!-- /end dissolved oxygen -->

             <!-- ph -->
            <div class="col-span-1 bg-red-500 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M27.6,2.7h-0.4V2.5h1v0.2h-0.3v1h-0.3V2.7z M28.4,2.5h0.4l0.3,0.8l0,0l0.3-0.8h0.4v1.2h-0.3v-1l0,0l-0.3,1H29 
                            l-0.3-1l0,0v1h-0.3V2.5z M19.9,22.6l-9.7,7l9.7,9.8l9.8-9.8L19.9,22.6z M16.8,19.9c0,0-6.7-6.1-1.4-15.7L0,19.5l7,7L16.8,19.9z 
                            M23,19.9c0,0,6.7-6.1,1.4-15.7l15.3,15.3l-7,7L23,19.9z M19.9,0c0,0-7.1,6.9,0,16.4C27,7,19.9,0,19.9,0z"/>
                        </svg>
                    </div>
                    <div class="text-gray-100 font-medium text-lg">pH</div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-100 mb-5">{{data.ph}}</div>
            </div>
            <!-- end ph -->

            <!-- EC -->
            <div class="col-span-1 bg-green-500 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M38.7,14.4l-6.1-3.1l-0.4-8L24.9,0L19,3.9L11.5,1L5.9,4.3l0.1,8l-5.8,3.5l-0.2,8l6.5,4l0.3,7.6l7.1,3.5l6.1-3.7
                            l7.2,3.3l5.7-3.5l0.1-8l6.5-4L38.7,14.4z M12.3,4.2L15.9,6l-3.3,2l0.3,11.6l-3.5-1.8L9.3,6.1L12.3,4.2z M13.2,35.3l-3.3-2v-3.8
                            l3.3,1.8l9.7-6l0.1,3.9L13.2,35.3z M26.7,35.1l-3.4-1.9l3.1-1.9l-0.2-11.7l0,0v-0.2L16,25.7l0,0l0,0l0,0l0,0l-3,1.8L2.9,22l-0.2-4
                            L6,16v3.9l9.9,5.7l0,0l0,0l0,0l0,0l0,0l-0.2-12.1l0,0l-0.1-3.8l10-6.1l3.3,1.7l0.2,4l-3.2-1.9l-10,6.2l10.4,5.8h0.1l3.3,1.8
                            l0.4,11.7L26.7,35.1z M33.1,23.1l-0.1-4l-10.3-5.7l3.2-1.9L36.2,17l0.4,4L33.1,23.1z M16.1,25.6L16.1,25.6L16.1,25.6z M34.5,1.9
                            h-0.4V1.6h1v0.3h-0.4V3h-0.3V1.9H34.5z M35.3,1.6h0.4L36,2.5l0,0l0.3-0.9h0.4v1.3h-0.3v-1l0,0l-0.3,1h-0.2l-0.3-1l0,0v1h-0.3
                            C35.3,2.9,35.3,1.6,35.3,1.6z"/>
                        </svg>
                    </div>
                    <div class="text-gray-100 font-medium text-lg">EC</div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-100 mb-5">{{data.ec}} µS</div>
            </div>
            <!-- /end ec -->

            <!-- Temperature -->
            <div class="col-span-1 bg-gray-400 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M26.2,0c6.7,3.3,8.7,8.8,8.7,8.8V0H26.2z M17.3,0C7.7,0,0,7.8,0,17.3s7.7,17.3,17.3,17.3c2.9,0,5.6-0.7,8-1.9
                            v-9c-1.9,2.4-4.7,3.9-8,3.9c-5.6,0-10.1-4.5-10.1-10.1S11.7,7.2,17.3,7.2c5.5,0,9.9,4.3,10.1,9.7v17.6h7.1V17
                            C34.4,7.6,26.7,0,17.3,0z M8.7,34.6C2,31.3,0,25.8,0,25.8v8.8H8.7z M37,0.5h-0.4V0.2h1v0.2h-0.4v1h-0.3V0.5H37z M37.8,0.2h0.4
                            L38.5,1l0,0l0.3-0.8h0.4v1.3h-0.3v-1l0,0l-0.3,1h-0.2l-0.3-1l0,0v1h-0.3C37.8,1.5,37.8,0.2,37.8,0.2z"/>
                        </svg>
                    </div>
                    <div class="text-gray-100 font-medium text-lg">Temperature</div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-800 mb-5">0.00℃</div>
            </div>
            <!-- /end temperature -->

            <!-- Pump -->
            <div class="col-span-1 bg-blue-500 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M26.1,12.8c1.9,2.3,2.4,5.2,1.6,7.9c0-0.1,0.1-0.2,0.1-0.3l0.8-0.7c1.6-1.5,2.5-3.2,2.5-4.9
                            c0-1.8-0.7-3.5-2.3-5.2L19.9,0l-4.5,4.1l5.5,5.9C22.8,10.2,24.7,11.2,26.1,12.8z M23.4,22.4c2.3-2,2.6-5.5,0.7-7.9
                            c-2-2.3-5.5-2.6-7.9-0.7c-2.3,2-2.6,5.5-0.7,7.9C17.5,24.1,21,24.4,23.4,22.4z M14.4,11.9c1.7-1.4,3.7-2,5.7-1.9l0,0l-0.4-0.4
                            c-1.5-1.6-3.2-2.5-4.9-2.5c-1.8,0-3.5,0.7-5.2,2.3L0,18.3l4.2,4.4l7.8-7.3C12.5,14.1,13.3,12.8,14.4,11.9z M35.2,13.8l-7.7,7.1l0,0
                            c-0.5,1.3-1.3,2.5-2.4,3.5c-1.8,1.5-4,2.1-6.1,1.9l0.6,0.6c1.5,1.6,3.2,2.5,4.9,2.5c1.8,0,3.5-0.7,5.2-2.3l9.6-8.9L35.2,13.8z
                            M13.5,23.5c-1.8-2.1-2.3-4.8-1.7-7.3l-0.7,0.6c-1.6,1.5-2.5,3.2-2.5,4.9c0,1.8,0.7,3.5,2.3,5.2l8.9,9.6l4.5-4.1l-5.7-6.2
                            C16.6,26,14.8,25.1,13.5,23.5z M32,12.1h-0.3v-0.2h0.9v0.2h-0.3v1H32C32,13.1,32,12.1,32,12.1z M32.8,11.9h0.4l0.3,0.8l0,0l0.3-0.8
                            h0.4v1.2h-0.3v-0.9l0,0l-0.3,0.9h-0.2l-0.3-0.9l0,0v0.9h-0.3C32.8,13.1,32.8,11.9,32.8,11.9z"/>
                        </svg>
                    </div>
                    <div class="text-gray-100 font-medium text-lg">Pump</div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-100 mb-5">0.00 ml</div>
            </div>
            <!-- /end pump -->

            <!-- CO2 -->
            <div class="col-span-1 bg-orange-500 p-3 rounded-sm">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <svg class="fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="39.3px"
                            height="39.3px" viewBox="0 0 39.3 39.3" style="enable-background:new 0 0 39.3 39.3;" xml:space="preserve">
                            <path d="M26.1,12.8c1.9,2.3,2.4,5.2,1.6,7.9c0-0.1,0.1-0.2,0.1-0.3l0.8-0.7c1.6-1.5,2.5-3.2,2.5-4.9
                            c0-1.8-0.7-3.5-2.3-5.2L19.9,0l-4.5,4.1l5.5,5.9C22.8,10.2,24.7,11.2,26.1,12.8z M23.4,22.4c2.3-2,2.6-5.5,0.7-7.9
                            c-2-2.3-5.5-2.6-7.9-0.7c-2.3,2-2.6,5.5-0.7,7.9C17.5,24.1,21,24.4,23.4,22.4z M14.4,11.9c1.7-1.4,3.7-2,5.7-1.9l0,0l-0.4-0.4
                            c-1.5-1.6-3.2-2.5-4.9-2.5c-1.8,0-3.5,0.7-5.2,2.3L0,18.3l4.2,4.4l7.8-7.3C12.5,14.1,13.3,12.8,14.4,11.9z M35.2,13.8l-7.7,7.1l0,0
                            c-0.5,1.3-1.3,2.5-2.4,3.5c-1.8,1.5-4,2.1-6.1,1.9l0.6,0.6c1.5,1.6,3.2,2.5,4.9,2.5c1.8,0,3.5-0.7,5.2-2.3l9.6-8.9L35.2,13.8z
                            M13.5,23.5c-1.8-2.1-2.3-4.8-1.7-7.3l-0.7,0.6c-1.6,1.5-2.5,3.2-2.5,4.9c0,1.8,0.7,3.5,2.3,5.2l8.9,9.6l4.5-4.1l-5.7-6.2
                            C16.6,26,14.8,25.1,13.5,23.5z M32,12.1h-0.3v-0.2h0.9v0.2h-0.3v1H32C32,13.1,32,12.1,32,12.1z M32.8,11.9h0.4l0.3,0.8l0,0l0.3-0.8
                            h0.4v1.2h-0.3v-0.9l0,0l-0.3,0.9h-0.2l-0.3-0.9l0,0v0.9h-0.3C32.8,13.1,32.8,11.9,32.8,11.9z"/>
                        </svg>
                    </div>
                    <div class="text-gray-100 font-medium text-lg">CO<sub>2</sub></div>
                </div>
                <div class="text-center text-4xl font-extrabold text-gray-900 mb-5">0.00 ppm</div>
            </div>
            <!-- /end co2 -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            data: 'get_data'
        })
    }
}
</script>