import { selectedPhones, storePhones } from "../../common/strings"

const initialState = {
    phones: null,
    selectedPhone: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case storePhones:
            console.log("Storing records");
            return {
                ...state,
                phones: action.payload
            }
        case selectedPhones:
            return {
                ...state,
                selectedPhone: action.payload 
            }
    }
}