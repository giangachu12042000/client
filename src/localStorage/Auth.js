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
}

export default Auth