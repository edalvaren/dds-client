import React from "react";
import MUIDataTable from 'mui-datatables';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

import {apiRequest} from "../../utils/ServerCalls";

class UsersTable extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        users: []
    };

    // componentDidMount() {
    //     fetch("http://localhost:5000/api/spiralusers/")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({users: data})
    //         });
    // }


    columns = ["Name", "Email" , "Team"];

    options = {
        responsive: 'scroll',
        serverSide: true,
    };


    // Post a request for a user with a given ID
    render() {

        return (
            <div>
                <Get url="http://localhost:5000/api/spiralusers/">
                    {(error, response, isLoading, makeRequest) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                        }
                        else if(isLoading) {
                            return (<div>Loading...</div>)
                        }
                        else if(response !== null) {
                            var newArr = [];
                            response.data.map(function(user, id){
                                const arr = []
                                arr.push(user.email);
                                arr.push(user.firstName.concat(' ', user.lastName));
                                arr.push(user.team);
                                newArr.push(arr);
                                this.setState({users: newArr});
                            });

                          return( <MUIDataTable title={"Site Users"} data={newArr} columns={this.columns} options={this.options} />)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>
        )
    }
}

export default UsersTable;

