import User from '../models/User.js';

export const getUserDetails = async (req, res) => {
	try {
		const user = await User.findById(req.user.id, { password: 0 });

		res.send(user);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
};
