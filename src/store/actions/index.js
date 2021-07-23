import { storePhones } from "../../common/strings";
import config from "../../config";

export const fetchPhoneRecords = (dispatch) => {
    try{
        fetch(`${config.api.catalogue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response=> { return response.json(); })
        .then((response) => {
            console.log("Response from server", response);
            dispatch({
                type: storePhones,
                payload: response.model
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    catch(err){
        console.log("Unable to fetch records", err);
    }
}