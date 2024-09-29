// /app/api/getImagesLength/route.ts
import { readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  // Specify the directory where the images are stored
  const imagesDirectory = path.join(process.cwd(), 'public', 'images', 'gallery');

  // Get number of files in the directory
  const filesCount: number = readdirSync(imagesDirectory).length;
  // console.log(filesCount);

  // Read all filenames in the directory
  const fileNames = readdirSync(imagesDirectory);


  // Filter only .jpg files or jpeg files or .png files or webp files
   const jpgFiles: string[] = fileNames.filter((fileName) => fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png') || fileName.endsWith('.webp'));

   const imageFilesFiltered: string[] = fileNames.filter((fileName) => /\.(jpg|jpeg|png|webp)$/i.test(fileName));

  
  // console.log(jpgFiles);

  // Return the list of filenames and filesCount as a response
  return NextResponse.json({ filesCount, jpgFiles, imageFilesFiltered }, { status: 200 });

}
