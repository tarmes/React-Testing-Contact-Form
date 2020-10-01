import React from 'react';
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('Tests ContactForm', () => {
    test('ContactForm renders without errors', () => {
        render(<ContactForm/>)
    })
    test('User can fill out and submit form', () => {
        render(<ContactForm/>)

        //Act
        const firstNameInput = screen.getByLabelText(/first name/i)
        const lastNameInput = screen.getByLabelText(/last name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const messageInput = screen.getByLabelText(/message/i)

        
    })
})
 
