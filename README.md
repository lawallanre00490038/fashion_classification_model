This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu118 fastapi uvicorn python-multipart

## Getting Started

 "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "next dev",
    "dev:backend": "cd ../backend && PYTHONPATH=.. uvicorn main:app --reload --host 0.0.0.0 --port 8000"



    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     try {
    //         const response = await axios.post("http://localhost:8000/classify", formData);
    //         const imageClass = response.data.class;
    //         setImageClass(imageClass)
    //     } catch (error) {
    //         console.error("Error uploading file:", error);
    //         setImageClass("");
    //         alert("Please input any image found among to categories");
    //     }
    // };



# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# model = ConvNeuralNet(num_classes=len(classes))
# model.load_state_dict(torch.load('./models/model.pth', map_location=device))
# model.eval()
# model.to(device)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
