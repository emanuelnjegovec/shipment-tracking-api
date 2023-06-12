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
        sequelize,
        modelName: 'orderreftype',
        tableName: 'orderreftype',
        timestamps: false
      });
    return OrderRefType;
}