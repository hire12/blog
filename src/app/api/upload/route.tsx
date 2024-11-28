// import { NextResponse } from 'next/server';
// import multer from 'multer'; 

// const upload = multer({ dest: './public/uploads/' }); // Or any directory where you want to store images

// // Use the Next.js API handler with multer
// export const POST = async (req: Request) => {
//   try {
//     // Handle the image upload
//     upload.single('image')(req as any, res as any, (err: any) => {
//       if (err) {
//         return NextResponse.json({ error: err.message }, { status: 400 });
//       }
//       return NextResponse.json({ message: 'Image uploaded successfully!' }, { status: 200 });
//     });
//   } catch (err) {
//     return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
//   }
// };


// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false, // Disable the default body parser
//   },
// };

// const uploadHandler = async (req, res) => {
//   try {
//     if (req.method === 'POST') {
//       const form = new formidable.IncomingForm();
//       const uploadDir = path.join(process.cwd(), 'public/uploads');

//       // Ensure the upload directory exists
//       if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir, { recursive: true });
//       }

//       form.uploadDir = uploadDir;
//       form.keepExtensions = true;

//       // Parse the incoming form
//       form.parse(req, (err, fields, files) => {
//         if (err) {
//           console.error('Formidable Error:', err);
//           return res.status(500).json({ error: 'Failed to upload image' }); // Always return JSON
//         }

//         console.log('Fields:', fields);
//         console.log('Files:', files);

//         return res.status(200).json({
//           message: 'File uploaded successfully',
//           fields,
//           files,
//         });
//       });
//     } else {
//       // Handle unsupported methods
//       return res.status(405).json({ error: 'Method Not Allowed' });
//     }
//   } catch (err) {
//     console.error('Server Error:', err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export default uploadHandler;
