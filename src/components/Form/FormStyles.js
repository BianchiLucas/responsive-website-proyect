import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormSection = styled.div`
    padding: 160px 0;
    background: #192034;
`

export const FormTitle = styled.h1`
color: #cfcfcf;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
`

export const FormColumn = styled.div`
    padding: 50px;
    background: #242424;
    border: 20px;
    flex: 1;
    max-width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);

    @media screen and (max-width:768px) {
        max-width: 100% !important;
        flex-basis: 100%;
    }

    img {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`

export const FormRow = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`

export const FormWrapper = styled.form`
    padding-top: 0;
    width: 100%;
`

export const FormMessage = styled(motion.div)`
    color: ${({ error }) => (error ? 'red' : 'green')};
    padding: 5px;
    text-align: center;
    margin-top: 1rem;
`

export const FormInputRow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 1.4rem;

    > p {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: #f00e0e;
    }

`

export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    color: #cfcfcf;
    border: none;
    border-bottom: 1px solid #cfcfcf;
    font-size: 1rem;
    background-color: #242424;
`

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    color: #afafaf;
`

export const FormButton = styled.button`
    color: #cfcfcf;
    border-radius: 4px;
    background: none;
    margin-top: 1.5rem;
    white-space: nowrap;
    outline: none;
    width: 100%;
    font-size: 1.4rem;
    padding: 5px 15px; 
    border: 2px solid white;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
        color: white;
        transition: background-color 0.4s ease-in;
        background-color: white;
}
`

