import s from './Settings.module.css'

const Settings = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.boxbox1}>box 1</div>
            <div className={s.boxbox2}>box 2</div>
            <div className={s.boxbox1}>box 3</div>
            <div className={s.boxbox2}>box 4</div>
            <div className={s.boxbox1}>box 5</div>
            <div className={s.boxbox2}>box 6</div>

        </div>
    )
}
export default Settings;