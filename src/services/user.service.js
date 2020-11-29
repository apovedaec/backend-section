const BaseService = require('./base.service');
let _userRepsository = null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _userRepsository = UserRepository;
    }

    async getUserByYsername(username){
        return await _userRepsository.getUserByYsername(username);
    }


}

module.exports = UserService;