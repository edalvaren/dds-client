import {baseApiURL, spiralUsersRoute} from "./constants";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const unpack = (x) => {

}


/**
 * @return {string}
 */
export function DecodeStringWithTrailing(base64String) {
    var stringLength = base64String.length - 1;
    var noTrail = base64String.substring(0, stringLength);

    return atob(noTrail);
}

export const apiRequest = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/api/spiralusers/')
            .then(response => response.json(),
                error => alert(error))
            .then(data => setTimeout(() => {resolve(data);}, 250) )
    })
};
//
// const unpackData = (unmapped) => {
//     var newData = [];
//   return new Promise((resolve, reject) => {
//       unmapped.map((index, unmapped) =>
//       unpackData.push(unmapped))
//
//   })
// };




