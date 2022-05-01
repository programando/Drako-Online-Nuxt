<template>
  <div>
    <h3 class="text-sm font-semibold">Ficha técnica</h3>
            <table class="w-full border">
              <tbody>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Ancho</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_ancho }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Alto</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_alto }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Largo</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_largo }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Diámetro</td>
                  <td class="w-16 px-2 py-1 ">
                    {{ Producto.medida_diametro }}
                  </td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Medida interna</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_interna }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Medida externa</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_externa }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Peso Kg.</td>
                  <td v-if="Producto.peso_kg > 0" class="px-2 py-1 ">
                    {{ Producto.peso_kg }}
                  </td>
                </tr>
              </tbody>
            </table>      
</div>  
</template>

<script>
    export default {
        name: 'productoFichaTecnicaDetalle'   ,
        props:["Producto"]
    }
</script>