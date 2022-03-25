import Root from "./components/_root"
import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
   name: "my-first-theme",
   roots: {
      theme: Root,
   },
   state: {
      theme: {
         isUrlVisible: true,
      }
   },
   actions: {
      theme: {
         toggleUrl: ({ state }) => {
            state.theme.isUrlVisible = !state.theme.isUrlVisible
         },
      }
   },
   libraries: {
      html2react: {
         processors: [link]
      }
   }
}

export default myFirstTheme