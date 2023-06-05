<script>

</script>

<template>
<v-app id="inspire">
    <v-app-bar flat color="blue">
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
<div class="navbar">
        <v-btn to="/">Home</v-btn>
        <v-btn to="/calculator">Calculator</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </div>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
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
