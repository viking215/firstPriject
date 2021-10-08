let initialSidebar = {
        friends: [
            {
                id: 1,
                name: 'Joker',
                ava: 'https://images.cdn3.stockunlimited.net/preview1300/joker-avatar_1320501.jpg',
            },
            {
                id: 2,
                name: 'Harle',
                ava: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png',
            },
            {
                id: 3,
                name: 'Pingu',
                ava: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png',
            },
        ]
    };

const sidebarReducer = (state = initialSidebar, action) => {

    return state;

}

export default sidebarReducer;