/**
 * Borrachera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'conexionMongodbServerDocker',
  attributes: {
    motivo:{
      type:"string"
    },
    latitudDondeEmpezo:{
      type:"interger"
    },
    longitudDondeEmpezo:{
      type:"interger"
    }
  }
};