import s from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.rec}>
                Здесь могла быть ваша реклама!
            </div>
            <div className={s.inf}>
                ava + descr
            </div>
        </div>

    )
}

export default ProfileInfo;