import React from "react"
import { connect, Head } from "frontity"

const MetaHead = ({ state, currentPostData }) => {
   const postData = currentPostData.id && state.source[currentPostData.type][currentPostData.id];  
   return (
      <Head>
         <title>{postData ? (postData.title.rendered + "-") :"" } Hello Frontity</title>
         <meta name="description" content={ postData && postData.excerpt.rendered } />
      </Head>
   )
}

export default connect(MetaHead)