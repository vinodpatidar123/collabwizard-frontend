// import url from "../config/apiendpoint";
import { baseURL } from "./baseurl";

export const addResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource';
  // console.log("req",request.resource);
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer ' +request.token
    },
    body: JSON.stringify(request.resource.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error =>{ return error })
};

export const getResourceService = (request) => {
  const API_ENDPOINT = baseURL+'/resource';

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer '+request.token
    },
    // body: JSON.stringify(request.resource.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    }).catch(error =>{ return error })
};

export const deleteResourceService = (request) => {
  // console.log(request.resourceId)
  const API_ENDPOINT = baseURL+'/resource/'+request.resourceId;

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*",
      'Authorization': 'Bearer '+request.token
    },
    // body: JSON.stringify(request.resource.values)
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    }).catch(error =>{ return error })
};