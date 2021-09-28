import { ProjectService } from 'services';
import { Project } from 'components/details';

export default Project;

export async function getServerSideProps({ params }) {
    var dataProps , projects , tasks , teams , states;
    dataProps =   await ProjectService.getById(params.id);
    projects = dataProps.project;
    tasks = dataProps.tasks;
    states = dataProps.st;
    teams = dataProps.teams;
    return {
        props: { projects , tasks , teams , states }
    }
}