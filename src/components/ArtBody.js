import React, { Component } from "react";
import $ from "jquery";

export class ArtBody extends Component {
  constructor(props) {
    super(props);
    this.copyHex = this.copyHex.bind(this);
  }
  copyHex(hexColor) {
    const el = document.createElement("textarea");
    el.value = hexColor;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    $("#copiedToBoard").show();
    setTimeout(function() {
      $("#copiedToBoard").fadeOut("slow");
    }, 1500);
    this.props.addToPalette(hexColor); // change it to state 3 (lighten map and remove modal)
  }
  render() {
    return (
      <div className="card">
        <h1>{this.props.piece.title}</h1>
        <img src={this.props.piece.primaryimageurl} width="300px"></img>
        <div class="boxContainer">
          <div
            className="boxes"
            style={{ backgroundColor: this.props.piece.colors[0].color }}
            onClick={() => {
              this.copyHex(this.props.piece.colors[0].color);
            }}
          ></div>
          <div
            className="boxes"
            style={{ backgroundColor: this.props.piece.colors[1].color }}
            onClick={() => {
              this.copyHex(this.props.piece.colors[1].color);
            }}
          ></div>
          <div
            className="boxes"
            style={{ backgroundColor: this.props.piece.colors[2].color }}
            onClick={() => {
              this.copyHex(this.props.piece.colors[2].color);
            }}
          ></div>
          <div
            className="boxes"
            style={{ backgroundColor: this.props.piece.colors[3].color }}
            onClick={() => {
              this.copyHex(this.props.piece.colors[3].color);
            }}
          ></div>
          <div
            className="boxes"
            style={{ backgroundColor: this.props.piece.colors[4].color }}
            onClick={() => {
              this.copyHex(this.props.piece.colors[4].color);
            }}
          ></div>
        </div>
        <div id="copiedToBoard">Copied to Clipboard!</div>
      </div>
    );
  }
}

export default ArtBody;
