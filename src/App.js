import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import './App.css'

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");

  const config = {
    readonly: false,
    height: 400,
  };
  const handleUpdate = (e) => {
    if (editor.current && editor.current.value) {
      const editorContent = editor.current.value;
      setContent(editorContent);
    }
  }

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;