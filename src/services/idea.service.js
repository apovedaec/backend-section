const BaseService = require('./base.service');
let _ideaRepsository = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepsository = IdeaRepository; 
    }

    async getUserIdeas(author){
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = 'userId must be send';
            throw error;
        }

        return await _ideaRepsository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be send';
            throw error;
        }

        const idea = await _ideaRepsository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }
        idea.upvotes.push(true);
        return await _ideaRepsository.update(ideaId, {upvotes: idea.upvotes});
    }

    async downvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'ideaId must be send';
            throw error;
        }

        const idea = await _ideaRepsository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }
        idea.downvotes.push(true);
        return await _ideaRepsository.update(ideaId, {downvotes: idea.downvotes});
    }
}

module.exports = IdeaService;