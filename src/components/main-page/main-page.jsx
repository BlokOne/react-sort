import Header from "../header/header"
import Works from "../works/works"
import { useState } from "react"

function MainPage(props) {
  const [colorCategory, setColorCategory] = useState([true, false, false, false, false])
  return (
    <div >
      <Header />
      <Works props={props} state={colorCategory} setState={setColorCategory} />
    </div>
  )
}

export default MainPage
