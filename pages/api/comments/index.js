import { fetch } from 'helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getComments();
        case 'POST':
            return createComment();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getComments() {
        const comments = fetch.getAll();
        return res.status(200).json(comments);
    }
    
    function createComment() {
        try {
            fetch.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}
