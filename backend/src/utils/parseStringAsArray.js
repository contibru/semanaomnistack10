module.exports = function parseStringAsString(arrayAsSTring){
    return arrayAsSTring.split(',').map(tech => tech.trim() );
}