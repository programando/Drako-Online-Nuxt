<template>
  <div class="p-1 min-h-screen grid grid-cols-12 bg-slate-100">

    <div class="col-span-2 bg-white">
      <h2 class="ml-10 my-4 font-semibold text-lg">Eventos-Radian</h2>
      <div class="border-t-2 text-sm">
        
        <div class="flex justify-center mt-6">
          <button class="rounded-lg text-white w-48 py-2" 
                 :disabled="btnAcuseReciboIsDisabled"   
                 :class="{ 'bg-gray-400': btnAcuseReciboIsDisabled, 'line-through':btnAcuseReciboIsDisabled, 'bg-green-500': !btnAcuseReciboIsDisabled}"
                 @click="invoiceSetAcuseRecibo()"
                 >
            Acuse de recibo
          </button>
        </div>
  
  

        <div class="flex justify-center mt-4">
          <button class="rounded-lg text-white w-48 py-2" 
                 :disabled="btnReciboBienServicioIsDisabled"   
                 :class="{ 'bg-gray-400': btnReciboBienServicioIsDisabled, 'line-through':btnReciboBienServicioIsDisabled, 'bg-green-500': !btnReciboBienServicioIsDisabled}"
                 @click="invoiceSetAcuseRecibo()"
                 >
            Recibo del bien o servicio
          </button>
        </div>

        <div class="flex justify-center mt-4">
          <button class="rounded-lg text-white w-48 py-2" 
                 :disabled="btnAceptacionExpresaIsDisabled"   
                 :class="{ 'bg-gray-400': btnAceptacionExpresaIsDisabled, 'line-through':btnAceptacionExpresaIsDisabled, 'bg-green-500': !btnAceptacionExpresaIsDisabled}"
                 @click="invoiceSetAcuseRecibo()"
                 >
            Aceptación expresa
          </button>
        </div><br>

        <div class="flex justify-center mt-2">
          <button class="bg-blue-500 rounded-lg text-white w-48 py-2"
             :disabled="btnRechazoIsDisabled"   
             :class="{ 'bg-gray-400': btnRechazoIsDisabled, 'line-through':btnRechazoIsDisabled, 'bg-blue-500': !btnRechazoIsDisabled}"
             @click="invoiceSetAcuseRecibo()"
           >
            Reclamo o rechazo
          </button>
        </div>
  
      </div>
    </div>

    <div class="col-span-7">
      <div class="flex justify-center">
          <object id="pdf"
              data=""
              type="application/pdf" 
              width="100%" 
              height="850px"
          >
          </object>
 
      </div>
    </div>

    <div class="col-span-3 bg-white">
      <div class="flex ml-14 space-x-10 mt-4">
        <button
          @click="mostrarDetalles"
          class="font-semibold text-lg"
          :class=[setClassDetalles]
        >
          Detalles
        </button>
        <button 
          @click="mostrarDescarga"
          class="font-semibold text-lg"
          :class=[setClassDescarga]
        >
          Descargas
        </button>
 
      </div>
      <div v-if="detalles == true" class="border mt-10 text-xs">
        <div class="flex pl-10 py-3 bg-gray-200">
          <p class="w-40  ">Tipo</p>
          <p class="w-40 font-bold">Factura</p>
        </div>
        <div class="flex pl-10 py-3  bg-white">
          <p class="w-40">Factura</p>
          <p class="w-40 font-bold">{{dataFactura.prfjo_dcmnto}} - {{dataFactura.nro_dcmnto}}</p>
        </div>
        <div class="flex pl-10 py-3 bg-gray-200">
          <p class="w-40  ">Fecha generación:</p>
          <p class="w-40 font-bold">{{dataFactura.fechaEmision}}</p>
        </div>
        <div class="flex pl-10 py-3  bg-white">
          <p class="w-40  ">Emisor:</p>
          <p class="w-40 font-bold">Drako Autopartes</p>
        </div>
        <div class="flex pl-10 py-3  bg-gray-200">
          <p class="w-40  ">Receptor</p>
          <p class="w-40 font-bold">{{Customer.name}} </p>
        </div>
        <div class="flex pl-10 py-3  bg-white">
          <p class="w-40  ">Valor Total</p>
          <p class="w-40 font-bold"> {{ Totals.payable_amount  | NumeroEntero }}</p>
        </div>
        <div class="flex pl-10 py-3  bg-gray-200">
          <p class="w-40  ">CUFE</p>
          <p class="w-40 font-bold">{{dataFactura.uuid }}</p>
        </div>
        <div class="flex pl-10 py-3  bg-white">
          <p class="w-40  ">Estado Trámite:</p>
          <p class="w-40 font-bold">{{ dataFactura.status_description}}</p>
        </div>
        <div class="flex pl-10 py-3  bg-gray-200">
          <p class="w-40  ">Estado DIAN:</p>
          <p class="w-40 font-bold">{{ dataFactura.status_message}}</p>
        </div>
        <div class="flex pl-10 py-3  bg-white text-blue-700 underline text-sm">
          <p class="w-80  "> 
              <a :href="dataFactura.UrlDian">
                  Consultar documento en la DIAN
              </a> 
          </p>
        </div>
      </div>

      <div v-if="descarga == true" class="border mt-10 text-xs">
        <div class="flex justify-center items-center pl-10 py-4 bg-gray-200">
          <p class="w-40 font-bold">PDF</p>
          <button class="w-40 font-bold ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center  bg-white">
          <p class="w-40 font-bold">Xml</p>
          <button class="w-40 font-bold ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center bg-gray-200">
          <p class="w-40 font-bold">Fecha de Emisión:</p>
          <button class="w-40 font-bold ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center  bg-white">
          <p class="w-40 font-bold">Emisor:</p>
          <button class="w-40 font-bold ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex justify-center py-4 bg-white text-sm">
          <button class="bg-rojo rounded-lg text-white w-56 py-2">
            Descargar Todo
          </button>
        </div>
        

        
        </div>
      </div>
    </div>
  
