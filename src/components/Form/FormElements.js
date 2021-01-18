import styled from 'styled-components'

export const FormContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
`

export const FormWrapper = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;  
`

export const Form = styled.form`
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`

export const FormFieldset = styled.fieldset`
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
` 

export const FormH3 = styled.h3`
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
`

export const FormTextarea = styled.textarea`
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    height: 100px;
    max-width: 100%;
    resize: none;

    &:hover {
        -webkit-transition: border-color 0.3s ease-in-out;
        -moz-transition: border-color 0.3s ease-in-out;
        transition: border-color 0.3s ease-in-out;
        border: 1px solid #aaa; 
    }

    &:focus {
        outline: 0;
        border: 1px solid #aaa;
    }
`

export const FormInput = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;

    &:hover {
        -webkit-transition: border-color 0.3s ease-in-out;
        -moz-transition: border-color 0.3s ease-in-out;
        transition: border-color 0.3s ease-in-out;
        border: 1px solid #aaa; 
    }
`

export const FormButton = styled.button`
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 50px;
    background: conic-gradient(from 180deg at 50% 50%, #CA00ED -82.5deg, #6200EE 61.87deg, #CA00ED 277.5deg, #6200EE 421.87deg);
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
    font-weight: bold;

    &:hover {
        background: #fff;
        color: #010606;
        border-style: solid;
        -webkit-transition: background 0.3s ease-in-out;
        -moz-transition: background 0.3s ease-in-out;
        transition: background-color 0.3s ease-in-out;
    }

    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }
`