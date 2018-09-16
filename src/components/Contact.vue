<template>
  <v-container fluid>
    <header>
        <h1 class="text-xs-center">Contact Us</h1>
    </header>
    <v-layout align-top justify-center row fill-height mt-15>
        <v-flex xs-12 sm6>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.636132294576!2d-82.51217444971223!3d28.03559508257201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c16bbc6ae033%3A0x3a75184728dea75c!2sEduca+Tu+Credito!5e0!3m2!1sen!2sph!4v1532551458432" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-flex>
        <v-flex xs-12 sm6>
            <v-form v-model="valid">
                    <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="Name"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    >
                    </v-text-field>
                </v-form>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
