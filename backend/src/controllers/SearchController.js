const parseStringAsArray = require('../utils/parseStringAsArray');
const Dev = require('../models/Dev');

module.exports = {

    async index(request, response)  {
        
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(request.query);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },

        });
        console.log('Oi');
        return response.json({devs});

    }
}