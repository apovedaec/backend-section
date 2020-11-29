let _ideaServices = null;

class IdeaController{
    constructor({IdeaService}){
        _ideaServices = IdeaService;
    }

    async get(req, res){
        const {ideaId} = req.params;
        const idea = await _ideaServices.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res){
        const ideas = await  ideaServices.getAll();
        return res.send(ideas);
    }

    async create(req, res){
        const {body} = req;
        const createIdea = await _ideaServices.create(body);
        return res.status(201).send(createIdea);
    }

    async update(req, res){
        const {body} = req;
        const {ideaId} = req.params;
        const updatedIdea = await _ideaServices.update(ideaId, body);
        return res.send(updatedIdea);
    }

    async delete(req, res){
        const {ideaId} = req.params;
        const deletedIdea = await _ideaServices.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(req, res){
        const {userId} = req.params;
        const ideas = await _ideaServices.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaServices.upvoteIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaServices.downvoteIdea(ideaId);
        return res.send(idea);
    }
}

module.exports = IdeaController;
