import { reactive } from "vue";


export let counter = reactive({
    count: 0,

    increment() {
        if(this.count >= 10){
            return;
        }
        this.count++
    },
    decrement() {
        if(this.count <= 0){
            return;
        }
        this.count--;
    }
})