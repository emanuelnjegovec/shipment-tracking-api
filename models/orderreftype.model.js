module.exports = (sequelize, DataTypes, Model) => {

    class OrderRefType extends Model {}

    OrderRefType.init({
        // Model attributes are defined here
        orderid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        ordername: {
          type: DataTypes.STRING
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'orderreftype', // We need to choose the model name
        tableName: 'orderreftype',
        timestamps: false
      });

    /* Tasks.sync({ force: false }).then(() => {
      console.log('synced to db');
    }); */
      
    return OrderRefType;
}