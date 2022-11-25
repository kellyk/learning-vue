const app = Vue.createApp({
  data() {
    return {
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
    axios.get('./data/tickets.json').then(response => this.ticketTypes = response.data)
  }
});
