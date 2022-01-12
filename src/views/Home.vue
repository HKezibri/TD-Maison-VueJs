<template>
  <div class="home">
    <li><router-link to="/cuisine">Aller dans la cuisine</router-link><br></li>
    <li><router-link to="/salon">Aller dans le salon</router-link><br></li>
    <li><router-link to="/chambre">Aller dans la chambre</router-link><br></li>
    <li><router-link to="/grenier">Aller dans le grenier</router-link><br></li>
    <p> Il y a un chat caché dans cette maison </p>
    <p> Le chat est dans la pièce: {{$store.state.ouestlepomsky}} </p>
    <button @click="actionLumiereChambre">
      <template v-if="$store.state.lumieres.chambre">Eteindre</template>
      <template v-else>Allumer</template>
      la lumiere de la chambre
    </button>
    <button @click="actionLumiereSalon">
      <template v-if="$store.state.lumieres.salon">Eteindre</template>
      <template v-else>Allumer</template>
      la lumiere du salon
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods:{
    actionLumiereChambre(){
      this.$store.commit("setLumiere", "chambre");
    },
    actionLumiereSalon(){
      this.$store.commit("setLumiere", "salon");
    }
  }
}
</script>
