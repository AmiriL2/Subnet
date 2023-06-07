<script>

</script>

<template>
<v-app id="inspire">
    <v-app-bar flat color="blue">
      <v-container class="fill-height d-flex align-center">
<div class="navbar">
        <v-btn to="/">TLS Certificate Checker</v-btn>
        <v-btn to="/calculator">Calculator</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </div>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>    
</template>

<style>
.navbar {
  margin: auto;
}
</style>
