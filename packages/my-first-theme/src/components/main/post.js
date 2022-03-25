import React from "react"
import { connect, styled } from "frontity"
import dayjs from "dayjs"

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

const Post = ({ state, libraries, currentPostData }) => {
    const postData = state.source[currentPostData.type][currentPostData.id];  
    const Html2React = libraries.html2react.Component
    console.log(postData)
    return (
        <div>
            <h2>{postData.title.rendered}</h2>
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
        </div>
    )
}

export default connect(Post)
