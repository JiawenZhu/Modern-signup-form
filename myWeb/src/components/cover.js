import React, { Component } from "react";

class Cover extends Component {
    render() {
        return (
            <div style={{ paddingLeft: "100px" }}>
                <div
                    style={{
                        marginTop: "100px",
                        fontWeight: "bold",
                        fontSize: "70px"
                    }}
                >
                    Powerful
                    <br />
                    Instagram Growth
                </div>
                <div style={{ fontSize: "18px" }}>
                    Our service helps you grow your Instagram
                    <br />
                    through organic marketing techniques.
                    <br />
                    <br />
                    Real growth, real people.
                </div>
                <br />
                <br />
                <button
                    style={{
                        height: "70px",
                        width: "270px",
                        backgroundColor: "red",
                        color: "white",
                        border: "1px solid red",
                        marginBottom: "50px",
                        borderRadius: "4px",
                    }}
                >
                    Get started
                </button>
            </div>
        );
    }
}

export default Cover;
