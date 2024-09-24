import {TOKEN} from "shared/consts/localstorage";

class Network {
    constructor() {
        this.config = {
            baseURL: 'https://selfed.io/api/',
            headers: {
                'Content-Type': 'application/json'
            },
            token: sessionStorage.getItem(TOKEN) || '',
        }
        this.updateToken = this.updateToken.bind(this);
        this.request = this.request.bind(this);
        this.requestNoBody = this.requestNoBody.bind(this);
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);
        this.deleteNoBody = this.deleteNoBody.bind(this);
    }

    updateToken(newToken) {
        this.config.token = newToken;
        sessionStorage.setItem(TOKEN, newToken)
    }

    createURL(url) {
        let newUrl = this.config.baseURL + url
        if (this.config.token) {
            newUrl += url.includes('?') ? '&' : '?'
            newUrl += `token=${this.config.token}`
        }
        return newUrl
    }

    async request(url, method, body, file) {
        let response
        if (file) {
            response = await fetch(this.createURL(url), {
                method,
                body: body
            })
        } else {
            response = await fetch(this.createURL(url), {
                headers: this.config.headers,
                method,
                body: JSON.stringify({...body})
            })
        }
        const data = await response.json()
        return {
            data,
            errors: !response.ok
        }
    }

    async requestNoBody(url, method, file) {
        const response = await fetch(this.createURL(url), {
            headers: this.config.headers,
            method,
        })
        if (file) {
            return response
        }
        const data = await response.json()
        return {
            data,
            errors: !response.ok
        }
    }

    async get(url, file=false) {
        return await this.requestNoBody(url, 'GET', file)
    }

    async put(url, body) {
        return await this.request(url, 'PUT', body)
    }

    async post(url, body, file=false) {
        return await this.request(url, 'POST', body, file)
    }

    async delete(url, body) {
        return await this.request(url, 'DELETE', body)
    }

    async deleteNoBody(url) {
        return await this.requestNoBody(url, 'DELETE')
    }
}

const KnowledgeBaseNetwork = new Network()
export default KnowledgeBaseNetwork
