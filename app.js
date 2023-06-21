const app = Vue.createApp({
    data() {
        return {
            firstName: 'Alberto',
            lastName: 'Reis',
            email: 'albertoreis@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app') // we are passing app as the selector

// data is a function, that returns an object