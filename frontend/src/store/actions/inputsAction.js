export function addFirstName(newFirstName){
    return {
        type: "ADD_FIRST_NAME",
        payload: newFirstName
    }
}
export function addLastName(newLastName){
    return {
        type: "ADD_LAST_NAME",
        payload: newLastName
    }
}
export function addParticipation(newParticipation){
    return {
        type: "ADD_PARTICIPATION",
        payload: newParticipation
    }
}

