let app = new Vue({

        el: "#app",
        data: {
            
            inputValue: "",
            done: [],
            todolist: [

                {
                    text: "Fare i compiti",
                    done: false,
                },
                {
                    text: "Fare la spesa",
                    done: false,
                }, 
                {
                    text: "Fare il bucato",
                    done: false,
                },
                {
                    text: "Pagare le bollette",
                    done: false,
                },
            ],
        },
        methods: {
            checkDone: function(index){
                if(this.todolist[index].done){
                    return true;
                }
                return false;
            },
            pushItem: function(value){
                if (value != ""){
                    let newObj = { text: value, done: false};
                    this.todolist.push(newObj);
                    this.inputValue = "";
                }
            },
            removeItem: function(index){
                this.todolist.splice(index, 1);
            },
            toggleCheck: function(index){

                this.todolist[index].done = !this.todolist[index].done;
            },
            keyMonitor: function(event){
                console.log(event.key);
            },
            isDone: function(index){
                return (this.todolist[index].done);
            }
        },

 });