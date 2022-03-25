import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Archive = ({ currentPostData, state, actions, libraries }) => {
    const Html2React = libraries.html2react.Component
    return (
        <ContainerDiv>
            {currentPostData.items.map((item, index) => {
                const post = state.source[item.type][item.id]
                return (
                    <div key={index}>
                        <ItemDiv>
                            <RowDiv>
                                {currentPostData.isDestinationsArchive && (
                                    <ColumnDiv style={{width: 160}}>
                                        <ContinentDiv>
                                            <span style={{textAlign: "center"}}>{state.source.regions[post.regions[0]].name}</span>
                                        </ContinentDiv>
                                    </ColumnDiv>
                                )}
                                <ColumnDiv style={{width: "100%"}}>
                                    <Link className="post-link" key={item.id} link={post.link}>
                                        {post.title.rendered}
                                    </Link>
                                    <Html2React html={post.excerpt.rendered} />
                                </ColumnDiv>
                            </RowDiv>
                        </ItemDiv>
                        <br />
                    </div>
                )
            })}
            <PrevNextDiv>
                {currentPostData.previous && (
                    <button
                        onClick={() => {
                            actions.router.set(currentPostData.previous)
                        }}
                    >
                        &#171; Prev
                    </button>
                )}
                {currentPostData.next && (
                    <button
                        onClick={() => {
                            actions.router.set(currentPostData.next)
                        }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextDiv>
        </ContainerDiv>
    )
}

export default connect(Archive)

const ContainerDiv = styled.div`
    & .post-link {
        display: block;
        margin: 0 0 6px;
        font-size: 1.2em;
        color: steelblue;
        text-decoration: none;
    }
`
const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1em;
`
const ColumnDiv = styled.div`
    padding: 0.5em;
`

const ItemDiv = styled.div`
    background-color: #fafafa;
    padding: 1em;
`

const ContinentDiv = styled.div`
    background-color: steelblue;
    color: white;
    font-size: 1.2em;
    height: 100%;
    padding: 0 1em;
    display: flex; 
    justify-content: center; 
    flex-direction: column;
`

const PrevNextDiv = styled.div`
    padding-top: 1.5em;

    & > button {
        background: #eee;
        text-decoration: none;
        padding: 0.5em 1em;
        color: #888;
        border: 1px solid #aaa;
        font-size: 0.8em;
        margin-right: 2em;
    }
    & > button:hover {
        cursor: pointer;
    }
`
