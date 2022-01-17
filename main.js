let app = new Vue({

        el: "#app",
        data: {
            
            inputValue: "",
            done: [],
            elements: [

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
                if(this.elements[index].done){
                    return true;
                }
                return false;
            },
            pushItem: function(value){
                if (value != ""){
                    let newObj = { text: value, done: false};
                    this.elements.push(newObj);
                }
            },
            removeItem: function(index){
                this.elements.splice(index, 1);
            },
            toggleCheck: function(index){

                if (this.elements[index].done){
                    this.elements[index].done = false;
                }
                else {
                    this.elements[index].done = true;
                }
            },
            keyMonitor: function(event){
                console.log(event.key);
            },
            isDone: function(index){
                return (this.elements[index].done);
            }
        },

 });