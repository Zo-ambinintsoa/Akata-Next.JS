import { projectServices } from 'services';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getCommentById();
        case 'PUT':
            return updateComment();
        case 'DELETE':
            return deleteComment();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getCommentById() {
        const user = projectServices.getCommentById(req.query.id);
        return res.status(200).json(user);
    }

    function updateComment() {
        try {
            projectServices.updateComment(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteComment() {
        projectServices.deleteComment(req.query.id);
        return res.status(200).json({});
    }
}
