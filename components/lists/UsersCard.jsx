import { useState, useEffect } from 'react';
import { Link } from 'components';
import { taskService } from 'services';
import { Table , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt , faEye , faPlus} from '@fortawesome/free-solid-svg-icons'
export default UsersCard;

function UsersCard() {
    const [tasks, setTasks] = useState(null);
    var x;
    useEffect(() => {
         taskService.getAll().then(x => setTasks(x));
    }, []);

    function deleteTask(id) {
        setTasks(tasks.tasks.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        taskService.delete(id).then(() => {
            setTasks(tasks => tasks.tasks.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Tasks</h1>
            <Link href="/task/add" className="btn btn-sm btn-outline-success mb-2 float-right">Add New task <FontAwesomeIcon icon={faPlus} /></Link>
            <Table striped bordered hover='true' variant="dark" className='rounded'>
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Description</th>
                        <th style={{ width: '30%' }}>States</th>
                        <th style={{ width: '30%' }}>Executor</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.tasks.map(Task =>
                        <tr key={Task.id}>
                            <td>{Task.title}</td>
                            <td>{Task.body}</td>
                            <td>{Task.status.name}</td>
                            <td>{Task.executor.name}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/Task/view/${Task.id}`} className="btn btn-sm btn-outline-warning mr-1 rounded-circle "><FontAwesomeIcon icon={faEye} /></Link>
                                <Link href={`/Task/edit/${Task.id}`} className="btn btn-sm btn-outline-info mr-1 rounded-circle "><FontAwesomeIcon icon={faEdit} /></Link>
                                <Button onClick={() => deleteTask(Task.id)} variant="outline-danger" className="btn btn-sm btn-delete-Task rounded-circle" disabled={Task.isDeleting}>
                                    {Task.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm "></span>
                                        : <span><FontAwesomeIcon icon={faTrashAlt} /></span>
                                    }
                                </Button>
                            </td>
                        </tr>
                    )}
                    {!tasks &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {tasks && !tasks.tasks.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Tasks To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}
