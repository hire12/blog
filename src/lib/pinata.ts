// // import axios from 'axios';
// // import FormData from 'form-data';
// // import fs from 'fs';
// // import path from 'path';

// // const PINATA_API_KEY = process.env.PINATA_API_KEY;
// // const PINATA_API_SECRET = process.env.PINATA_API_SECRET;

// // // Pin a file to IPFS using Pinata API
// // export const pinFileToIPFS = async (filePath: string) => {
// //   const form = new FormData();
// //   form.append('file', fs.createReadStream(filePath)); // Change to use file path

// //   try {
// //     const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', form, {
// //       headers: {
// //         ...form.getHeaders(),
// //         'pinata_api_key': PINATA_API_KEY!,
// //         'pinata_secret_api_key': PINATA_API_SECRET!,
// //       },
// //     });

// //     return response.data; // Contains the file's CID (Content Identifier)
// //   } catch (error) {
// //     console.error('Error uploading to Pinata:', error);
// //     throw new Error('Failed to upload file to Pinata');
// //   }
// // };







// import axios from 'axios';
// import FormData from 'form-data';

// const PINATA_API_KEY = process.env.PINATA_API_KEY;
// const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;

// export const pinFileToIPFS = async (fileBuffer: Buffer) => {
//   const form = new FormData();
//   form.append('file', fileBuffer, 'image.jpg'); // 'image.jpg' is just an example name

//   try {
//     const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', form, {
//       headers: {
//         ...form.getHeaders(),
//         'pinata_api_key': PINATA_API_KEY,
//         'pinata_secret_api_key': PINATA_SECRET_KEY,
//       },
//     });

//     console.log('Pinata upload successful:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading file to Pinata:', error);
//     if (error.response) {
//       console.error('Pinata API response error:', error.response.data);
//     }
//     throw new Error('Failed to upload file to Pinata');
//   }
// };
