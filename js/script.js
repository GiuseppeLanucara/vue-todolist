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
        addTodo(){
         if(this.newTodo.length > 1){
         this.todos.push({
         text: this.newTodo,
         done: false
        });

        this.newTodo = "";
      }
    },
        removeTodo(index){
      if(confirm(`Sei sicuro di eliminare "${this.todos[index].text}"?`)){
        this.todos.splice(index, 1);
      }
    }
}}).mount("#app");