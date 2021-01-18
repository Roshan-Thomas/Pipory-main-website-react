import React from 'react'
import {
    FormContainer,
    FormWrapper,
    Form,
    FormH3,
    FormFieldset,
    FormInput,
    FormButton,
    FormTextarea
} from './FormElements.js'

const ContactForm = () => {
    return (
        <FormContainer>
            <FormWrapper>
                <Form action="" method="post" name="contact">
                    <FormInput type="hidden" name="form-name" value="contact" />
                    <FormH3>Contact Us</FormH3>
                    <FormFieldset>
                        <FormInput name="name" placeholder="Your Name" type="text" tabindex="1" required autofocus />
                    </FormFieldset>
                    <FormFieldset>
                        <FormInput name="email" placeholder="Your Email Address" type="email" tabindex="2" required />
                    </FormFieldset>
                    <FormFieldset>
                        <FormTextarea name="message" placeholder="Type your message here...." tabindex="5" required></FormTextarea>
                    </FormFieldset>
                    <FormFieldset>
                        <FormButton name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</FormButton>
                    </FormFieldset>
                </Form>
            </FormWrapper>
        </FormContainer>
    )
}

export default ContactForm
