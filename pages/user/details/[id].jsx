import { User } from 'components/forms';
import { userService } from 'services';

export default User;

export async function getServerSideProps({ params }) {
    var user ;
     user = await userService.getById(params.id);
    return {
        props: { user }
    }
}