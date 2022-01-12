<template>
  <div class="grenier">
    <h1>Ici c'est le grenier</h1>
    <div>
      <img src="https://cache.marieclaire.fr/data/photo/w1000_c17/maison/i14a/des_conseils_pour_renover_un_grenier.jpg"
      width="500"/>
      <!--<router-link to="/salon">Aller dans le salon</router-link>-->
      <img @click="trouver" src="https://www.wanimo.com/veterinaire/wp-content/uploads/2016/06/images_articles_chat_chat-intox-ail@2x.jpg" width="100"/>
    </div>
  </div>
</template>
<script>
export default{
    methods:{
      trouver(){
        this.$store.commit("setouestlepomsky", "grenier");
        alert("Vous avez trouvé le chat !");
      }
    }
}
</script>