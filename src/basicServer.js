"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var swagger_ui_express_1 = require("swagger-ui-express");
var fs_1 = require("fs");
var yaml_1 = require("yaml");
var express_openapi_validator_1 = require("express-openapi-validator");
// Load the OpenAPI spec from the YAML file
var swaggerDocument = yaml_1.default.parse(fs_1.default.readFileSync('src/basicServer.yaml', 'utf-8'));
var app = (0, express_1.default)();
var port = 8000;
// Serve Swagger UI for OpenAPI documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Middleware: Load and validate against OpenAPI spec
app.use((0, express_openapi_validator_1.middleware)({
    apiSpec: 'src/basicServer.yaml', // Path to OpenAPI spec
    validateRequests: true, // Validate incoming requests
    validateResponses: true // Validate outgoing responses
}));
var incidents = [
    {
        id: "MABOS001",
        date: "20170617",
        time: "1437",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Broken-down T on north and park station."
    },
    {
        id: "MABOS002",
        date: "20221217",
        time: "0937",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Car in West Village broken down."
    }
];
// GET all incidents
app.get('/incidents', function (req, res) {
    res.status(200).json(incidents);
});
// GET an incident by ID
app.get('/incidents/:id', function (req, res) {
    var id = req.params.id; // don't need to check since already validated by
    var incident = incidents.find(function (incident) { return incident.id === id; });
    if (incident) {
        res.status(200).json(incident);
    }
    else {
        res.status(400).json({ error: 'Incident not found' });
    }
});
// Error handling for OpenAPI validation errors
app.use(function (err, req, res, next) {
    if (err.status) {
        // OpenAPI validation error
        res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    else {
        // General server error
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Start the server
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port, "/"));
});
