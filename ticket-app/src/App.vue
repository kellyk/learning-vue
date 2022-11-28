<template>
  <div class="app" id="app">
    <h1>{{ title }}</h1>
    <div class="main">
      <div class="showDetails">
        <ul>
          <li v-for="(value, key) in details" :key="key"><strong>{{ key }}:</strong> {{ value }}</li>
        </ul>
        <div class="ticketsRemaining">
          <p v-if="tickets > 15">On sale now</p>
          <p v-else-if="tickets <= 15 && tickets > 1">There are {{ tickets }} tickets left</p>
          <p v-else-if="tickets === 1">There is 1 ticket left</p>
          <p v-else>Sorry. We're sold out</p>
        </div>
        <h3>Ticket Types</h3>
        <h3 v-if="error">Sorry we're having trouble getting ticket data. Please try again later!</h3>
        <div class="addTickets">
          <button v-if="!soldOut" @click="updateCart">Add ticket</button>
          <div clas="cart">Tickets ({{cart}})</div>
        </div>
        <div class="ticketTiers">
          <ticket-details
            v-for="ticketType in ticketTypes"
            v-bind:key="ticketType.name"
            :name="ticketType.name"
            :description="ticketType.description"
            :tickets="ticketType.tickets"
            @buy-tickets="buyTickets"
          ></ticket-details>
        </div>
        <div class="name">
          <input v-model="name" placeholder="name" />
          <p>Hello {{name}}</p>
        </div>
      </div>
      <aside class="aside">
        <!-- <img :class="{ 'soldOut': soldOut }" :src="image" width="199" height="199"/> -->
        <!-- <img :class="[soldOut && soldOutClass]" :src="image" width="199" height="199"/> -->
        <img :class="{ 'soldOut': soldOut }" :src="image" width="199" height="199"/>
      </aside>
    </div>
  </div>
</template>

<script>
import TicketDetails from './components/TicketDetails.vue'
import data from './data/tickets.json';

export default {
  name: 'App',
  components: {
    TicketDetails
  },
  data() {
    return {
      error: false,
      name: '',
      soldOutClass: 'soldOut',
      title: "Comedy events",
      tickets: 10,
      cart: 0,
      ticketTypes: [],
      image: "http://www.fillmurray.com/200/200",
      details: { Name: "Bill Murray", Age: 72, Location: "Chicago "}
    }
  },
  methods: {
    updateCart() {
      this.cart++;
      this.tickets--;
    },
    updateImage(id) {
      this.image = this.ticketTypes.filter(type=> type.id === id)[0].image;
    },
    buyTickets(num, name) {
      console.log('buy some tickets', num, name)
      this.cart = this.cart + num;
    }
  },
  computed: {
    soldOut() {
      return this.tickets === 0;
    }
  },
  mounted() {
    this.ticketTypes = data;
  }
}
</script>

<style>
body {
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  padding-left: 2em;
}

button, input {
  line-height: 1.5em;
  padding: 0.25em .5em;
  background: white;
  border-radius: 3px;
  border-color: #ddd;
  border-width: 1px;
  border-style: solid;
}

.app {
  padding: 0 1em;
}

.main {
  display: flex;
  gap: 2em;
}

.ticketTiers {
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
  padding-left: 0;
}

.ticketSelector {
  list-style: none;
  width: 75px;
  border-radius: 5px;
  border: 1px solid #ddd;
  align-items: center;
  justify-content: center;
}

.addTickets {
  display: flex;
  gap: 0.5em;
  flex-direction: column
}

.soldOut {
  opacity: 0.3;
}

.name {
  margin-top: 2em;
}

</style>
