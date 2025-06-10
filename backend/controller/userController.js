import Users from '../models/userModel.js'


const registerUser = async (req, res) => {
    try {

        let { name, email, password } = req.body

        let existingUser = await Users.findOne({ email: email })

        if (existingUser) {
            return res.status(400).json({ message: 'user already exists' })
        }

        const user = await Users.create({
            name,
            email,
            password
        })

        res.status(201).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
}



const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body

        let user = await Users.findOne({ email: email })

        if (user && user.password === password) {
            res.status(200).json(user)
        } else {
            res.status(500).json({ message: 'incorrect email or password' })
        }

    } catch (error) {
        res.status(500).json(error)
    }
}


export {
    registerUser,
    loginUser
}