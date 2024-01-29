<script setup>

const formData = reactive({
    fullName: "",
    email: "",
    phone: "",
    privacy: ""
})

const validationErrors = reactive({
    fullName: "",
    email: "",
    phone: "",
    privacy: ""
})

const responseData = ref(null)

async function submitForm() {
    validateForm();
    try {
        const { data } = await useFetch('/api/submit', {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: { ...formData }
        })

        if (data && data.value) {
            responseData.value = data.value.createEventRegistration
        }

    } catch (error) {
        console.error("Some error occured:", error)

    }
}

function validateForm() {
    const validationRules = {
        fullName: {
            required: true,
            minLength: 3,
            maxLength: 30,
        },
        email: {
            required: true,
            regex:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
        },
        phone: {
            required: true,
            regex: /^\+?(\d{1,3})?[-.\s]?((\d{3})[-.\s]?){2}\d{4}$/
        },
        privacy: {
            required: true,
        },
    }

    let isValid = true;

    for (const key of Object.keys(validationRules)) {
        const rule = validationRules[key];
        const value = formData[key].value;

        if (rule.regex && !rule.regex.test(value)) {
            validationErrors[key] = "Hibás formátum.";
            isValid = false;
        }

        if (rule.minLength && value && value.length < rule.minLength) {
            validationErrors[key] = `Minimum ${rule.minLength} karakter szükséges.`;
            isValid = false;
        }

        // if (rule.maxLength && value.length > rule.maxLength) {
        //     this.validationErrors[key].value = `Maximum ${rule.maxLength} karakter engedélyezett.`;
        //     isValid = false;
        // }

        // if (rule.required && !value) {
        //     this.validationErrors[key].value = "Kötelező mező.";
        //     isValid = false;
        // }
    }

    return isValid;
}
</script>

<template>
    <div>
        <span>

        </span>
        <form action="" class="my-4 flex flex-col gap-4" @submit.prevent="submitForm">
            <label for="fullName">
                Név: <input v-model="formData.fullName" type="text" name="" id="fullName" class="text-black">
                <div>{{ validationErrors.fullName }}</div>
            </label>
            <label for="email">
                Email: <input v-model="formData.email" type="email" name="" id="email" class="text-black">
                <div>{{ validationErrors.email }}</div>
            </label>
            <label for="phone">
                Phone: <input v-model="formData.phone" type="tel" name="" id="phone" class="text-black">
                <div>{{ validationErrors.phone }}</div>
            </label>
            <label for="privacy">
                Privacy Policy: <input v-model="formData.privacy" type="checkbox" name="" id="privacy">
                <div>{{ validationErrors.privacy }}</div>
            </label>
            <button class="ea-btn">jelentkezem</button>
        </form>
        <div class="my-8 flex flex-col gap-2">
            <span>Név: {{ formData.fullName }}</span>
            <span>Email: {{ formData.email }}</span>
            <span>Telefon: {{ formData.phone }}</span>
        </div>
        <div v-if="responseData">{{ responseData }}</div>
    </div>
</template>