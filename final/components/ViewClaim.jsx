import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { browserHistory } from 'react-router';
import AppRouter from './AppRoute.jsx';
import { Logger } from 'react-logger-lib';

class ViewClaim extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            claims: [],
            userName:''
            
        }
    }

    componentDidMount() {
        let userName = localStorage.getItem('username');
        this.setState({userName});
        axios.get(`http://localhost:7000/claims`)
            .then(res => {
                const claims = res.data;
                this.setState({ claims });
            })
    }

    update(claim) {
        window.event.preventDefault();
        Logger.of('App.ViewClaim.updatePage').info('claim data', claim);
        browserHistory.push("updateClaim/"+claim.id);
    }
    render() {
        // let myStyle = {
        //     marginTop: "5rem",
        //     marginBottom: "5rem",
        //     marginLeft: "2rem"
        // }
        return (
            
            <React.Fragment>
                <AppRouter username = {this.state.userName}></AppRouter>
                <Container>
                    <div className= "style">
                    <Row>
                        <Table bordered responsive="md" >
                            <thead className="thead-dark">
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Claim Number</th>
                                    <th>Claim Type</th>
                                    <th>Claim Program</th>
                                    <th>Claim Start Date</th>
                                    <th>Claim End Date</th>
                                    <th>Update Claim</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.claims.map((claim, index) =>
                                    <tr key={index}>
                                        <th>{claim.id}</th>
                                        <td>{claim.Employee_Name}</td>
                                        <td>{claim.Claim_Number}</td>
                                        <td>{claim.Claim_Type}</td>
                                        <td>{claim.Claim_Program}</td>
                                        <td>{claim.Claim_Start_Date}</td>
                                        <td>{claim.Claim_End_Date}</td>
                                        <td>
                                          <button> <a href="" onClick={()=> this.update(claim)}>update</a></button> 
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </Table>
                    </Row>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}
export default ViewClaim;