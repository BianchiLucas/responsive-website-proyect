import React, { useState } from "react";
import { FormSection, FormTitle, FormColumn, FormRow, FormWrapper, FormMessage, FormInputRow, FormInput, FormLabel, FormButton } from "./FormStyles";
import { Container } from "../../globalStyles";
import validateForm from './FormValidation'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const resultError = validateForm({ name, email, password, confirmPassword })

        if (resultError !== null) {
            setError(resultError)
            return
        }
        setName('')
        setEmail('')
        setPassword('')
        setError(null)
        setSuccess('Aplication was submitted!')
    }

    const messageVariants = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } }
    }

    const formData = [
        { label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
        { label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
        { label: 'Password', value: password, onChange: (e) => setPassword(e.target.value), type: 'password' },
        { label: 'Confirm Password', value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), type: 'password' },
    ]

    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>Sign up</FormTitle>
                        <FormWrapper onSubmit={handleSubmit}>
                            {formData.map((element, index) => (
                                <FormInputRow key={index}>
                                    <FormLabel> {element.label} </FormLabel>
                                    <FormInput
                                        type={element.type}
                                        placeholder={ (element.label === 'Confirm Password') ? 'Confirm your password' : `Enter your ${element.label.toLocaleLowerCase()}` }
                                        value={element.value}
                                        onChange={element.onChange}
                                    />
                                </FormInputRow>
                            ))}
                            <FormButton type="sublit">Sign up</FormButton>
                        </FormWrapper>
                        {error && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                                error
                            >
                                {error}
                            </FormMessage>
                        )}
                        {success && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                            >
                                {success}
                            </FormMessage>
                        )}
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    )
}

export default Form 