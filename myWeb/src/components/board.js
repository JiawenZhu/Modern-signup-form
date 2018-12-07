import React, { Component } from "react";

const board = {
    paddingLeft: "100px",
    marginLeft: "50px",
    marginTop: "-450px",
    height: "400px",
    width: "700px",
    position: "relative",
    zIndex: "5"
};

const boardIn = {
    opacity: ".8",
    height: "400px",
    width: "700px",
    zIndex: 1,
    backgroundColor: "white",
    position: "relative"
};

const textBoard = {
    width: "700px",
    paddingLeft: "30px",
    paddingTop: "20px",
    paddingRight: "20px",
    zIndex: 5,
    position: "relative",
    marginTop: "-400px"
};
class Board extends Component {
    render() {
        return (
            <div style={board}>
                <div style={boardIn} />
                <div style={textBoard}>
                    <h3 style={{ fontSize: "50px", fontWeight: "bold" }}>
                        Target your followers.
                    </h3>
                    <p style={{ fontSize: "21px", fontWeight: "200" }}>
                        Instagram is a diverse community with over 800 million
                        users – with our service, you can target any type of
                        user from any industry.
                        <br />
                        <br />
                        Whether you’re an individual, a business, or an
                        influencer, our targeted growth will help you{" "}
                        <span style={{ fontWeight: "bold" }}>
                            get Instagram famous.
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Board;
