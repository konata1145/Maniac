import React, {useState, useRef} from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Navbar from './components/Navbar';
import NavbarPlus from './components/NavbarPlus';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TuiImageEditor from "tui-image-editor";
import List_add from "./components/List_add";
import Modal from "./Modal";

import "tui-image-editor/dist/tui-image-editor.css"
import "tui-color-picker/dist/tui-color-picker.css"

class ImageEditor extends React.Component {
  rootEl = React.createRef();
  imageEditorInst = null;

  componentDidMount() {
    this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
      ...this.props
    });
  }

  componentWillMount(){
    //this.imageEditorInst.destroy();
    //this.imageEditorInst = null;
  }

  render(){
    return <div ref = {this.rootEl} />;
  }
}



function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

const [content, setWriting] = useState({
    title : '',
    content : ''
})

const [viewContent, setView] = useState([]);

const Value = e => {
  const {name, value} = e.target;
  setWriting({
    ...content,
    [name] : value
  })
  console.log(content);
}

const props = {
  includeUI:{
    meni:["shape", "filter", "text"], 
    initMenu : "filter",
    uiSize : {
      width : "1100px",
      height : "700px"
    },
    menuBarPosition : "bottom"
  },
  cssMaxWidth: 700,
  cssMaxHeight : 500,
  selectionStyle : {
    cornerSize: 20,
    rotatingPointOffset: 70
  }
};

  return (
      <div className = "Board">
        <h2>For Maniac</h2>
        <div className = 'ManiaWrite'>
          <h3>당신들이 찾던 그 취향, 취미들</h3>
          <Router className = "gallery">
          
            <List_add/>
            <NavbarPlus/>
            <Navbar/>
            <Routes>
              <Route path ='/'></Route>
            </Routes>
          </Router>
          <div className = "ImgEdit">
            <ImageEditor {...props} />
          </div>
          {viewContent.map(element =>
            <div>
              <h3>{element.title}</h3>
              <div>
                {parse(element.content)}
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default App;
