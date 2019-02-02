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




