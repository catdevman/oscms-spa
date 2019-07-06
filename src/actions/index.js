import API from '../API';
export const GET_PLOTS = 'GET_PLOTS';
export const GET_PLOT = 'GET_PLOT';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT = 'GET_CONTACT';

export function getPlots() {
    const res = API.getPlots();
    return {
        type: GET_PLOTS,
        payload: res
    };
}

export function getPlot(id) {
    const res = API.getPlot(id);
    return {
        type: GET_PLOT,
        payload: res
    };
}

export function getContacts(){
    const res = API.getContacts();
    return {
        type: GET_CONTACTS,
        payload: res
    };
}
export function getContact(id){
    const res = API.getContact(id);
    return {
        type: GET_CONTACT,
        payload: res
    };
}

export default { getPlots, getPlot, getContacts, getContact };