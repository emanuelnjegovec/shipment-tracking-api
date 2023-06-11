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
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'customerreftype', // We need to choose the model name
        tableName: 'customerreftype',
        timestamps: false
      });

    /* Tasks.sync({ force: false }).then(() => {
      console.log('synced to db');
    }); */
      
    return CustomerRefType;
}