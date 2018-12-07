import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

const images = ["2.jpg", "3.jpg"];

const item = {
    width: "200px",
    height: "500px",
    float: "left",
    position: "relative",
    zIndex: 1
};

class SlideShow extends Component {
    render() {
        return (
            <div style={{ zIndex: 1, height: "502px", width: "1807px" }}>
                <div
                    style={{
                        //border: "3px solid green",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "1806px",
                        height: "501px",
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%,0%)"
                    }}
                >
                    {/*<div style={{float: "left", width: "100%"}}>
                    <div style={{
                        margin: "10px 10px 10px 10px",
                        border: "2px solid black", 
                        height: "300px",
                        marginLeft: "20px"
                    }}>
                        Text
                    </div>
                </div>
                */}
                    <div style={{ zIndex: 1 }}>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                        <div style={item}>
                            <Slide
                                images={images}
                                duration={2000}
                                transitionDuration={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideShow;
