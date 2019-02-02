import React from "react";
import MUIDataTable from 'mui-datatables';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


class SearchTable extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        users: []
    };

    componentDidMount() {
        fetch("http://localhost:5000/api/spiralusers/")
            .then(response => response.json())
            .then(data => {
                this.setState({users: data})
            });
    }




    columns =  ["Document Name", "Locations", "People", "Organizations"]

    options = {
        responsive: 'scroll',
        serverSide: true,
    };


    // Post a request for a user with a given ID
    render() {

        return (
            <div>
                <Get url="http://localhost:5000/api/search/" params={{searchQuery: "surging"}}>
                    {(error, response, isLoading, makeRequest) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                        }
                        else if(isLoading) {
                            return (<div>Loading...</div>)
                        }
                        else if(response !== null) {
                            var newArr = [];
                            response.data.results.map(function(result, doc){
                                const arr = []
                                arr.push(result.document.metadata_storage_name);
                                arr.push(result.document.locations);
                                arr.push(result.document.organizations);
                                arr.push(result.document.people);
                                newArr.push(arr)
                            });
                            return( <MUIDataTable title={"Search Results"} data={newArr} columns={this.columns} options={this.options} />)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>
        )
    }
}

export default SearchTable;