import { useState, useEffect } from 'react';
import { Link } from 'components';
import { useRouter } from 'next/router';
import { taskService } from 'services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit  , faEye , faPlus} from '@fortawesome/free-solid-svg-icons'

export default function TaskCard(props) {

    const router = useRouter();

    const [tasks, setTasks] = useState(null);
    var x;
    useEffect(() => {
         taskService.getAll().then(x => setTasks(x));
    }, []);

    function deleteTask(id) {
        setTasks(tasks.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        taskService.delete(id).then(() => {
            setTasks(tasks => tasks.filter(x => x.id !== id));
        });
    }
    return (
        <div>

                    <div className="row">
                    {tasks && tasks.tasks.map(Task =>
                        
                        <div className="col-xl-4 col-md-6 py-3 wow zoomIn" key={Task.id}>
                            <div className="card shadow-sm rounded-lg h-100">
                                <div className="card-header bg-transparent border-bottom-0">
                                    <div className="row align-items-center">
                                        <div className="col-sm">
                                            <h4 className="font-weight-light mb-0">{Task.title}</h4>
                                        </div>
                                        <div className="col-sm-auto ml-auto">
                                            <h4 className="mb-0 mt-1"><span className="icons icon-paypal"></span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded-lg border-0 mt-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="card-body py-2 text-truncate">
                                                <div className=" float-right">  
                                                    <div className="col text-danger ">
                                                        <h4 className="">actions</h4>
                                                        <div class="dropdown-divider"></div>
                                                            <div  className="mb-0 mx-auto d-flex justify-content-center" >
                                                                <Link href={`/Task/view/${Task.id}`} className="btn btn-sm btn-outline-warning mr-1 rounded-circle " alt='view detail'><FontAwesomeIcon icon={faEye} /></Link>
                                                                <Link href={`/Task/edit/${Task.id}`} className="btn btn-sm btn-outline-info mr-1 rounded-circle "><FontAwesomeIcon icon={faEdit} /></Link>
                                                            </div>
                                                    </div>
                                                 </div>
                                                <div className="mb-0" > <p>Executor  :</p><h4 className=" text-info">{Task.executor.name}</h4></div>  
                                                
                                                <p className="mt-1">States : {Task.state.name}</p>
                                                <h5 className="mt-1">Debut : {Task.estimated_start}</h5>
                                                <h5>Fin : {Task.estimated_end}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                    {!tasks &&
                                    <div className="col">
                                        <h6 className="text-uppercase">Internal Error</h6>
                                        <p className="text-muted">
                                            Look like we can't load the data <br />
                                           You may need to refresh the page or comeback later <span aria-label="ghosty in the machine" role="img">👻</span>
                                        </p>
                                        <Link href="./" className="btn btn-lg btn-primary">Return Home</Link>
                                    </div>
                    }
                    {tasks && !tasks.tasks.length &&
                                <div className="col">
                                    <h6 className="text-uppercase">No Task To Show</h6>
                                <Link href="./" className="btn btn-lg btn-primary">Return Home</Link>
                                </div>
                    }
                    </div>
        </div>
    )
}
