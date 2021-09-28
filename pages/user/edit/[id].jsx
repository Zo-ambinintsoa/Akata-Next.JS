import { User } from 'components/forms';
import { userService } from 'services';

export default User;

export async function getServerSideProps({ params }) {
    var user , profiles;
     user = await userService.getById(params.id);
    profiles = user.profile;
    delete user.profile
    return {
        props: { user , profiles}
    }
}