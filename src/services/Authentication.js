import Api from '@/services/api'

export default {
    register (creds) {
        return Api().post('register', creds)
    }
}