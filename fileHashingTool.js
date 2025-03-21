const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

// ฟังก์ชั่นคำนวณ Hash ของไฟล์
function calculateHash(filePath, hashAlgorithm = "sha256") {
  const hash = crypto.createHash(hashAlgorithm);
  const fileStream = fs.createReadStream(filePath);

  fileStream.on('data', (data) => {
    hash.update(data);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`Calculated ${hashAlgorithm.toUpperCase()} hash: ${fileHash}`);

    rl.question("Enter the expected hash to verify: ", (userHash) => {
      if (userHash.trim() === fileHash) {
        console.log("The file is valid and unchanged!");
      } else {
        console.log("Warning: The file has been modified or corrupted.");
      }
      rl.close();
    });
  });

  fileStream.on('error', (err) => {
    console.error("Error reading the file:", err.message);
  });
}

// ตั้งค่าอินเตอร์เฟสสำหรับรับคำสั่งจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// รับเส้นทางไฟล์จากผู้ใช้
rl.question("Enter the file path: ", (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.log("The file does not exist.");
    rl.close();
    return;
  }

  rl.question("Choose hash algorithm (md5 / sha256): ", (algorithm) => {
    algorithm = algorithm.toLowerCase().trim() || "sha256"; // ค่าเริ่มต้นเป็น sha256
    calculateHash(filePath, algorithm);
  });
});
