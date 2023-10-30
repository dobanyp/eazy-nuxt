<template>
    <form id="main-contact-form" action="post" @submit.prevent="submitForm">
        <div class="input-box">
            <input type="text" name="name" id="lead-name" v-model.trim="formData.name">
            <div class="input-underline" :class="{error: validationErrors.name}"></div>
            <label for="lead-name">Your name</label>
            <span v-if="validationErrors.name" class="error">{{ validationErrors.name }}</span>
        </div>
        <div class="input-box">
            <input type="tel" name="tel" id="lead-tel" v-model.trim="formData.tel">
            <div class="input-underline" :class="{error: validationErrors.tel}"></div>
            <label for="lead-tel">Phone number</label>
            <span v-if="validationErrors.tel" class="error">{{ validationErrors.tel }}</span>
        </div>
        <div class="input-box">
            <input type="email" name="mail" id="lead-mail" v-model.trim="formData.mail">
            <div class="input-underline" :class="{error: validationErrors.mail}"></div>
            <label for="lead-mail">E-mail</label>
            <span v-if="validationErrors.mail" class="error">{{ validationErrors.mail }}</span>
        </div>
        <div class="input-box">
            <input type="text" name="company" id="lead-company" v-model.trim="formData.company">
            <div class="input-underline" :class="{error: validationErrors.company}"></div>
            <label for="lead-company">Your Company</label>
            <span v-if="validationErrors.company" class="error">{{ validationErrors.company }}</span>
        </div>
        <div class="input-box">
            <input type="text" name="subject" id="lead-subject" v-model.trim="formData.subject">
            <div class="input-underline" :class="{error: validationErrors.subject}"></div>
            <label for="lead-subject">Subject</label>
            <span v-if="validationErrors.subject" class="error">{{ validationErrors.subject }}</span>
        </div>
        <div class="input-box">
            <input type="text" name="question" id="lead-question" v-model.trim="formData.question">
            <div class="input-underline" :class="{error: validationErrors.question}"></div>
            <label for="lead-question">Your Question</label>
            <span v-if="validationErrors.question" class="error">{{ validationErrors.question }}</span>
        </div>
        <input class="cta" type="submit" value="Send">
    </form>
</template>

<script>

import apiClient from "@/services/apiClient";

export default {
    name: "ContactForm",
    data() {
        return {
            formData: {
                name: "",
                tel: "",
                mail: "",
                company: "",
                subject: "",
                question: ""
            },
            validationErrors: {
                name: null,
                tel: null,
                mail: null,
                company: null,
                subject: null,
                question: null
            }
        }
    },
    
    methods: {
        submitForm() {
            if (this.validateForm()) {
                apiClient.post('inc/contact-form-handler.php', this.formData)
                .then(
                    res => {
                        console.log(res.data);
                        this.$router.push({ name: "success" })
                    }
                )
                .catch(
                    err => {
                        console.error(err)
                        this.$router.push({ name: "workshopError" })
                    }
                )
            }
        },
        validateForm() {

            this.validationErrors = {
                name: null,
                tel: null,
                mail: null,
                company: null,
                subject: null,
                question: null
            }
            
            const validationRules = {
                name: {
                    required: true,
                    minLength: 3,
                    maxLength: 40
                },
                tel: {
                    required: true,
                    regex: /^(?:\+\d{1,3})?(?:[()\s\-]?\d{1,4}[()\s\-]?){1,14}$/,
                    minLength: 10,
                    maxLength: 15
                },
                mail: {
                    required: true,
                    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                },
                company: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                subject: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                question: {
                    required: true,
                    minLength: 3, 
                    MaxLength: 300
                }
            }

            let isValid = true;

            for (const field of Object.keys(validationRules)) {
                const rule = validationRules[field];
                const value = this.formData[field];
                
                if (rule.regex && !rule.regex.test(value)) {
                    this.validationErrors[field] = "Invalid format."
                    isValid = false;
                }

                if (rule.minLength && value.length < rule.minLength) {
                    this.validationErrors[field] = `Minimum ${rule.minLength} characters required.`
                    isValid = false;
                }

                if (rule.maxLength && value.length > rule.maxLength) {
                    this.validationErrors[field] = `Maximum ${rule.maxLength} characters required.`
                    isValid = false;
                }

                if (rule.required && !value) {
                    this.validationErrors[field] = "This field is required";
                    isValid = false;
                }

            }
            
            return isValid;
        }
    }
}
</script>

<style lang="scss" scoped>

.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    input {
        appearance: none;
        background: transparent;
        border: none;
        padding: 0.4rem 0;
        color: white;
        font-family: 'Montserrat';
        font-size: 1rem;
        font-weight: 600;
    }
    input:focus-visible {
        appearance: none;
        border: none;
        outline: none;
    }
    input:focus-visible+.input-underline {
        background: var(--light-green);
    }
    .input-underline {
        background: linear-gradient(90deg, var(--light-gradient-start), var(--light-gradient-end), var(--light-gradient-start));
        height: calcRem(1);
        width: 100%;
        margin-bottom: 0.5rem;
        &.error {
            background: var(--error);
        }
    }
}

.cta {
    display: block;
    width: 100%;
    background: transparent;
    border: solid calcRem(1) var(--white);
    color: var(--white);
    padding: calcRem(10) calcRem(15);
    cursor: pointer;
    transition: 0.1s ease-in-out all;
    margin: 0 auto;
    

    @include breakpoint(medium) {
        max-width: calcRem(200);
    }
}

.cta:hover {
    box-shadow: rgb(20, 20, 20) calcRem(-5) calcRem(-5) 0 0, var(--green) calcRem(-5) calcRem(-5) 0 calcRem(1);
    transform: translate(calcRem(2), calcRem(2));
    transition: 0.2s ease-out all;
    opacity: 0.7;
}

span.error {
    color: var(--error);
    font-size: calcRem(10);
    display: block;
}

</style>