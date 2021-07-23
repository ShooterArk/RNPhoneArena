import { onFailed, pendingStatus, selectedPhones, storePhones } from "../../common/strings"

const initialState = {
    phones: null,
    selectedPhone: null,
    pending: true,
    failed: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case pendingStatus: 
            return {
                ...state,
                pending: true
            }
        case onFailed: 
            return {
                ...state,
                pending: false,
                failed: true,
                error: action.error
            }
        case storePhones:
            return {
                ...state,
                pending: false,
                failed: false,
                error: null,
                phones: action.payload
            }
        case selectedPhones:
            return {
                ...state,
                selectedPhone: action.payload 
            }
    }
}