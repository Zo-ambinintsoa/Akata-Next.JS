import { ProjectCard } from 'components/lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt , faEye , faPlus , faUserCircle} from '@fortawesome/free-solid-svg-icons'
export default function testComp() {
    return (
        <>
                           {/* <ul className="list-group" id="contact-list">
                            <li className="list-group-item d-block">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-6 col-md-2">
                                    <img src="profile_4.png" alt="profile pic" className="rounded-circle img-fluid mx-auto d-block bg-light"/>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-10 text-center text-sm-left">
                                        <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                                        <label className="name">Mike Anamenda</label>
                                        <br/> 
                                        <span className="fa fa-map-marker text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                                        <span className="text-muted">5842 Hillcrest Rd</span>
                                        <br/>
                                        <span className="fa fa-phone text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                                        <span className="text-muted small">(870) 288-4149</span>
                                        <br/>
                                        <span className="fa fa-envelope text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                                        <a href="" className="link small text-truncate">mike.ana@example.com</a>
                                    </div>
                                </div>
                            </li>
                            </ul> */}
                            <ProjectCard/>
                            
        </>
    )
}
