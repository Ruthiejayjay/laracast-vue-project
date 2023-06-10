import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
    // data
    state() {
        return {
            count: 0
        };
    },
    // methods
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++
            }
        },

        decrement() {
            if (this.count > 0) {
              this.count--
            }
        }

    },

    // computed

    getters: {
        remaining(){
            return 10 - this.count;
        }
    }
});
// import { reactive } from "vue";


// export let counter = reactive({
//     count: 0,

//     increment() {
//         if(this.count >= 10){
//             return;
//         }
//         this.count++
//     },
//     decrement() {
//         if(this.count <= 0){
//             return;
//         }
//         this.count--;
//     }
// })