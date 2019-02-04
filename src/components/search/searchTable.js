import React from "react";
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Get } from 'react-axios'
import {DecodeStringWithTrailing} from "../../utils/ServerCalls";
import NameColumn from './nameColumn';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
//
// const styles = theme => ({
//     root: {
//         width: '100%',
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//     },
// });


class SearchTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchQuery: '',
            lastSearchQuery: ''
        };
    }

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "secondary",
                    width: "100%",
                    overflowX: "auto"
                }
            }
        }
    });




    // https://spiraldocs.blob.core.windows.net/spiraldocs/OEMandResellerFiles/2010-152-JS%20I.J.%20White%20RFQ005%20SEF%20062910x.pdf
    columns = [
        {
            name: "Document Name",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <NameColumn value={value} linkVal={tableMeta.rowData[4]}/>
                    )
                }
            }

        },
        {
            name: "People",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "Locations",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "organizations",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "Path",
            options: {
                sort: false,
                filter: false,
            }
        },
    ];

    options = {
        responsive: 'scroll',
        serverSide: true,
        resizableColumns: true,
        pagination: false,

    };


    // changePage = (page) => {
    //     this.xhrRequest(`/myApiServer?page=${page}`).then(data => {
    //         this.setState({
    //             page: page,
    //             data
    //         });
    //     });
    // };

    // Post a request for a user with a given ID
    render() {
        let searchField = this.props.searchQuery;
        return (
            <div>
                <Get url="http://localhost:5000/api/search/search" params={{searchQuery: searchField}}>
                {(error, response, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message}
                            <button onClick={() => makeRequest({params: {reload: true}})}>Retry</button>
                        </div>)
                    } else if (isLoading) {
                        return (<div>Loading...</div>)
                    } else if (response !== null) {
                        let newArr = [];
                        response.data.results.map(function (result, doc) {
                            const arr = [];
                            arr.push(result.document.metadata_storage_name);
                            arr.push(result.document.people);
                            arr.push(result.document.locations);
                            arr.push(result.document.organizations);
                            arr.push(DecodeStringWithTrailing(result.document.metadata_storage_path));
                            newArr.push(arr);

                        });
                        return (
                            <MuiThemeProvider theme={this.getMuiTheme()}>
                                <MUIDataTable title={"Search Results"} data={newArr} count={newArr.length}
                                              columns={this.columns} options={this.options}/>
                            </MuiThemeProvider>
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
                </Get>
            </div>
        )
    }
}

export default SearchTable;