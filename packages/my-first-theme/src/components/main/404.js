import React from "react"
import { connect } from "frontity"

const FourZeroFour = ({ state }) => {
  return (
    <>
      <h2>404 Error</h2>
      <p>
        The path <code style={{display: "inline-block"}}>{state.router.link}</code> cannot be found.
      </p>
    </>
  )
}

export default connect(FourZeroFour)