<template>
    <div>
        <div class="relative inline-flex -space-x-px">
            <button class="bg-gray-800 border border-gray-700 relative px-2.5 py-1"><i class="icon-arrow-left22"></i></button>
            <button v-for="page in rangeOne" :key="page.page" @click="getData(page.page)" :class="[pages.current_page == page.page? 'bg-red-600 text-gray-100':'bg-gray-800']" class="border border-gray-700 relative px-2.5 py-1">{{page.page}}</button>
            <span v-if="rangeOne.length == 2" class="bg-gray-800 border border-gray-700 px-2.5 py-1 cursor-not-allowed">...</span>
            <button v-for="page in rangeTwo" :key="page.page" @click="getData(page.page)" :class="[pages.current_page == page.page? 'bg-red-600 text-gray-100':'bg-gray-800']" class="bg-gray-800 border border-gray-700 relative px-2.5 py-1">{{page.page}}</button>
            <span v-if="rangeThree.length == 2" class="bg-gray-800 border border-gray-700 px-2.5 py-1 cursor-not-allowed">...</span>
            <button v-for="page in rangeThree" :key="page.page" @click="getData(page.page)" :class="[pages.current_page == page.page? 'bg-red-600 text-gray-100':'bg-gray-800']" class="border border-gray-700 relative px-2.5 py-1">{{page.page}}</button>
            <button class="bg-gray-800 border border-gray-700 relative px-2.5 py-1"><i class="icon-arrow-right22"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['pages'],
    data () {
        return {
            rangeOne: [],
            rangeTwo: [],
            rangeThree: []
        }
    },
    computed: {
        current_page () {
            return this.pages.current_page
        }
    },
    methods: {
        getData (i) {
            this.$emit('get-page', i)
        }
    },
    watch: {
        current_page (val) {
            this.rangeOne = []
            this.rangeTwo = []
            this.rangeThree = []
            if(this.pages.last_page  <= 10 ) {
                for (let i = 0; i < this.pages.last_page ; i++) {
                    this.rangeOne.push({page: i+1})                    
                }
            }else if(this.pages.last_page  > 10 && val < 7){
                for (let i = 0; i < 8; i++) {
                    this.rangeOne.push({page: i+1})                    
                }
                for (let i = 0; i < 2; i++) {
                    this.rangeThree.push({page: this.pages.last_page  + i -1})
                }
            }else if(val <= this.pages.last_page  - 6 && val > 6){
                for (let i = 0; i < 2; i++) {
                    this.rangeOne.push({page: i+1})                    
                }
                for (let i = 0; i < 7; i++) {
                    this.rangeTwo.push({page: val+i -3})                    
                }
                for (let i = 0; i < 2; i++) {
                    this.rangeThree.push({page: this.pages.last_page  + i -1})
                }
            }else{
                for (let i = 0; i < 2; i++) {
                    this.rangeOne.push({page: i+1})                    
                }
                for (let i = 0; i < 9; i++) {
                    this.rangeThree.push({page: this.pages.last_page  +i -8})
                }
            }
        }
    }

}
</script>