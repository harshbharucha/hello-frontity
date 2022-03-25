import React, { useState, useEffect } from "react"
import { connect, styled } from "frontity"
import dayjs from "dayjs"

import initMap from "../helper/map"

import { Wrapper, Status } from "@googlemaps/react-wrapper";

// import { withScriptjs, GoogleMap, Marker, withGoogleMap } from "react-google-maps"

const DestinationsPost = ({ state, libraries, currentPostData }) => {
    const postData = state.source[currentPostData.type][currentPostData.id];
    const Html2React = libraries.html2react.Component
    console.log(postData)
    useEffect(() => {
        initMap();
    })
    return (
        <>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPVmPp-WBzXhkqVvBdqtt3g7AS9t8R7WA" async></script>
            <h2>{postData.title.rendered}</h2>
            <br />
            <div id="map" style={{ width: "100%", height: "500px" }}></div>
            {/* <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> */}
            <br />
            {currentPostData.isPost && (
                <PostInfoDiv>
                    <p>
                        <strong>Date: </strong>{dayjs(postData.date).format("DD MMMM YYYY")}
                    </p>
                    <p>
                        <strong>Author: </strong>{state.source.author[postData.author].name}
                    </p>
                </PostInfoDiv>
            )}
            <Html2React html={postData.content.rendered} />
        </>
    )
}

const PostInfoDiv = styled.div`
    background-image: linear-gradient(to right, #f4f4f4, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;

    & > p {
        margin: 0;
    }
`

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//     </GoogleMap>
// ))

export default connect(DestinationsPost)
