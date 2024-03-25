<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
        <p>Count is {{ store.count }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TablaPersonas from '@/components/TablaPersonas.vue'
  import FormularioPersona from '@/components/FormularioPersona.vue'
  import { useCounterStore } from '@/stores/counter';
  import { ref, onMounted } from 'vue';

 // const myVar = import.meta.env.VITE_DJANGOURL;

  export default {
    name: 'app',
    components: {
      TablaPersonas,
      FormularioPersona,
    },
    setup() {
      const store = useCounterStore();
      const personas = ref([]);
      const listadoPersonas = async () => {
        // Metodo para obtener un listado de personas
        try {
          const response = await fetch('https://django-local-library-rc8t.onrender.com/api/v1/personas');
          personas.value = await response.json();
        } catch (error) {
          console.error(error);
        }
      };

      const agregarPersona = async (persona) => {
        // Metodo para agregar una persona
        try {
          const response = await fetch('https://django-local-library-rc8t.onrender.com/api/v1/personas', {
            method: 'POST',
            body: JSON.stringify(persona),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });

          const personaCreada = await response.json();
          personas.value = [...personas.value, personaCreada];
          store.increment();
        } catch (error) {
          console.error(error);
        }
      };

      const eliminarPersona = async (persona_id) => {
        // Metodo para eliminar una persona
        try {
          await fetch('https://django-local-library-rc8t.onrender.com/api/v1/personas'+persona_id+'/', {
            method: "DELETE"
          });
          personas.value= personas.value.filter(u => u.id !== persona_id);
          } catch (error) {
            console.error(error);
          }
      };

      const actualizarPersona = async (id, personaActualizada) => {
        // Metodo para actualizar una persona
        try {
          const response = await fetch('https://django-local-library-rc8t.onrender.com/api/v1/personas'+personaActualizada.id+'/', {
            method: 'PUT',
            body: JSON.stringify(personaActualizada),
            headers: { 'Content-type': 'application/json; charset=UTF -8' },
          });

          const personaActualizadaJS = await response.json();
          personas.value = personas.value.map(u => (u.id === personaActualizada.id ? personaActualizadaJS : u));
        } catch (error) {
          console.error(error);
        }
      };

      onMounted(() => {
        listadoPersonas();
      });

      return {
        personas,
        agregarPersona,
        eliminarPersona,
        actualizarPersona,
        store,
      };
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>
