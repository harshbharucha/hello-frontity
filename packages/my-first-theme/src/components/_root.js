import React from "react"
import { connect } from "frontity"

import MetaHead from "./seo/head"

import Header from "./header/_header"
import Main from "./main/_main"
import GlobalStyles from "./styles/global"

const Root = (frontity) => {
   const currentPostData = frontity.state.source.get(frontity.state.router.link)
   return (
      <>
         <MetaHead currentPostData={currentPostData && currentPostData}  />
         <Header currentPostData={currentPostData} />
         <Main currentPostData={currentPostData} />
         <GlobalStyles />
      </>
   )
}

export default connect(Root)


