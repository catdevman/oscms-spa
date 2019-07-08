import API from '../API';
import { Auth } from 'aws-amplify';
export const GET_PLOTS = 'GET_PLOTS';
export const GET_PLOT = 'GET_PLOT';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT = 'GET_CONTACT';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const GET_CEMETERIES = 'GET_CEMETERIES';

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

export function getCurrentUser(){
  const user = Auth.currentAuthenticatedUser();
  return {
    type: GET_CURRENT_USER,
    payload: user
  };
}

export function getCemeteries(){
  const cemeteries = API.getCemeteries();
  return {
    type: GET_CEMETERIES,
    payload: cemeteries
  };
}

export default { getPlots, getPlot, getContacts, getContact, getCurrentUser };
