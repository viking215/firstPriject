import React from "react"
import styles from './formsControls.module.css'
import {Field} from "redux-form";


export const FormControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = (props);
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = (props);
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder = null, name = null , type = null , component= null , validators = null ) => {
    return <div><Field placeholder={placeholder}
           name={name}
           type={type}
           component={component}
           validate={validators}/>
    </div>
}