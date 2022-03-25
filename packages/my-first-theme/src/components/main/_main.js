import React from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"

import Loading from "../helper/loading"

import FourZeroFour from "./404"

import Archive from "./archive"
import Post from "./post"
import DestinationsPost from "./post-destinations"

const StyledMain = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;

    img {
        max-width: 100%;
    }
    h2 {
        margin: 0.5em 0;
    }
    p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }
        figcaption {
        color: #828282;
        font-size: 0.8em;
        margin-bottom: 1em;
    }
`
const Main = ({currentPostData}) => {
    // console.log(currentPostData)
    return (
        <StyledMain>
            <Switch>
                <Loading when={currentPostData.isFetching} />
                <DestinationsPost currentPostData={currentPostData} when={currentPostData.isDestinations} />
                <Archive currentPostData={currentPostData} when={currentPostData.isArchive} />
                <Post currentPostData={currentPostData} when={currentPostData.isPostType} />
                <FourZeroFour when={currentPostData.isError} /> {/* this is a custom 404 page */}
                <div>This is a UFO</div>                    {/* this is for unidentified content type */}
            </Switch>
        </StyledMain>
    )
}

export default connect(Main)