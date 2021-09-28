import { ProjectService } from 'services';
import { Project } from 'components/forms';

export default Project;


export async function getServerSideProps({ params }) {
    var dataProps , projects , states;
    dataProps =   await ProjectService.getById(params.id);
    projects = dataProps.project;
    states = dataProps.st;
    return {
        props: { projects , states }
    }
}