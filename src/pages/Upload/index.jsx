import React from 'react';
import {useParams} from 'react-router-dom'
import Arithmetic from './arithmetic';
import Blog from './blog';
import Other from './other';
function Upload() {
  const {type} = useParams();

  return (
    <div className="Upload">
      {type === 'arithmetic' ? <Arithmetic/> : null}
      {type === 'blog' ? <Blog/> : null}
      {type === 'other' ? <Other/> : null}
    </div>
  );
}

export default Upload;
