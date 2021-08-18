import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../utilities/validation/validators";
import {connect} from "react-redux";
import {authLogin, authLogout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/formsControls.module.css"


const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={'password'}
                       type={"password"}
                       component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={"checkbox"}
                />
                Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
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