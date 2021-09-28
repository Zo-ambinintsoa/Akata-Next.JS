import { useState, useEffect } from 'react';
import { Link } from 'components';
import { userService } from 'services';
import { Table , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt , faEye , faPlus} from '@fortawesome/free-solid-svg-icons'
export default UsersTable;

function UsersTable() {
    const [users, setUsers] = useState(null);
    var x;
    useEffect(() => {
         userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Users</h1>
            <Link href="/user/add" className="btn btn-sm btn-outline-success mb-2 float-right">Add New Users <FontAwesomeIcon icon={faPlus} /></Link>
            <Table bordered striped hover='true' variant="dark">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Role</th>
                        <th style={{ width: '10%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.users.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.profile.name}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/user/details/${user.id}`} className="btn btn-sm btn-outline-warning mr-1 rounded-circle "><FontAwesomeIcon icon={faEye} /></Link>
                                <Link href={`/user/edit/${user.id}`}className="btn btn-sm btn-outline-info mr-1 rounded-circle "><FontAwesomeIcon icon={faEdit} /></Link>
                                <Button onClick={() => deleteUser(user.id)} variant="outline-danger" className="btn btn-sm rounded-circle"  disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span><FontAwesomeIcon icon={faTrashAlt} /></span>
                                    }
                                </Button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}
