import s from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://lh3.googleusercontent.com/Gtnu9qLIzdMv5ydbezG6IdP74XZi-QWeEoPNDYWE9EI4ou_YzpfVyBlAIz8GUUyb7kpY_vAZ9BLA45hQcN1C6RRKX3Yob5e7liDAg_1uBR90w783o8oKF_HuDDTqbeBho4dz7Oal1wzspWYrRAginrowztKKJ7cHrsqc8nMgDHTKwsf7NboQ6XeoHpfPDJUF3F43s2I6ep38s5s6rUs7v3EV1jz-Su-l_2EmBwvIw3xmA2geh1yHhkayf4tlygzvPbwMnCKsEM9bwxz99MES8O96o9T3EN-Fqi29iiwW3NBQ778WT8dtzdmtXz4SiIjoKw_l_jvhTqDOzaI1W4s4rBApf1hHUf4CgJeY_OtfJqYm57mNiUxig94oQnshyg3ST-ocoVIzPahseHKuDm27PUHT4b3vSM3ebMTV9pGlEjq_a7GcT55blYUmJy8c19GJ0-9QMiAW641JhvvP4P4tT2NFp4q86CbnjQUqSnovZlCn9Y-n7sBh7F8FEKI0d67w_m3RZ7407RiqVCHo-fxPYMbj9HWPYX2S03RFCGK4IqWrplgvx_raGAY0wouXMyJVoQ2EE284-wesUcjHR5WZnOjnGZ6vsRPFjp0arl5dWfqFI-ICP8gXk-9iXqKAGCbFfHBzFRFII3V9npHKJcgwHDKICob9N99Jcy5tNg9G3NlcpHcxDfuv_lGQd71qW8LOo4iwVDSGcoAhsce8GwsINXrd=w1921-h242-no?authuser=0'/>
            </div>
            <div className={s.inf}>
                ava + descr
            </div>
        </div>

    )
}

export default ProfileInfo;