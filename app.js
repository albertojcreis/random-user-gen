const app = Vue.createApp({
    data() {
        return {
            firstName: 'Alberto',
            lastName: 'Reis',
            email: 'albertoreis@gmail.com',
            gender: 'male',
            pictureHC: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUserHardCoded() {
            this.firstName = 'Michelle'
            this.lastName = 'Colangelo'
            this.email = 'michellecolangelo@hotmail.com'
            this.gender = 'female'
            this.pictureHC = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
        async getUserRandom(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },

})

app.mount('#app') // we are passing app as the selector

// data is a function, that returns an object