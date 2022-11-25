app.component('ticket-details', {
  props: {
    name: String,
    description: String,
    tickets: Number,
    onHover: Boolean,
  },
  template: `
    <div>
      <h4 :hover="onHover">{{ name }}</h4>
      <div class="addTickets">
        <select class="ticketSelector" v-model="ticketsToBuy">
          <option value=0>0</option>
          <option v-for="number in ticketsLeft" :value="number">{{number}}</option>
        </select>
        <button v-if="ticketsToBuy > 0" @click="addTickets(ticketsToBuy)">Add</button>
      </div>
    </div>
  `,
  data() {
    return {
      ticketsToBuy: 0,
      ticketsLeft: this.tickets
    }
  },
  methods: {
    addTickets(num) {
      this.$emit('buyTickets', this.ticketsToBuy, this.name);
      this.ticketsLeft -=num;
      this.ticketsToBuy = 0;
    }
  }
})
