<template>
    <form id="container" @submit="submit">
        <div></div>
        <div id="skjema">
            <div><baseInput 
                label="Navn" 
                id="navn"
                class="baseInput"
                v-model="name"
                :error="nameError"/>
            </div>
            <div><baseInput 
                label="Epost-adresse" 
                id="epost"
                class="baseInput"
                v-model="email"
                :error="emailError"/>
            </div>
            <div><baseInput 
                label="Melding" 
                id="melding"
                class="baseInput"
                v-model="message"
                :error="messageError"/>
            </div>
            <button 
            id="submit" 
            type="submit"
            :disabled="hasErrors()"
            :style="{ cursor: hasErrors() ? 'default' : 'pointer'}">
            Submit
            </button>
        </div>
    </form>
</template>

<script setup lang="js">
import BaseInput from '../components/BaseInput.vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'
import { formStore } from '@/stores/counter'

const store = formStore()

async function sendForm () {
    const formData = {
        nameInput: name.value,
        emailInput: email.value,
        messageInput: message.value
    }

    await axios.post(
        'https://my-json-server.typicode.com/jenscaa/fake-server/events',
        formData
    )
    .then(function (response) {
        console.log('Response', response);
        axios.get('https://my-json-server.typicode.com/jenscaa/fake-server/events?id=1')
        .then(response2 => {
            const status = response2.data[0].status;
            alert('Status: ' + status);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
    .catch(function (err) {
        console.log('Error', err)
    })
}

function hasErrors() {
    return Object.values(errors.value).some((error) => error)
}

const validations = {
    name: value => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true
    },
    email: value => {
        if (!value) return 'This field is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
        return 'Please enter a valid email address'
        }

        return true
    },
    message: value => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true
    }

}

const {handleSubmit, errors} = useForm({
validationSchema: validations
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')

const submit = handleSubmit(values => {
    store.name = name.value
    store.email = email.value
    store.message = message.value

    console.log('submit', values);
    sendForm()
})
</script>

<style scoped>
#container {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1.1fr;
}


#skjema {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: white;
    border-radius: 5px;
    text-align: left;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 40px;
    padding: 30px;
}

#submit {
    margin: 17px;
    min-height: 50px;
    border-radius: 3px;
    cursor: pointer;
}

div {
    margin-top: 7px;
    margin-bottom: 7px;
}
</style>