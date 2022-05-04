<template>
    <div class="mb-4" v-if="totalRecords > 20">
        <ul class="flex justify-center mt-3">
            <!-- <nuxt-link :to="link.url ? link.url : '#'" v-for="link in links" :key="link.label"   -->
            <button v-for="(link,index) in links" :key="index"  
                class="px-2 py-2 mx-1 bg-white rounded-lg cursor-pointer xl:mx-2 hover:bg-rojo hover:text-gray-200"  
                v-bind:class="{ 'bg-rojo': link.active, 'bg-gray-200': link.active, 'text-rojo' :!link.active}">
                <span    class="" @click='getProductosFromUrl(link.url)'>{{getLabel(link.label)}}</span >
            </button>
        </ul>
        <div v-if="currentRecord" class="flex justify-center mt-1">
            <span class="text-gray-700">Mostrando <span class="">{{currentRecord}}</span> de <span class="font-bold">{{totalRecords}}</span> registros.</span>
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
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>

<style>

</style>