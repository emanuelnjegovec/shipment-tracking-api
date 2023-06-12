const shipmentService  = require('./shipmentTracking.service');

class ShipmentController {

    async getShipment(id) {
        return await shipmentService.getShipment(id);
    }

    async getShipments(status, startDate, endDate) {
        return await shipmentService.getShipments(status, startDate, endDate);
    }

    async createShipment(shipment) {
        return await shipmentService.createShipment(shipment);
    }

    async updateShipment(shipment) {
        return await shipmentService.updateShipment(shipment);
    }
}
module.exports = new ShipmentController();