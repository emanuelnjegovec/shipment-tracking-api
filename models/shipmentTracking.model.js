module.exports = (sequelize, DataTypes, Model) => {

    class ShipmentTracking extends Model {}

    ShipmentTracking.init({
        // Model attributes are defined here
        shipmentid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        addressidfrom: {
          type: DataTypes.STRING
        },
        addressidto: {
          type: DataTypes.STRING
        },
        orderid: {
          type: DataTypes.STRING
        },
        customerid: {
          type: DataTypes.STRING
        },
        carrier: {
          type: DataTypes.STRING
        },
        trackingcode: {
          type: DataTypes.STRING
        },
        trackingdate: {
          type: DataTypes.DATE,
        },
        shipmentstatus: {
          type: DataTypes.ENUM,
          values: ['initialized', 'inProcess', 'processed', 'shipped', 'inCustoms', 'delivered', 'returned']
        },
        statuschangedate: {
          type: DataTypes.DATE
        },
        statuschangereason: {
          type: DataTypes.STRING
        },
        weight: {
          type: DataTypes.REAL
        },
        estimateddeliverydate: {
          type: DataTypes.DATE
        },
        createdate: {
          type: DataTypes.DATE
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'shipmenttracking', // We need to choose the model name
        tableName: 'shipmenttracking',
        timestamps: false
      });

    /* Tasks.sync({ force: false }).then(() => {
      console.log('synced to db');
    }); */
      
    return ShipmentTracking;
}