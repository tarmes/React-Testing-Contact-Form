import React from 'react';
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('Tests ContactForm', () => {
    test('ContactForm renders without errors', () => {
        render(<ContactForm/>)
    })
})
 
