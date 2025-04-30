import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';

type Project = {
  id: number;
  name: string;
  url: string;
  description: string;
};

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
              <h1>dailydev-portfolio</h1>
              <ul>
                {projects.map((proj) => (
                  <li key={proj.id}>
                    <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
                    <p>{proj.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
