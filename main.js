const app = Vue.createApp({
  data() {
    return {
      message: '',
      soldOutClass: 'soldOut',
      title: "Comedy events",
      tickets: 10,
      cart: 0,
      ticketTypes: [
        { id: 'bronzeTicket', name: 'Bronze', image: 'http://www.fillmurray.com/200/200', tickets: 3, description: 'Bronze ticket' },
        { id: 'silverTicket', name: 'Silver', image: 'http://www.fillmurray.com/200/202', tickets: 10, description: 'Silver ticket' },
        { id: 'goldTicket', name: 'Gold', image: 'http://www.fillmurray.com/200/199', tickets: 40, description: 'Gold ticket' }
      ],
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
    }
  },
  computed: {
    soldOut() {
      return this.tickets === 0;
    }
  }
});
