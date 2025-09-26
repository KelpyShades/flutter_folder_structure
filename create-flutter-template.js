const fs = require("fs");


const folders = [
  "lib/core/config",
  "lib/core/constants",
  "lib/core/error_handling/contexts",
  "lib/core/utils",
  "lib/core/widgets",
  "lib/features/feature1/data",
  "lib/features/feature1/logic",
  "lib/features/feature1/views/widgets",
  "lib/features/feature2/data",
  "lib/features/feature2/logic",
  "lib/features/feature2/views/widgets",
  "assets/fonts",
  "assets/images",
  "assets/icons",
];

const files = {
  "lib/core/config/routes.dart": "",
  "lib/core/config/theme.dart": "",
  "lib/features/feature1/feature1.dart": "",
  "lib/features/feature1/data/datasource.dart": "",
  "lib/features/feature1/data/repository.dart": "",
  "lib/features/feature1/logic/provider.dart": "",
  "lib/features/feature2/feature2.dart": "",
  "lib/features/feature2/data/datasource.dart": "",
  "lib/features/feature2/data/repository.dart": "",
  "lib/features/feature2/logic/provider.dart": "",
};


console.log(`🚀 Creating Flutter template`);

folders.forEach((folder) => {
  fs.mkdirSync(folder, { recursive: true });
  console.log(`📁 ${folder}`);
});

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content);
  console.log(`📄 ${filePath}`);
});

console.log(`✅ Template created!`);
