// 'use server'
// import axios from "axios";

// export default async function handleSubmit(formData: FormData) {
//     if (!formData) {
//         return('No file selected');
//     }
    
//     try {
//         const response = await axios.post('http://localhost:8000/classify', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log('Response:', response.data);
//         return {
//             data: response.data
//         };
//     } catch (error: any) {
//         console.error('Error uploading the image:', error.message);
//     }
// }