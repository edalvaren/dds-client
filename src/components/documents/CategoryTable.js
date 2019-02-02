import MaterialTable from 'material-table'
import React, { Component } from 'react'
import {apiRequest} from "../../utils/ServerCalls";


class CatTable extends Component {
    state = {
        users: []}

    componentDidMount() {
        this.getData();
    }

    getData = ()  => {
        apiRequest().then(data => {
            this.setState({users: this.renderusertable(data)})
            // this.setState({users: (x.map(y => y.id)))}
        });
    };

    renderusertable = (users) => {
        let arr = [];
        let arr2 = [];
        users.map(user => arr.push([user.firstName, user.email, user.lastName]));
        return (arr.map(x => x.toString()))
    };

    render() {

        return (
            <div>
                <MaterialTable
                    columns={[
                        { title: 'First Name', field: 'firstName'},
                        { title: 'Last Name', field: 'lastName'},
                        { title: 'Email', field: 'email'}
                    ]}
                    data={this.state.users} title="Users"/>
            </div>
        )
    }
}

export default CatTable;