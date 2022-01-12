<template>
  <div class="chambre" :class="{'lumiere-allumee' : $store.state.lumieres.chambre}">
    <h1>Ici c'est la chambre</h1>
     <button @click="actionLumiere">Allumer/Eteindre la lumiere</button>
    <div>

        <img src="https://www.deco.fr/sites/default/files/styles/width_880/public/2021-01/shutterstock_1879801108.jpg?itok=XcbSKnjK"
      width="500"/>
            <!--<router-link to="/salon">Aller dans le salon</router-link>-->
         
    </div>
    <li><router-link to="/grenier">Aller dans le grenier</router-link><br></li>
  </div>
</template>
<script>
export default{
    mounted(){
      //this.$bus.$on("allumer-lumiere-chambre", this.actionLumiere);
    },
    methods:{
      actionLumiere(){
        console.log("Allumer ou éteindre la lumière de la chambre");
                this.$store.commit("setLumiere", "chambre");
      },
      trouver(){
        this.$store.commit("setouestlepomsky", "chambre");
        alert("Vous avez trouvé le chien !");
      }
    }
}
</script>
