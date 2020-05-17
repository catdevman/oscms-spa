import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

export function getPlots(){
    return API.graphql(graphqlOperation(queries.listLocations));
}
export function getPlot(id){
    return API.graphql(graphqlOperation(queries.getLocation, {id}));
}

export function getContacts(){
    return API.graphql(graphqlOperation(queries.listContacts));
}

export function getContact(id){
    return API.graphql(graphqlOperation(queries.getContact, {id}));
}

export function getCemeteries(){
    return API.graphql(graphqlOperation(queries.listCemeterys));
}

export default { getPlots, getPlot, getContacts, getContact, getCemeteries };
