const Joi = require ('joi')

module.exports = {
    register (req, res, next){
        const schema = {
            email: Joi.string().email(),
            password:Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        
        const {error, value} = Joi.validate(req.body, schema)

        if(error){
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'メールアドレスが間違っています。'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'パスワードが間違っています'
                    })
                    break
                default:
                    res.status(400).send({
                        error:'正しい情報ではありません。'
                    })
            }
        }else{
            next()
        }
    }
}
 