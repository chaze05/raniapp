<template>
    <v-container fluid>
        <header>
            <h1 class="text-xs-center">Users</h1>
        </header>
        <div class="Users">
            <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                class="elevation-1"
            >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.contact }}</td>
            <td class="text-xs-left">{{ props.item.website }}</td>
            <td class="text-xs-left">{{ props.item.company }}</td>
            </template>
            </v-data-table>
        </div>
    </v-container>
</template>

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
<script>
import axios from 'axios'
export default {
  data () {
    return {
      loading: true,
      items: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          icon: '<v-icon small>arrow_upward</v-icon>',
          value: 'name'
        },
        { text: 'Email', value: 'email' },
        { text: 'Contact', value: 'contact' },
        { text: 'Website', value: 'website' },
        { text: 'Company', value: 'company' }
      ]
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      var dis = this
      axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        console.log(response.data.length)
        var items = []
        for (var x = 0; x < response.data.length; x++) {
          items.push({
            id: response.data[x].id,
            name: response.data[x].name,
            email: response.data[x].email,
            contact: response.data[x].phone,
            website: response.data[x].website,
            company: response.data[x].company.name
          })
          dis.loading = false
          dis.items = items
        }
      })
    }
  }
}
</script>
