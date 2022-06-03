import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  name: string
}

export type InputData = {
  nameOfFile: string,
  file: File
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const file: File | null = getFile(req);
  if (file === null) {
    res.status(400).json({ name: "No file provided!" });  
    return;
  }
  uploadFile(file);
  res.status(200).json({ name: "File successfully stored" });
}

function getFile(req: NextApiRequest) : File | null{
  
  return null;
}
function uploadFile(file: File) {
  throw new Error('Function not implemented.');
}

