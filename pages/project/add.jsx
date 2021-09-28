import { Project } from 'components/forms';
import { ProjectService } from 'services';
export default Project;


export async function getServerSideProps() {
   
    const states = await ProjectService.getStates();
    console.log(states);
    return {
        props: { states}
    }
}