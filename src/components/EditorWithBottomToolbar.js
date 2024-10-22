import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill editor default theme

const EditorWithBottomToolbar = () => {
  const [editorContent, setEditorContent] = useState('');

  // Custom toolbar options
  const modules = {
    toolbar: {
      container: '#toolbar', // Attach custom toolbar
      handlers: {
        // Define any custom handlers here if needed
      },
    },
  };

  return (
    <div className="relative border border-gray-300 rounded-lg">
      {/* The editor */}
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        placeholder="Start writing here..."
        className="h-48"
      />

      {/* Custom bottom toolbar */}
      <div id="toolbar" className="sticky bottom-0 left-0 right-0 flex justify-center bg-gray-100 border-t border-gray-300 p-2 space-x-2">
        <select className="ql-font bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">
          <option value="sans-serif">Sans-serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
        <select className="ql-size bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">
          <option value="small">Small</option>
          <option defaultValue="">Normal</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>
        <button className="ql-bold bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">B</button>
        <button className="ql-italic bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">I</button>
        <button className="ql-underline bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">U</button>
        <button className="ql-link bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">🔗</button>
        <button className="ql-image bg-white border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-200">🖼️</button>
      </div>
    </div>
  );
};

export default EditorWithBottomToolbar;