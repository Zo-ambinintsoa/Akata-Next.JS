import { User } from 'components/forms';
import { userService } from 'services';
export default User;

export async function getServerSideProps() {
   
    const profiles = await userService.getProfile();
    return {
        props: { profiles}
    }
}