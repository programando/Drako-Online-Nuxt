<template>
    <div>
        <ul class="flex justify-center mt-3">
            <!-- <nuxt-link :to="link.url ? link.url : '#'" v-for="link in links" :key="link.label"   -->
            <button v-for="(link,index) in links" :key="index"  
                class="mx-1 px-3 py-2 bg-gray-200 hover:bg-purple-500 hover:text-gray-200 rounded-lg cursor-pointer"  
                v-bind:class="{ 'bg-purple-500': link.active, 'text-gray-200': link.active, 'text-purple-400' :!link.active}">
                <span    class="font-bold" @click='getProductosFromUrl(link.url)'>{{getLabel(link.label)}}</span >
            </button>
        </ul>
        <div v-if="currentRecord" class="flex justify-center">
            <span class="text-gray-700">Mostrando <span class="font-bold">{{currentRecord}}</span> de <span class="font-bold">{{totalRecords}}</span> registros.</span>
        </div>
    </div>
</template>

<script>
export default {
    props:["links",'currentRecord','totalRecords'],
    methods: {
        getLabel(label){
            if(label === '&laquo; Previous'){
                return 'Anterior'
            }else if( label ==='Next &raquo;'){
                return 'Siguiente'
            }else{
                return label
            }
        },
        getProductosFromUrl ( Url ) {
          this.$emit('getProductosFromUrl',Url);
        }
    }
}
</script>

<style>

</style>