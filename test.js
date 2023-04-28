var fs = require("fs");

function name() {
  var packageData = fs.readFile("package.json", "utf8", function(err, data) {
    console.log(typeof data);
    var jsonData = JSON.parse(data);
    console.log(typeof jsonData, "TYPEEE");
    Object.assign(jsonData.dependencies, {
      "@mui/x-date-pickers": "^6.2.0",
      "@testing-library/jest-dom": "^5.16.5",
      "date-fns": "^2.29.3",
      "dayjs": "^1.11.7"
    });
    // Add peer dependencies
    jsonData.peerDependencies = {
      "@emotion/react": "^11.10.6",
      "@emotion/styled": "^11.10.6",
      "@mui/material": "^5.11.16",
      "@mui/styled-engine-sc": "^5.11.11",
      "@mui/x-data-grid": "^6.0.4",
      "@mui/x-date-pickers": "^6.2.0",
      "date-fns": "^2.29.3",
      "dayjs": "^1.11.7",
      "@types/react": "^18.0.33",
      "@types/styled-components": "^5.1.26",
      "axios": "^1.1.3",
      "react": "^18.2.0",
      "styled-components": "^5.3.9"
    };
    console.log(jsonData);
  });
}

name();
