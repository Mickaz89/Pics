import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com' ,
	headers: {
		Authorization: 'Client-ID a5c66fd4f634824c08a974470f857d78c1fb70d29258da6bf0e29f6c05b774ba'
	}
});
