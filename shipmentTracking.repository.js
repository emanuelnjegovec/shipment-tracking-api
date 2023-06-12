const { connect } = require('./db.config');
const { Op } = require('sequelize');
const shipmentTrackingModel = require('./models/shipmentTracking.model');


class ShipmentRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync().then(() => {
            console.log("sync db.");
        });
    }

    async getShipment(id) {
        try {
            const shipments = await this.db.shipments.findAll({
                where: {
                    shipmentid: id
                }
            });
            console.log('shipments:::', shipments);
            return shipments;
        } catch (err) {
            console.log(err);
            return [];
        }
        
    }

    async getShipments(status, startDate, endDate) {
        if (status) {
            try {
                const shipments = await this.db.shipments.findAll({
                    where: {
                        shipmentstatus: status,
                    }
                });
                console.log('shipments:::', shipments);
                return shipments;
            } catch (err) {
                console.log(err);
                return [];
            }
            
        }
        else if (startDate) {
            try {
                const shipments = await this.db.shipments.findAll({
                    where: {
                        createdate: {
                            [Op.and]: {
                                [Op.gte]: startDate,
                                [Op.lte]: endDate
                            }
                        }
                    }
                });
                console.log('shipments:::', shipments);
                return shipments;
            } catch (err) {
                console.log(err);
                return [];
            }
        }
        else {
            try {
                const shipments = await this.db.shipments.findAll();
                console.log('shipments:::', shipments);
                return shipments;
            } catch (err) {
                console.log(err);
                return [];
            }
        }
        
    }

    async createShipment(shipment) {
        try {
            const shipmentTracking = await shipmentTrackingModel.create({
                shipmentid: shipment.id,
                addressidfrom: shipment.addressidfrom,
                addressidto: shipment.addressidto,
                orderid: shipment.orderid,
                customerid: shipment.customerid,
                carrier: shipment.carrier,
                tackingcode: shipment.trackingcode,
                trackingdate: shipment.trackingdate,
                shipmentstatus: shipment.status,
                statuschangedate: shipment.statuschangedate,
                statuschangereason: shipment.statuschangereason,
                weight: shipment.weight,
                estimateddeliverydate: shipment.estimateddeliverydate,
                createdate: shipment.createdate
            })
        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async updateShipment(id, val) {
        try {
            var shipments = await this.db.shipments.findAll({
                where: {
                    shipmentid: id
                }
            });
            console.log('shipments:::', shipments);
            shipments[val] = val.value;
            await shipments.save();
        } catch (err) {
            console.log(err);
            return [];
        }
    }

}

module.exports = new ShipmentRepository();