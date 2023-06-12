module.exports = (sequelize, DataTypes, Model) => {

    class CustomerRefType extends Model {}

    CustomerRefType.init({
        // Model attributes are defined here
        customerid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        customername: {
          type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
      }, {
        sequelize,
        modelName: 'customerreftype',
        tableName: 'customerreftype',
        timestamps: false
      });

      
    return CustomerRefType;
}