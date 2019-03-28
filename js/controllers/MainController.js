import StickyMemoView from "../views/StickyMemoView.js"

class MainController {
  constructor() {
    const memo = new StickyMemoView(document.querySelector('#sticky_wrap'))
  }
  init() {
    console.log("MainController")
  }
}

export default MainController