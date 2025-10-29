"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`User service is running on port ${port}`);
});
//# sourceMappingURL=index.js.map