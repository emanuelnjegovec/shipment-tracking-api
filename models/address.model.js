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
        sequelize,
        modelName: 'address',
        tableName: 'address',
        timestamps: false
      });
      
    return Address;
}