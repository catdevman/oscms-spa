import config from '../config/api.json';
import axios from 'axios';

export function getPlots(){
    const res = axios.get(`${config.url}/plots`);
    return res;
}
export function getPlot(id){
    const res = axios.get(`${config.url}/plots/${id}`);
    return res;
}

export function getContacts(){
    const res = axios.get(`${config.url}/contacts`);
    return res;
}

export function getContact(id){
    const res = axios.get(`${config.url}/contacts/${id}`);
    return res;
}

export function getCemeteries(){
    const res = axios.get(`${config.url}/cemeteries`);
    return res;
}

export default { getPlots, getPlot, getContacts, getContact, getCemeteries };
