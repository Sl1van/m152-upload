import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // if(typeof req.body.file === File){

  // }
  console.log(req.body.file);
  console.log(typeof req.body.file);
  

  // const file: File | null = getFile(req);
  // if (file === null) {
  //   res.status(400).json({ name: "No file provided!" });  
  //   return;
  // }
  // uploadFile(file);
  res.status(200).json({ name: "File successfully stored" });
}

function getFile(req: NextApiRequest) : File | null{
  
  return null;
}
function uploadFile(file: File) {
  throw new Error('Function not implemented.');
}

