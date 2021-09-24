import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../utilities/validation/validators";
import {connect} from "react-redux";
import {authLogin} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/formsControls.module.css"


const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField('Email', 'email', null, Input, [required, maxLength30])}
                {createField('Password', 'password', 'password', Input, [required, maxLength30])}
                {createField(null, 'rememberMe', "checkbox", Input, null)}
                Remember me
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {authLogin})(Login)