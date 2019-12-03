import React, { Component } from "react";
import { Panel } from "primereact/panel";
import App from "../styles/App.css";
import {Button,Segment,Form} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import req from "../helper/api";

export default class AddedRecords extends Component {
  constructor(props) {
    super(props);
    this.state={
      edit:false,
      title:"",
      findings:"",
      name:""
    }
    this.editForRecords = this.editForRecords.bind(this);
  }
 


  async editForRecords(e){
    e.preventDefault()
    const body = {
      title: this.state.title,
      findings: this.state.findings,
      name: this.state.name,
    };
    await req
      .updateRecords(this.props.location.state.id, body)
      .then(resp => {
        this.setState({ toAdminHome: true });
        console.log("updaterecord: ",resp)
      })
      .catch(err => {
        console.log(err);
      });

  }
  handleCancel = () => {
    this.setState({ visible: true });
    
  }

  render() {
    const header = (
          <div className="med-header">
          <h3 >{this.props.record.date}</h3>
          </div>

    );
    const button = this.state.edit?(
    
        <div>
          <Segment id="segment" inverted color='teal'>
            <Button id = "segment-btn" basic inverted color="teal" onClick={this.handleSubmit}>
              Update
            </Button>
            <Link to="admin">
            <Button id = "segment-btn" basic inverted color="teal" onClick={this.handleCancel}>
              Cancel
            </Button>
          </Link>
          </Segment><br/>
        </div>
      ) : (
        <Segment id="segment" inverted color='teal'>
          <Button id = "segment-btn" basic inverted color="teal" onClick={this.editForRecords}>
            Edit
          </Button>
        </Segment>
      );

    
    // <Segment id="segment" inverted color='teal'>
    //       <Button id = "segment-btn" basic inverted color="teal" onClick={this.handleSubmit}>
    //         Update
    //       </Button>
    //       <Link to="home">
    //       <Button id = "segment-btn" basic inverted color="teal" onClick={this.onClick}>
    //         Cancel
    //       </Button>
    //     </Link>
    //     </Segment>
    return (
      <div>
        {/* <div className="content-section implementation">
          <Panel className="recpan p-panel-titlebar" header={header}>
            <h4 >Condition: {this.props.record.title}</h4>
            <h4>Findings: {this.props.record.findings}</h4>
            <h4>Primary Care Physician/Clinician: {this.props.record.name}</h4>
            <Segment id="segment" inverted color='teal'>
              <center>
              <Button id = "segment-btn" basic inverted color="teal" onClick={this.handleSubmit}>
                Edit
              </Button>
              </center>
            </Segment>
          </Panel>
        </div> */}
        <div className="content-section implementation">
          <Panel className="recpan p-panel-titlebar" header={header}>
          <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    // icon="birthday cake"
                    label="Condition:"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                    id="input"
                  >{this.props.record.title}</Form.Input>
            </Form.Group>
            <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    // icon="birthday cake"
                    label="Findings:"
                    // placeholder="Findings"
                    value={this.state.findings}
                    onChange={e => this.setState({ findings: e.target.value })}
                    id="input"
                  >{this.props.record.findings}</Form.Input>
            </Form.Group>
            <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    // icon="birthday cake"
                    label="Primary Care Physician/Clinician:"
                    // placeholder="Primary Care Physician/Clinician"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    id="input"
                  >{this.props.record.name}</Form.Input>
            </Form.Group> 
            <center>
            {button}
            </center>
            
          </Panel> 
         </div> 
      </div>
    );
  }
}
