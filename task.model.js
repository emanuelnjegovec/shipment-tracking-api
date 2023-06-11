module.exports = (sequelize, DataTypes, Model) => {

    class Tasks extends Model {}

    Tasks.init({
        // Model attributes are defined here
        shipmentid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        href: {
          type: DataTypes.STRING,
          allowNull: false
          // allowNull defaults to true
        },
        carrier: {
          type: DataTypes.STRING,
          allowNull: false
          // allowNull defaults to true
        },
        trackingdate: {
            type: DataTypes.DATE,
            allowNull: false
            // allowNull defaults to true
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
      
    return Tasks;
}