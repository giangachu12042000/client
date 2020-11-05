import localStorage from 'local-storage'

class Auth{

    static authenticateUser(token)
    {
        localStorage.set('token', token);
    }

    static getToken()
    {
        return localStorage.get('token')
    }

    static isAuthenticate()
    {
        return (localStorage.get('token') != null)
    }
}

export default Auth