import React , {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';


function SidebarData(){
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

  return (
      <div className = "Board">
        <h1>For Maniac</h1>
        <div className = 'ManiaWrite'>
          <h1>어서오세요!</h1>
          <h2>
            이곳은 000 게시판입니다
          </h2>
          {viewContent.map(element =>
            <div>
              <h3>{element.title}</h3>
              <div>
                {parse(element.content)}
              </div>
            </div>
          )}
        </div>
        <div className = 'wrapper'>
          <input className = "title" type = 'text' placeholder = '게시글 제목' onChange={Value} name = 'title'/> 
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setWriting({
                          ...content,
                          content: data
                        })
                        console.log(content)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        </div>
        <button className="submit"
        onClick={() => {
          setView(viewContent.concat({...content}));
        }
        }>업로드</button>
      </div>
  )
}

export default SidebarData;