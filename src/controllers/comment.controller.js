let _commentServices = null;

class CommentController{
    constructor({CommentService}){
        _commentServices = CommentService;
    }

    async get(req, res){
        const  {commentId} = req.params;
        const comment = await _commentServices.get(commentId);
        return res.send(comment);
    }

    async update(req, res){
        const {body} = req;
        const {commentId} = req.params;
        const updatedComment = await _commentServices.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res){
        const {commnetId} = req.params;
        const deletedComment = await _commentServices.delete(commnetId);
        return res.send(deletedComment);
    }

    async getIdeasComments(req, res){
        const {ideaId} = req.params;
        const comments = await _commentServices.getIdeasComments(ideaId);
        return res.send(comments);
    }


    async createComment(req, res){
        const {body} = req;
        const {ideaId} = req.params;
        const createComment = await _commentServices.createComment(body, ideaId);
        return res.status(201).send(createComment);
    }

}

module.exports = CommentController;
