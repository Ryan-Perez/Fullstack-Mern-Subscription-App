import express from "express"
import { body, validationResult } from "express-validator"
import User from "../models/users"
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import { checkAuth } from "../middleware/checkAuth"


const router = express.Router()

router.post(
    '/signup',
    body("email").isEmail().withMessage("The emial is invalid"),
    body("password").isLength({min: 5}).withMessage("The password is too short"),
    async (req, res) => {

        const validationErrors = validationResult(req)

        if(!validationErrors.isEmpty()){
            const errors: any = validationErrors.array().map(error => {
                return {
                    msg: error.msg
                }
            })

            return res.json({errors, data: null})
        }


        const { email, password } = req.body
        
        const user: any = await User.findOne({ email })

        if(user){
            return res.json({ 
                errors: [
                    {
                        msg: "Email already in use"
                    },
                ],
                data: null    
             })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser: any = await User.create({
            email,
            password: hashedPassword
        })

        const token = await JWT.sign(
            {email: newUser.email},
            process.env.JWT_SECRET as string,
            {
                expiresIn: 36000,
            }
        )

        res.json({
            errors: [],
            data: {
                token,
                user: {
                    id: newUser._id,
                    email: newUser.email,
                },
            },
        })
    }
)

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if(!user) {
        return res.json({
            errors: [
                {
                    msg: "Invalids credentials"
                }
            ],
            data: null
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.json({
            errors: [
                {
                    msg: "Invalids credentials"
                }
            ],
            data: null
        })
    }

    const token = await JWT.sign(
        {email: user.email},
        process.env.JWT_SECRET as string,
        {
            expiresIn: 36000,
        }
    )

    return res.json({
        errors: [],
        data: {
            token,
            user: {
                id: user._id,
                email: user.email,
            }
        }
    })
})

router.get('/me', checkAuth, async (req, res) => {
    const user: any = await User.findOne({email: req.user})

    return res.json({
        errors: [],
        data: {
            user: {
                id: user._id,
                email: user.email
            }
        }
    })
})

export default router