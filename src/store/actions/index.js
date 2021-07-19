import { storePhones } from "../../common/strings";

const url = "http://192.168.10.9:3000/phones";

export const fetchPhoneRecords = (dispatch) => {
    try{
        fetch(url, {
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