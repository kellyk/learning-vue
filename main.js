const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      tickets: 10,
      image: "http://www.fillmurray.com/200/200",
      details: { Name: "Bill Murray", Age: 72, Location: "Chicago "}
    };
  }
});