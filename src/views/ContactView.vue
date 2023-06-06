<script>
export default {
    methods: {
        flash(message) {
             alert(message)
        }
    }
}
</script>

<template>
    <div class="contact">
        <h1>This is an contact page</h1>
        <main>
            <p>
                <button @click="flash('It Works')">Click Me</button>
            </p>
        </main>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
    .contact {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
  