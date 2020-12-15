const BaseService = require('./base.service');
let _userRepsository = null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _userRepsository = UserRepository;
    }

    async getUserByUsername(username){
        return await _userRepsository.getUserByUsername(username);
    }


}

module.exports = UserService;