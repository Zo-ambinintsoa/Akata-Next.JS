import { Link } from 'components';
import { Wrapper } from 'components';

export default Home;

function Home() {
    return (
        <Wrapper>
            <p><Link href="/user">&gt;&gt; Manage Users</Link></p>
            <p><Link href="/Tasks">&gt;&gt; Manage Tasks</Link></p>
            <p><Link href="/project">&gt;&gt; Manage Project</Link></p>
        </Wrapper>
    );
}
