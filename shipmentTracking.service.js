const shipmentRepository  = require('./shipmentTracking.repository');

class ShipmentService {

    constructor() {}

    async getShipment(id) {
        return await shipmentRepository.getShipment(id);
    }
    async getShipments(status, startDate, endDate) {
        return await shipmentRepository.getShipments(status, startDate, endDate);
    }
    async createShipment(shipment) {
        return await shipmentRepository.createShipment(shipment);
    }

    async updateShipment(id, val) {
        return await shipmentRepository.updateShipment(id, val);
    }

}

module.exports = new ShipmentService();