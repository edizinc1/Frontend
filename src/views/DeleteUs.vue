<template>
  <div class="DeleteUs">
    <div class="container">
      <h1>
        {{ user.name }}
      </h1>
      <h3>
        {{ user.email }}
      </h3>
      <h3>
        {{ user.type }}
      </h3>
      <button class="btn btn-danger" v-on:click="eliminar">
        Eliminar usuario
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DeleteUs",
  data() {
    return {
      user: null,
    };
  },
  created() {
    console.log(window.location.hash.slice(20, window.location.hash.length));
    let userId = window.location.hash.slice(20, window.location.hash.length);
    this.getUser(userId);
  },
  methods: {
    eliminar() {
      console.log(window.location.hash.slice(20, window.location.hash.length));
      let userId = window.location.hash.slice(20, window.location.hash.length);
      axios.post("http://localhost:3000/api/user/delete", {
          usId: userId
        })
        .then((response) => {
          if (response.data.message == "Success") {
            window.location = "http://localhost:8080/#/adminusers";
          }
        });
    },
    getUser(usId) {
      let headers = {
        "Access-Control-Allow-Origin": "*",
      };
      axios
        .get("http://localhost:3000/api/user/" + usId, { headers: headers })
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
