import { useState, useEffect } from 'react';
import { Link } from 'components';
import { ProjectService } from 'services';
import { Table , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt , faEye , faPlus} from '@fortawesome/free-solid-svg-icons'
export default ProjectsTable;

function ProjectsTable() {
    const [projects, setProjects] = useState(null);
    var x;
    useEffect(() => {
         ProjectService.getAll().then(x => setProjects(x));
    }, []);

    function deleteProject(id) {
        setProjects(projects.projects.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        ProjectService.delete(id).then(() => {
            setProjects(projects => projects.projects.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Projects</h1>
            <Link href="/project/add" className="btn btn-sm btn-outline-success mb-2 float-right">Add New project <FontAwesomeIcon icon={faPlus} /></Link>
            <Table striped bordered hover='true' variant="dark" className='rounded'>
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Description</th>
                        <th style={{ width: '30%' }}>States</th>
                        <th style={{ width: '30%' }}>CP</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {projects && projects.projects.map(Project =>
                        <tr key={Project.id}>
                            <td>{Project.name}</td>
                            <td>{Project.description}</td>
                            <td>{Project.state.name}</td>
                            <td>{Project.owner.name}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/project/detail/${Project.id}`} className="btn btn-sm btn-outline-warning mr-1 rounded-circle "><FontAwesomeIcon icon={faEye} /></Link>
                                <Link href={`/project/edit/${Project.id}`} className="btn btn-sm btn-outline-info mr-1 rounded-circle "><FontAwesomeIcon icon={faEdit} /></Link>
                                <Button onClick={() => deleteProject(Project.id)} variant="outline-danger" className="btn btn-sm btn-delete-Project rounded-circle" disabled={Project.isDeleting}>
                                    {Project.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm "></span>
                                        : <span><FontAwesomeIcon icon={faTrashAlt} /></span>
                                    }
                                </Button>
                            </td>
                        </tr>
                    )}
                    {!projects &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {projects && !projects.projects.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Projects To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}
