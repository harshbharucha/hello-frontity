import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => <SpinnerDiv />

export default Loading

const spinKeyframes = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`

const SpinnerDiv = styled.div`
   border: 12px solid #eee;
   border-top: 12px solid steelblue;
   border-radius: 50%;
   width: 80px;
   height: 80px;
   animation: ${spinKeyframes} 2s linear infinite;
`