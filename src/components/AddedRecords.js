import React, { Component } from "react";
import { Panel } from "primereact/panel";
import App from "../styles/App.css";
import { Button, Segment, Form } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import req from "../helper/api";

export default class AddedRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // edit: false,
      // title: "",
      // findings: "",
      // name: ""
    };
    // this.editForRecords = this.editForRecords.bind(this);
  }
  // componentDidMount(){

  // }

  // async editForRecords(e) {
  //   e.preventDefault();
  //   const body = {
  //     title: this.state.title,
  //     findings: this.state.findings,
  //     name: this.state.name
  //   };
  //   await req
  //     .updateRecords(this.props.location.state.id, body)
  //     .then(resp => {
  //       this.setState({ toAdminHome: true });
  //       console.log("updaterecord: ", resp);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  // handleCancel = () => {
  //   this.setState({ visible: true });
  // };

  render() {
    const header = (
      <div className="med-header">
        <h3>{this.props.record.date}</h3>
      </div>
    );
    return (
      <div>
        <div className="content-section implementation">
          <Panel className="recpan p-panel-titlebar" header={header}>
            <h4 >Condition : {this.props.record.title}</h4>
            <h4>Findings : {this.props.record.findings}</h4>
            <h4>Primary Care Physician/Clinician : {this.props.record.name}</h4>
            <center><Segment id="segment" inverted color="teal">
              <Button
                id="segment-btn"
                basic
                inverted
                color="teal"
                onClick={this.editForRecords}
              >
                Edit
              </Button>
            </Segment></center>
          </Panel>
        </div>
        {/* <div className="content-section implementation">
          <Panel className="recpan p-panel-titlebar" header={header}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Condition:"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                id="input"
              >
                {this.props.record.title}
              </Form.Input>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Findings:"
                value={this.state.findings}
                onChange={e => this.setState({ findings: e.target.value })}
                id="input"
              >
                {this.props.record.findings}
              </Form.Input>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Primary Care Physician/Clinician:"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                id="input"
              >
                {this.props.record.name}
              </Form.Input>
            </Form.Group>
            <div>{button}</div>
          </Panel>
        </div> */}
      </div>
    );
  }
}
