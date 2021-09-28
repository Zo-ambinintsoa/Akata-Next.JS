import { useState, useEffect } from 'react';
import { Link } from 'components';
import { useRouter } from 'next/router';
import { ProjectService } from 'services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt , faEye , faPlus} from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard() {

    const [projects, setProjects] = useState(null);
    var x;
    useEffect(() => {
         ProjectService.getAll().then(x => setProjects(x));
    }, []);

    return (
        <div>

                    <div className="row">
                    {projects && projects.projects.map(Project =>
                        
                        <div className="col-xl-4 col-md-6 py-3 wow zoomIn" key={Project.id}>
                            <div className="card shadow-sm rounded-lg h-100">
                                <div className="card-header bg-transparent border-bottom-0">
                                    <div className="row align-items-center">
                                        <div className="col-sm">
                                            <h4 className="font-weight-light mb-0">{Project.name}</h4>
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
                                                                <Link href={`/project/detail/${Project.id}`} className="btn btn-sm btn-outline-warning mr-1 rounded-circle " alt='view detail'><FontAwesomeIcon icon={faEye} /></Link>
                                                                {/* <Link href={`/Project/edit/${Project.id}`} className="btn btn-sm btn-outline-info mr-1 rounded-circle "><FontAwesomeIcon icon={faEdit} /></Link> */}
                                                            </div>
                                                    </div>
                                                 </div>
                                                <div className="mb-0" > <p>Chef de Projet  :</p><h4 className=" text-info">{Project.owner.name}</h4></div>  
                                                
                                                <p className="mt-1">States : {Project.state.name}</p>
                                                <h5 className="mt-1">Debut : {Project.estimated_start}</h5>
                                                <h5>Fin : {Project.estimated_end}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                    {!projects &&
                                    <div className="col">
                                        <h6 className="text-uppercase">Internal Error</h6>
                                        <p className="text-muted">
                                            Look like we can't load the data <br />
                                           You may need to refresh the page or comeback later <span aria-label="ghosty in the machine" role="img">👻</span>
                                        </p>
                                        <Link href="./" className="btn btn-lg btn-primary">Return Home</Link>
                                    </div>
                    }
                    {projects && !projects.projects.length &&
                                <div className="col">
                                    <h6 className="text-uppercase">No Project To Show</h6>
                                <Link href="./" className="btn btn-lg btn-primary">Return Home</Link>
                                </div>
                    }
                    </div>
        </div>
    )
}
