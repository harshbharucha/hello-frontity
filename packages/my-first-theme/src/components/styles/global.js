import React from "react"
import { Global, css } from "frontity"

const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                html {
                    font-family: system-ui, Verdana, Arial, sans-serif;
                }
            `}
        />
    )
}

export default GlobalStyles