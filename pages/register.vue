<template>
  <div class="">
    <h2 class="mt-20 text-3xl text-center">Crear cuenta</h2>
    <div class="justify-center mt-10 mb-20 space-x-20 lg:flex">
      <div class="mx-10">
        <div>
          <label class="text-lg font-semibold">Email</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Ingresar Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Confirma tu Email</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirma tu Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Nombre</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Apellido</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Apellido"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Contraseña</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Confirmar Contraseña</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirmar Contraseña"
            type="text"
          />
        </div>
        <div class="mt-10 w-72">
          <input type="checkbox" name="" id="" />
          <label
            >Acepto los
            <span class="text-yellow-400">Términos y Condiciones</span> y las
            <span class="text-yellow"
              >Politicas de Privacidad y Tratamiento de Datos.</span
            >
          </label>
        </div>
      </div>
      <div class="mx-10">
        <div class="mt-6">
          <label>Tipo de persona</label>
          <select class="px-2 py-1 border" name="select">
            <option value="value1">Juridica</option>
            <option value="value2" selected>Natural</option>
          </select>
        </div>
        <div class="mt-5">
          <label class="text-lg font-semibold">Departamento</label>
          <select class="block px-2 py-1 border rounded w-72" name="select">
            <option value="value1">Juridica</option>
            <option value="value2" selected>Natural</option>
          </select>
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Ciudad</label>
          <select class="block px-2 py-1 border rounded w-72" name="select">
            <option value="">-</option>
            <option value="Arauca">Arauca</option>
            <option value="Armenia">Armenia</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Bucaramanga">Bucaramanga</option>
            <option value="Cali">Cali</option>
            <option value="Cartagena">Cartagena</option>
            <option value="Cúcuta">Cúcuta</option>
            <option value="Florencia">Florencia</option>
            <option value="Ibagué">Ibagué</option>
            <option value="Leticia">Leticia</option>
            <option value="Manizales">Manizales</option>
            <option value="Medellín">Medellín</option>
            <option value="Mitú">Mitú</option>
            <option value="Mocoa">Mocoa</option>
            <option value="Montería">Montería</option>
            <option value="Neiva">Neiva</option>
            <option value="Pasto">Pasto</option>
            <option value="Pereira">Pereira</option>
            <option value="Popayán">Popayán</option>
            <option value="Puerto Carreño">Puerto Carreño</option>
            <option value="Puerto Inírida">Puerto Inírida</option>
            <option value="Quibdó">Quibdó</option>
            <option value="Riohacha">Riohacha</option>
            <option value="San Andrés">San Andrés</option>
            <option value="San José del Guaviare">San José del Guaviare</option>
            <option value="Santa Marta">Santa Marta</option>
            <option value="Sincelejo">Sincelejo</option>
            <option value="Tunja">Tunja</option>
            <option value="Valledupar">Valledupar</option>
            <option value="Villavicencio">Villavicencio</option>
            <option value="Yopal">Yopal</option>
          </select>
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold"
            >Identificacion (cédula/nit)</label
          >
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Identificacion (cedula/nit)"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Destinatario</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Destinatario"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Observaciones</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-lg font-semibold">Télefono</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Télefono"
            type="text"
          />
        </div>
        <div class="flex justify-end mt-4">
          <button class="w-40 px-4 py-1 text-white rounded bg-rojo">Crear Cuenta</button>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
</style>