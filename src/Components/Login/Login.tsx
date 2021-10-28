import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authLogin} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import React from "react";
import {Alert, Backdrop, Button, Checkbox, TextField} from "@mui/material";
import s from './newLogin.module.css'
import {useAppSelector} from "../../redux/redux-store";


const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: 'onSubmit'})

    const captchaUrl = useAppSelector((state) => state.auth.captchaUrl)
    const isAuth = useAppSelector((state) => state.auth.isAuth)

    const dispatch = useDispatch()

    type Inputs = {
        email: string
        password: string
        rememberMe: boolean
        captcha: string
    };


    const onSubmit: SubmitHandler<Inputs> = formData => {
        dispatch(authLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open>
            <div className={s.body}>
                <h2>Login</h2>
                <form className={s.items} onSubmit={handleSubmit(onSubmit)}>
                    <TextField className={s.item} id="outlined-basic" label="Email" variant="outlined" size="small"
                               type='email'
                               {...register('email', {required: true, maxLength: 30})}/>

                    {errors.email && <Alert severity="warning">Обязательное поле! не более 30 символов</Alert>}<br/>
                    <TextField className={s.item} id="outlined-basic" label="Password" variant="outlined" size="small"
                               {...register('password', {required: true})} type='password'/>
                    {errors.password && <Alert severity="warning">Обязательное поле!</Alert>}<br/>
                    Remember Me <Checkbox {...label} {...register('rememberMe')}/><br/>
                    <Button type="submit" className={s.item} variant="contained">Submit</Button><br/>
                    {captchaUrl && <img src={captchaUrl}/>}<br/>
                    {captchaUrl && <input {...register('captcha')}/>}
                </form>
            </div>
        </Backdrop>
    )
}


export default Login