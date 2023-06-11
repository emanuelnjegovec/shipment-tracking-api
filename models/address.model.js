module.exports = (sequelize, DataTypes, Model) => {

    class Address extends Model {}

    Address.init({
        // Model attributes are defined here
        addressid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        streetnr: {
          type: DataTypes.STRING
        },
        streetname: {
          type: DataTypes.STRING
        },
        streettype: {
          type: DataTypes.STRING
        },
        postcode: {
          type: DataTypes.STRING
        },
        city: {
          type: DataTypes.STRING
        },
        stateorprovince: {
          type: DataTypes.STRING
        },
        country: {
          type: DataTypes.STRING(3),
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'address', // We need to choose the model name
        tableName: 'address',
        timestamps: false
      });

    /* Tasks.sync({ force: false }).then(() => {
      console.log('synced to db');
    }); */
      
    return Address;
}