</template>

<script>
  import DocumentosElectronicos from "@/models/DocumentosElectronicos";
  import Csrf from "@/config/Csrf";
      export default {
        name: 'factura',

        data() {
          return {
            detalles: true,
            descarga: false,
 
            Factura:{
                customer: {
                  name :''
                },
                total: {
                  payable_amount:0
                }
            },
           dataFactura :{},
           Customer:{},
           Totals:{},
           Events:{}, 
          }
        },
 
        mounted(){
          Csrf.getCookie().then( () =>{
              this.showInvoiceData()
          });

        },



        methods: {

          invoiceSetAcuseRecibo() {
              alert('invoiceSetAcuseRecibo')
          },


            async showInvoiceData () {
              const { data }                 = await  DocumentosElectronicos.BuscarFacturaPorUuid(this.$route.params.uuid )
              const {customer,events, total} = data;
                    this.dataFactura         = data
                    this.Customer            = customer
                    this.Totals              = total
                    this.Events              = events
                    this.reemplazarPdfUrl() 
            },

              reemplazarPdfUrl () {
                const pdfObject = document.querySelector("object")
                pdfObject.setAttribute('data', this.dataFactura.PdfFile)
              },

              mostrarDetalles() {
                this.detalles = true
                this.descarga = false

              },

              mostrarDescarga() {
                this.detalles = false
                this.descarga = true
              }
            },

        computed: {

             
          btnAcuseReciboIsDisabled() {
            return this.Events.event_030 
          },

          btnReciboBienServicioIsDisabled() {
             // necesario acuse de recibo para recibo del bien
              return this.Events.event_030 === false ? true : this.Events.event_032 
          },
          btnAceptacionExpresaIsDisabled() {
             // necesario acuse de recibo para recibo del bien
              return this.Events.event_032  === false ? true : this.Events.event_033
          },
          btnRechazoIsDisabled() {
             // necesario acuse de recibo para recibo del bien
              return this.Events.event_032  === true ? true : this.Events.event_031
          },

          setClassDetalles() {
            if (this.detalles == true) {
              return 'text-blue-700 border-b-2 border-blue-700'
            }
          },

          setClassDescarga() {
            if (this.descarga == true) {
              return 'text-blue-700 border-b-2 border-blue-700'
            }
          }
        }

}
</script>

<style>
 
</style>
