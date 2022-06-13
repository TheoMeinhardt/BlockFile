import { Request, Response } from 'express';

import * as helpers from '../helpers';
import * as db from '../models';

async function saveImage(req: Request, res: Response): Promise<void> {
  const uid: number = Number(req.params.id);
  const imageHash: string = req.body.hash;

  if (!(await helpers.userExists(uid))) res.status(404).send('User not found!');
  // else if (await helpers.imageExists(uid, imageHash)) res.status(409).send('Image already exists!');
  else {
    await db.saveImage(uid, imageHash);
    res.status(200).send('Saved image to blockchain!');
  }
}

async function getImages(req: Request, res: Response): Promise<void> {
  const uid: number = Number(req.params.id);

  if (!(await helpers.userExists(uid))) res.status(404).send('User not found!');
  else {
    const images: string[] = await db.getImageHashes(uid);
    res.status(200).json(images);
  }
}

export { saveImage, getImages };
