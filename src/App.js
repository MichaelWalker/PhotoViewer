import React from 'react';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";

function App() {
  return (
    <main>
      <h1>Photo Viewer</h1>
      <PhotoViewer imageUrl="https://i.picsum.photos/id/223/200/300.jpg?hmac=IZftr2PJy4auHpfBpLuMtFhsxgQYlUgXdV5rFwjGItQ"/>
    </main>
  );
}

export default App;
