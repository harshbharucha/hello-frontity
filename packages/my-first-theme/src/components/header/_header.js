import React from "react"
import { connect, styled } from "frontity"
import Nav from "./nav"

const Header = ({ currentPostData, state, actions }) => {
    return (
        <StyledHeader isPostType={currentPostData.isPostType} isPage={currentPostData.isPage}>
            <HeaderContentDiv>
                <h1>Hello Frontity</h1>
                {state.theme.isUrlVisible
                    ? <>
                        Current URL: {state.router.link} &nbsp;&nbsp;
                        <URLButton onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</URLButton>
                    </>
                    : <URLButton onClick={actions.theme.toggleUrl}>Show URL &#x3e;</URLButton>
                }
                <Nav />
                <br /><hr /><br />
            </HeaderContentDiv>
        </StyledHeader>
    )
}

export default connect(Header)

const StyledHeader = styled.header`
   background-color: #e5edee;
   border-width: 0 0 8px 0;
   border-style: solid;
   border-color: ${props => props.isPostType ? (props.isPage ? 'lightsteelblue' : 'lightseagreen') : 'maroon'};

   h1 {
   color: #4a4a4a;
   }
`
const HeaderContentDiv = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`

const URLButton = styled.button`
    background: transparent;
    border: none;
    color: #aaa;

    :hover {
        cursor: pointer;
        color: #888;
    }
`