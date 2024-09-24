import KnowledgeBaseNetwork from "shared/config/httpConfig";

export default class UserApi {
    static async loginByUsername(login, password) {
        return await KnowledgeBaseNetwork.post('auth/login', {
            login: login,
            password: password
        })
    }

    static async register(login, password, email) {
        return await KnowledgeBaseNetwork.post('auth/register', {
            email: email,
            password: password,
            login: login
        })
    }
}
