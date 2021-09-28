export default function testList() {
    return (
        <div>
                    <div className="row mt-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xl col-sm-6 pb-3">
                            <div className="card d-block p-1 h-100 shadow-sm">
                                <div className="row h-100 no-gutters">
                                    <div className="col-6 p-3 py-4">
                                        <h5 className="text-truncate">Health</h5>
                                        <h3 className="text-nowrap">99.3%</h3></div>
                                    <div className="col bg-light text-success d-flex">
                                        <h1 className="mb-0 mx-auto align-self-center"><a href="/" className="nav-link pb-0" title="View details"><span className="d-inline-block lnr lnr-heart"></span></a></h1></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl col-sm-6 pb-3">
                            <div className="card d-block p-1 h-100 shadow-sm">
                                <div className="row h-100 no-gutters">
                                    <div className="col-6 p-3 py-4">
                                        <h5 className="text-truncate">Cycles</h5>
                                        <h3>53</h3></div>
                                    <div className="col bg-light text-success d-flex">
                                        <h1 className="mb-0 mx-auto align-self-center"><a href="/" className="nav-link pb-0" title="View details"><span className="d-inline-block lnr lnr-history"></span></a></h1></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl col-sm-6 pb-3">
                            <div className="card d-block p-1 h-100 shadow-sm">
                                <div className="row h-100 no-gutters">
                                    <div className="col-6 p-3 py-4">
                                        <h5 className="text-truncate">Storage</h5>
                                        <h3 className="text-nowrap">69%</h3>
                                    </div>
                                    <div className="col bg-light text-success d-flex">
                                        <h1 className="mb-0 mx-auto align-self-center"><a href="/" className="nav-link pb-0" title="View details"><span className="d-inline-block lnr lnr-database"></span></a></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl col-sm-6 pb-3">
                            <div className="card d-block p-1 h-100 shadow-sm">
                                <div className="row h-100 no-gutters">
                                    <div className="col-6 p-3 py-4">
                                        <h5 className="text-truncate">Signal</h5>
                                        <h3>4.1</h3></div>
                                    <div className="col bg-light text-success d-flex">
                                        <h1 className="mb-0 mx-auto align-self-center"><a href="/" className="nav-link pb-0" title="View details"><i className="lnr lnr-heart-pulse"></i></a></h1></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl py-3">
                            <div className="card h-100 shadow-sm wow fadeInUp" data-wow-delay=".5s">
                                <div className="card-body">
                                    <div className="h4 m-0">
                                        <i className="float-right lnr lnr-cloud-sync"></i>
                                        Latest Build v1.1.6
                                    </div>
                                    <div>75% complete</div>
                                    <div className="progress my-3">
                                        <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-primary w-75"></div>
                                    </div> <small className="text-muted"><a href="#modalSmall" data-toggle="modal">View build log</a></small></div>
                            </div>
                        </div>
                        <div className="col-xl py-3">
                            <div className="card h-100 shadow-sm wow slideInUp">
                                <div className="card-body">
                                    <div className="h4 m-0">
                                        <i className="float-right lnr lnr-database"></i>
                                        24 GB
                                    </div>
                                    <div>Backup in progress...</div>
                                    <div className="progress my-3">
                                        <div role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-dark w-25"></div>
                                    </div> <small className="text-muted">Contact the administrator for reports.</small>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>
    )
}
