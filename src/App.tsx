  
import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <SideBar
          selectedGenreId={selectedGenreId}
          setSelectedGenreId={setSelectedGenreId}
        />
      </nav>

      <div className="container">
        <Content
          selectedGenreId={selectedGenreId}
        />
      </div>
    </div>
  )
}