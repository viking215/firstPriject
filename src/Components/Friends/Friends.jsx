import React from "react";
import styles from './friends.module.css'


const Friends = (props) => {
    debugger
    if (props.friendsData.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    fullName: 'Iron Man',
                    status: 'I am Iron Man',
                    location: {city: 'California', country: 'USA'},
                    avaUrl: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
                },
                {
                    id: 2,
                    followed: false,
                    fullName: 'Витек',
                    status: 'что я тут делаю',
                    location: {city: 'Услон', country: 'USSR'},
                    avaUrl: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',

                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Rocket',
                    status: 'Are we going to save the Galaxy again?',
                    location: {city: 'Space', country: 'Space'},
                    avaUrl: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
                },
            ]
        )
    }
debugger
    return <div>
        {
            props.friendsData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avaUrl} className={styles.avatar}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>unFOLLOW</button>
                                    : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Friends