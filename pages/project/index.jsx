import { ProjectsTable } from 'components/lists';
import { ProjectService } from 'services';
export default ProjectsTable;
        
export async function getServerSideProps( ) {
    var dataProps , projects;
    dataProps =   await ProjectService.getAll();
    projects = dataProps.projects;

    return {
        props: { projects  }
    }
}