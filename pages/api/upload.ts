import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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

