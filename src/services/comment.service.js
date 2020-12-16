const BaseService = require('./base.service');
let _commentRepsository = null, 
    _ideaRepository = null;

class CommentService extends BaseService{
    constructor({CommentRepository, IdeaRepository}){
        super(CommentRepository);
        _commentRepsository = CommentRepository;
        _ideaRepository = IdeaRepository
    }

    async getIdeaComment(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be send';
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);

        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }

        const {comments} = idea;
        return comments;
    }

    async createComment(comment, ideaId, userId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be send';
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);

        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }

        const createComment = await _commentRepsository.create({...comment, author: userId});
        idea.comments.push(createComment);

        return await _ideaRepository.update(ideaId, {comments: idea.comments});
    }

}

module.exports = CommentService;