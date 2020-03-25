import React, { Component } from "react";
import "./App.css";
import logo from "./pics/logo.png";
import pic2 from "./pics/fireplanet2.PNG";
import $ from "jquery";
import ArtBody from "./components/ArtBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      artType: "",
      century: "",
      homePage: true,
      numPages: [],
      currentPage: 1,
      currentPalette: [],
      paletteOn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCentury = this.handleCentury.bind(this);
    this.paletteStateSet = this.paletteStateSet.bind(this);
    this.addToPalette = this.addToPalette.bind(this);
    this.removePaletteEntry = this.removePaletteEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  paletteStateSet() {
    console.log(this.state.paletteOn);
    var paletteOnLocal = !this.state.paletteOn;
    this.setState({
      paletteOn: paletteOnLocal
    });
  }
  removePaletteEntry(index) {
    const updatedPalette = this.state.currentPalette.filter(
      (currentPaletteEntry, todoIndex) => {
        console.log(currentPaletteEntry);
        return currentPaletteEntry !== index;
      }
    );
    console.log(updatedPalette);

    this.setState({ currentPalette: updatedPalette });
  }

  addToPalette = hexColor => {
    var copy = this.state.currentPalette;
    console.log(copy);
    var include = copy.includes(hexColor);
    if (this.state.currentPalette.length < 8 && include == false) {
      copy.push(hexColor);
      this.setState({
        currentPalette: copy
      });
    }
  };
  handleChange(event) {
    this.setState({ artType: event.target.value });
    if (this.state.artType != "" && this.state.century != "") {
      this.performSearch(this.state.artType, this.state.century);
    }
  }

  handleCentury(event) {
    this.setState({ century: event.target.value });
    if (this.state.artType != "" && this.state.century != "") {
      this.performSearch(this.state.artType, this.state.century);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.performSearch(this.state.artType, this.state.century);
  }

  changePages(pageNum) {
    const getString =
      "https://api.harvardartmuseums.org/object?apikey=19142ab0-6cf9-11ea-8bdc-95909fa24347&classification=" +
      this.state.artType +
      "&q=colorcount:>=5&hasimage=1&century=" +
      this.state.century +
      "&page=" +
      pageNum;
    // https://api.harvardartmuseums.org/object?person=33430?apikey=19142ab0-6cf9-11ea-8bdc-95909fa24347

    $.ajax({
      url: getString,
      success: searchResults => {
        this.state.currentPage = pageNum;
        this.state.homePage = false;
        this.state.numPages = [];
        console.log(pageNum);

        for (
          var i = this.state.currentPage;
          i <= searchResults.info.pages;
          i++
        ) {
          this.state.numPages.push(i);
        }

        const results = searchResults.records;
        var artworkCards = [];

        results.forEach(artwork => {
          console.log(artwork);
          const art = (
            <ArtBody piece={artwork} addToPalette={this.addToPalette}></ArtBody>
          );
          artworkCards.push(art);
        });
        this.setState({ rows: artworkCards });
      },
      error: (xhr, status, err) => {
        console.log("error");
      }
    });
  }

  performSearch(classificationInput, centuryInput) {
    const getString =
      "https://api.harvardartmuseums.org/object?apikey=19142ab0-6cf9-11ea-8bdc-95909fa24347&classification=" +
      classificationInput +
      "&q=colorcount:>=5&hasimage=1&century=" +
      centuryInput;

    $.ajax({
      url: getString,
      success: searchResults => {
        this.state.homePage = false;
        this.state.currentPage = 1;
        this.state.numPages = [];
        for (
          var i = this.state.currentPage;
          i <= searchResults.info.pages;
          i++
        ) {
          this.state.numPages.push(i);
        }
        console.log(this.state.numPages);

        const results = searchResults.records;
        var artworkCards = [];

        results.forEach(artwork => {
          console.log(artwork);
          const art = (
            <ArtBody piece={artwork} addToPalette={this.addToPalette}></ArtBody>
          );
          artworkCards.push(art);
        });
        this.setState({ rows: artworkCards });
      },
      error: (xhr, status, err) => {
        console.log("error");
      }
    });
  }

  render() {
    const pageNum = this.state.currentPage;
    const paletteMapped = (
      <div id="paletteContainer">
        {this.state.currentPalette.map(item => (
          <div key={item}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="deletePalette"
              onClick={e => {
                this.removePaletteEntry(item);
              }}
            />{" "}
            <p>{item}</p>{" "}
            <div
              className="paletteColorBox"
              style={{
                backgroundColor: item
              }}
            ></div>
          </div>
        ))}
      </div>
    );
    return (
      <div className="App">
        <div id={this.state.homePage ? "bg" : ""}></div>
        <div id={this.state.homePage ? "bg2" : ""}></div>
        <div
          id="paletteViewer"
          style={{
            display: this.state.paletteOn == true ? "block" : "none"
          }}
        >
          <h1>Saved Palette</h1>

          {paletteMapped}
        </div>
        <FontAwesomeIcon
          icon={faPalette}
          id="palette"
          onClick={() => {
            this.paletteStateSet();
          }}
        />
        <header className="toolbar">
          <ul>
            <li className="title">
              <img src={logo}></img>
            </li>
            <li className="about">About</li>
          </ul>
        </header>
        <div
          id={this.state.homePage ? "homeForm" : "searchPageForm"}
          className={this.state.paletteOn ? "fadeModalPresent" : ""}
        >
          I Want
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.artType} onChange={this.handleChange}>
              <option value="Paintings">Paintings</option>
              <option value="Mosaics">Mosaics</option>
              <option value="Drawings">Drawings</option>
              <option value="Textile%20Arts">Textiles</option>
              <option value="Stained%20Glass">Stained Glass</option>
              <option value="Photographs">Photographs</option>
              <option value="Prints">Prints</option>
            </select>
            from the
            <select value={this.state.century} onChange={this.handleCentury}>
              <option value="14th%20century">14th Century</option>
              <option value="15th%20century">15th Century</option>
              <option value="16th%20century">16th Century</option>
              <option value="17th%20century">17th Century</option>
              <option value="18th%20century">18th Century</option>
              <option value="19th%20century">19th Century</option>
              <option value="20th%20century">20th Century</option>
              <option value="21th%20century">21th Century</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div
          id="contentContainer"
          className={this.state.paletteOn ? "fadeModalPresent" : ""}
          style={{
            display: this.state.homePage == true ? "none" : ""
          }}
        >
          {this.state.rows}
          <br></br>
          <div className="nav">
            {this.state.currentPage > 1 && (
              <button
                className=""
                onClick={() => {
                  this.changePages(this.state.numPages[1] - 2);
                }}
              >
                {this.state.numPages[1] - 2}
              </button>
            )}
            <button
              className="active"
              onClick={() => {
                this.changePages(this.state.numPages[1] - 1);
              }}
            >
              {this.state.numPages[1] - 1}
            </button>
            <button
              className=""
              onClick={() => {
                this.changePages(this.state.numPages[1]);
              }}
            >
              {this.state.numPages[1]}
            </button>
            <button
              className=""
              onClick={() => {
                this.changePages(this.state.numPages[2]);
              }}
            >
              {this.state.numPages[2]}
            </button>
            <button
              className=""
              onClick={() => {
                this.changePages(this.state.numPages[3]);
              }}
            >
              {this.state.numPages[3]}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
