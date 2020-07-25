const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const participant = await connection('participants').select('*');
        return response.json(participant);
    },

    async create(request, response){
        try {
            const { firstName, lastName, participation } = request.body;

            console.log(firstName, lastName, participation);

            await connection('participants').insert({
                firstName,
                lastName,
                participation,
            })

            return response.status(200).send();
        } catch (error) {
            console.log(error);
            return response.status(400).send({ error: "Failed to register participant!" });
        }
    }


}