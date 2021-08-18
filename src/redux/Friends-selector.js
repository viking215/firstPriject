import {createSelector} from "reselect";

const FriendsDataSelector = (state) => {
    return state.friendsData.friendsData
}

export const FrieendsData = createSelector(FriendsDataSelector, (friendData) => {
    return friendData.filter(u => true)
})

export const PageSize = (state) => {
    return state.friendsData.pageSize
}

export const TotalUsersCount = (state) => {
    return state.friendsData.totalUsersCount
}

export const CurrentPage = (state) => {
    return state.friendsData.currentPage
}

export const IsFetching = (state) => {
    return state.friendsData.isFetching
}

export const FollowingInProgress = (state) => {
    return state.friendsData.followingInProgress
}