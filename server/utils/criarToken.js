import token from 'jsonwebtoken';

function criarToken(payload){
    const response = token.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1m",
    });
    return response;
};

export default criarToken;