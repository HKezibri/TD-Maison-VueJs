<template>
  <div class="salon" :class="{'lumiere-allumee' : $store.state.lumieres.salon}">
    <h1>Ici c'est le salon</h1>
     <button @click="actionLumiere">Allumer/Eteindre la lumiere</button>
    <div>
          <img src="https://cache.marieclaire.fr/data/photo/w1000_ci/1jv/idees-deco-salon2.jpg"
        width="500"/>
        <!-- <router-link to="/cuisine">Aller dans la cuisine</router-link>-->
    </div>
  </div>
</template>
<script>
export default{
    mounted(){
      //this.$bus.$on("allumer-lumiere-chambre", this.actionLumiere);
    },
    methods:{
      actionLumiere(){
        console.log("Allumer ou éteindre la lumière du salon");
                this.$store.commit("setLumiere", "salon");
      },
}
}
</script>
