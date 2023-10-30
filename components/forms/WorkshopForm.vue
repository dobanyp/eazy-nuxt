<template>
    <form id="main-contact-form" action="post" @submit.prevent="submitForm">
        <div class="input-box">
            <input type="text" name="attendee-name" id="name" v-model.trim="attendeeData.attendeeName">
            <div class="input-underline" :class="{error: validationErrors.attendeeName}"></div>
            <label for="name">Név</label>
            <span v-if="validationErrors.attendeeName" class="error">{{ validationErrors.attendeeName }}</span>
        </div>
        <div class="input-box">
            <input type="email" name="attendee-email" id="email" v-model.trim="attendeeData.attendeeEmail">
            <div class="input-underline" :class="{error: validationErrors.attendeeEmail}"></div>
            <label for="email">E-mail</label>
            <span v-if="validationErrors.attendeeEmail" class="error">{{ validationErrors.attendeeEmail }}</span>
        </div>
        <div class="input-box">
            <input type="text" name="attendee-company" id="company" v-model.trim="attendeeData.attendeeCompany">
            <div class="input-underline" :class="{error: validationErrors.attendeeCompany}"></div>
            <label for="company">Cégnév</label>
            <span v-if="validationErrors.attendeeCompany" class="error">{{ validationErrors.attendeeCompany }}</span>
        </div>
        <div class="input-box checkbox">
            <label for="privacy">
                <input type="checkbox" name="privacy" id="privacy" value="accepted" v-model="attendeeData.privacy">
                elolvastam és elfogadom az <a href="https://drive.google.com/file/d/1bNTG3YN7y_wjQH1mNvP1w412C1-_xmX2/view?pli=1" target="_blank" ref="noreferer">adatkezelési tájékoztatót</a>
            </label>
            <span v-if="validationErrors.privacy" class="error">{{ validationErrors.privacy }}</span>
        </div>
        <input class="cta" type="submit" value="Jelentkezem">
    </form>
</template>

<script>

import apiClient from "@/services/apiClient";

export default {
    name: "WorkshopForm",
    data() {
        return {
            attendeeData: {
                attendeeName: "",
                attendeeEmail: "",
                attendeeCompany: "",
                privacy: "",
                workshopId: 1
            },
            validationErrors: {
                attendeeName: null,
                attendeeEmail: null,
                attendeeCompany: null,
                privacy: null
            }
        }
    },
    
    methods: {
        submitForm() {
            if (this.validateForm()) {
                apiClient.post('inc/workshop-form-handler.php', this.attendeeData)
                .then(
                    res => {
                        console.log(res.data);
                        this.$router.push({ name: "workshopSuccess" })
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
                attendeeName: "",
                attendeeEmail: "",
                attendeeCompany: "",
                privacy: ""
            }
            
            const validationRules = {
                attendeeName: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                attendeeEmail: {
                    required: true,
                    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
                },
                attendeeCompany: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                privacy: {
                    required: true
                }
            }

            let isValid = true;

            for (const field of Object.keys(validationRules)) {
                const rule = validationRules[field];
                const value = this.attendeeData[field];
                
                if (rule.regex && !rule.regex.test(value)) {
                    this.validationErrors[field] = "Hibás formátum."
                    isValid = false;
                }

                if (rule.minLength && value.length < rule.minLength) {
                    this.validationErrors[field] = `Minimum ${rule.minLength} karakter szükséges.`
                    isValid = false;
                }

                if (rule.maxLength && value.length > rule.maxLength) {
                    this.validationErrors[field] = `Maximum ${rule.maxLength} karakter engedélyezett.`
                    isValid = false;
                }

                if (rule.required && !value) {
                    this.validationErrors[field] = "Kötelező mező.";
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

    input:not(input[type="checkbox"]) {
        appearance: none;
        background: transparent;
        border: none;
        padding: 0.4rem 0;
        color: white;
        font-family: 'Montserrat';
        font-size: 1rem;
        font-weight: 600;
    }

    &.checkbox {

        margin: 1rem 0;

        label {
            line-height: 2rem;
        }

        input[type="checkbox"]{
            margin-left: 0;
            border: 1px solid black;
        }
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