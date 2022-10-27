const {createApp} = Vue;

createApp ({
    data() {

        return {
            todos:[
                {
                  text: "Fare revisione auto",
                  done: false,
                },
                {
                  text: "Compito di Boolean",
                  done: true,
                },
                {
                  text: "Fare visita al gatto",
                  done: false,
                },
                {
                  text: "Week-End al mare",
                  done: true,
                },
                {
                  text: "Sistemare nuovao PC",
                  done: false,
                },
                {
                  text: "Andare al cinema",
                  done: true,
                }
              ],
              
              newTodo: "",

        }
    },
    methods: {
       
    }
}).mount("#app");