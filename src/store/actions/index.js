import { onFailed, pendingStatus, storePhones } from "../../common/strings";
import config from "../../config";

/**
 * Server call to fetch phone catalogue
 */
export const fetchPhoneRecords = (dispatch) => {
    dispatch(handlePending());
    try{
        fetch(`${config.api.catalogue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response=> { return response.json(); })
        .then((response) => {
            if(response.status){
                dispatch(onSuccess(response.model))
            }
            else{
                dispatch(onFail("Unable to fetch phone catalogue from the server. Please try again."))
            }
        })
        .catch((error) => {
            console.error(error);
            dispatch(onFail(error))
        });
    }
    catch(err){
        console.log("Unable to fetch records", err);
        dispatch(onFail("Error in fetching records " + err))
    }
}

/**
 * On successful data retrieval
 */
const handlePending = () => {
    return{
        type: pendingStatus
    }
}

/**
 * On successful data retrieval
 */
const onSuccess = (data) => {
    return {
        type: storePhones,
        payload: data
    }
}

/** 
 * On failure in case the data is not retrieved successfully or 
 * there is some issue while trying to connect to the server.
**/
const onFail = (error) => {
    return {
        type: onFailed,
        error: error
    }
}