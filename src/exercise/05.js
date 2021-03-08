// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({style, size="small", ...props}) {
    const className="box--" + size
    return <div className={"box " + className} style={{fontStyle: "italic", ...style}} {...props} />
}

function App() {
  return (
    <div>
      <Box id="box1" lang="en" size="small" style={{backgroundColor:"lightblue"}}>Small Lightblue</Box>
      <Box id="box2" lang="en" size="medium" style={{backgroundColor:"pink"}}>medium pink box</Box>
      <Box id="box3" lang="en" size="large" style={{backgroundColor:"orange"}}>large orange box</Box>
    </div>
  )
}

export default App
