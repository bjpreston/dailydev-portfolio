import { Link, useParams } from 'react-router-dom';

type Project = {
  id: number;
  name: string;
  url: string;
};

export default function ProjectDetail({ projects }: { projects: Project[] }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
  if (!project) return <p>Project not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{project.name}</h2>
      <p>Internal page for project #{project.id}.</p>
      <p>
        Optional external link:{' '}
        <a href={project.url} target="_blank" rel="noreferrer">
          {project.url}
        </a>
      </p>
      <Link to="/">← Back to all projects</Link>
    </div>
  );
}
