import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css"
import axios from 'axios';

class History extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: [{
                     "label":'Test1',
                     "created":"test",
                    "Delete Record":"test"
                    }]
        }
        this.loadHistory()

    }

    deleteHistory(data){
        console.log(data)
        axios.get('/deleteSearch?search='+data).then(res=>{
            console.log(res.data)
            this.loadHistory()
        })
    }

    loadHistory(){
        axios.post('/searchHistory').then(res=>{
            this.setState({posts:res.data})
            console.log(res.data)
        })
    }

    render(){
        const columns = [
            {
                Header:"Searched previously",
                accessor: "search" 
            },
            {
                Header:"Delete Record",
                Cell:  row =>{
                    return (
                        <div>
                        <button className="btn btn-danger" onClick={()=>{this.deleteHistory(row.original._id)}}>Delete</button>
                       
                        </div>
                    )
                }
            }
        ]
        return(
            <ReactTable
                columns={columns}
                data={this.state.posts}
            >
            </ReactTable>
        );
    }
}



export default History;