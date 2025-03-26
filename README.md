# 📄Simple-File-Hashing-Tool(ภาษาไทย)

  โปรแกรม Simple File Hashing Tool นี้ถูกออกแบบมาเพื่อช่วยในการคำนวณและตรวจสอบค่า Hash ของไฟล์ ซึ่งจะช่วยให้ผู้ใช้สามารถตรวจสอบความสมบูรณ์ของไฟล์ได้ โดยการเปรียบเทียบค่า hash ที่ได้จากการคำนวณกับค่าที่ทราบล่วงหน้า เช่น MD5 หรือ SHA-256 เพื่อให้มั่นใจว่าไฟล์ไม่ได้ถูกแก้ไขหรือถูกทำลายระหว่างการส่งผ่านหรือจัดเก็บ

#ฟีเจอร์หลักของโปรแกรม

1.คำนวณค่า Hash ของไฟล์:

-โปรแกรมจะคำนวณค่า hash ของไฟล์ที่ผู้ใช้ระบุ โดยรองรับทั้ง MD5 และ SHA-256 อัลกอริธึม

-ผู้ใช้สามารถเลือกอัลกอริธึมที่ต้องการใช้ในการคำนวณ hash

2.ตรวจสอบความสมบูรณ์ของไฟล์:

-เมื่อคำนวณค่า hash ของไฟล์แล้ว โปรแกรมจะเปรียบเทียบค่า hash ที่ได้กับค่า hash ที่ผู้ใช้มีอยู่ล่วงหน้า

-หากค่า hash ตรงกัน โปรแกรมจะแจ้งว่าไฟล์มีความสมบูรณ์และไม่ถูกแก้ไข

-หากค่า hash ไม่ตรงกัน โปรแกรมจะแจ้งว่าไฟล์อาจจะถูกแก้ไข

3.รองรับการเลือกไฟล์:

-โปรแกรมสามารถรับไฟล์จากการป้อนเส้นทาง (file path) ของไฟล์ที่ต้องการตรวจสอบ

4.รองรับหลายอัลกอริธึม:

-โปรแกรมรองรับการคำนวณ hash ทั้งสองอัลกอริธึมหลัก: MD5 และ SHA-256

# วิธีการใช้งาน

1.รันโปรแกรมใน Terminal หรือ Command Prompt (node+FileName)

2.ป้อน เส้นทางของไฟล์ ที่ต้องการตรวจสอบ

3.เลือก อัลกอริธึม ที่ต้องการใช้ในการคำนวณ (MD5 หรือ SHA-256)

4.โปรแกรมจะแสดง ค่า Hash ของไฟล์

5.ถ้าคุณมี ค่า Hash ที่คาดหวัง ให้ป้อนค่านั้น โปรแกรมจะตรวจสอบว่าไฟล์ตรงกับค่า Hash ที่คุณป้อนไว้หรือไม่

![image](https://github.com/user-attachments/assets/2f835933-41fe-49d7-a1d4-9b79d22c3d54)


# เทคโนโลยีที่ใช้

-Node.js: ใช้ในการคำนวณค่า hash และรับไฟล์จากผู้ใช้

-crypto module: สำหรับการคำนวณค่า hash เช่น MD5, SHA-256

-prompt-sync: ใช้ในการรับค่าจากผู้ใช้ผ่าน command-line interface (CLI)

# การใช้งานเพิ่มเติม

-โปรแกรมนี้สามารถใช้ได้ในหลากหลายสถานการณ์ เช่น การตรวจสอบไฟล์ที่ดาวน์โหลดมา, การตรวจสอบความสมบูรณ์ของไฟล์ที่สำคัญ, หรือการตรวจสอบไฟล์ที่ถูกส่งผ่านทางอีเมลหรือระบบอื่นๆ

โปรแกรมนี้ง่ายต่อการใช้งานและสามารถช่วยให้คุณมั่นใจได้ว่าไฟล์ของคุณไม่ได้ถูกแก้ไขหรือถูกโจมตีจากภัยคุกคามต่างๆ

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 📄Simple File Hashing Tool(English)

  The Simple File Hashing Tool is designed to help compute and verify the hash values of files, ensuring their integrity. The tool allows users to compare the hash value computed for a file with a known value (such as MD5 or SHA-256) to verify that the file has not been altered or corrupted during transfer or storage.

# Key Features:

1.Calculate File Hash: 

- The tool computes the hash value of a user-specified file, supporting both MD5 and SHA-256 algorithms.
  
- Users can choose which algorithm to use for hash computation.

2.Verify File Integrity: 

- After computing the file hash, the tool compares it with a known hash value provided by the user.
  
- If the hashes match, the tool confirms that the file is intact and unmodified.
  
- If the hashes don't match, the tool warns that the file may have been altered.

# File Selection:

- The program allows users to specify the path of the file they want to check.

# Supports Multiple Algorithms:

- The tool supports both MD5 and SHA-256 hash algorithms.

# How to Use:

1.Run the program in Terminal or Command Prompt (node+FileName).

2.Enter the file path of the file you wish to check.

3.Select the hash algorithm you want to use (MD5 or SHA-256).

4.The program will display the hash value of the file.

5.If you have an expected hash value, enter it, and the program will verify if the file matches the entered hash.

![image](https://github.com/user-attachments/assets/2f835933-41fe-49d7-a1d4-9b79d22c3d54)

# Technologies Used:

Node.js: Used to compute hash values and accept user input.

crypto module: For computing hash values, such as MD5 and SHA-256.

prompt-sync: For accepting input from the user through the command-line interface (CLI).

# Additional Use Cases:
This tool can be used in various scenarios, such as verifying downloaded files, checking the integrity of important files, or verifying files sent via email or other systems.

This tool is simple to use and helps ensure that your files have not been altered or compromised by potential threats.
