import { $axios } from '../api'
import Cookies from 'js-cookie'
class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/users.${type}`, {
				email,
				password
			})
			if (data.tokens) Cookies.set('tkn', data.token)
			console.log(data)
			return data
		} catch (err) {
			throw new Error(err)
		}
	}
}

export default new AuthService()
