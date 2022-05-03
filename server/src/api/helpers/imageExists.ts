import { getImage } from '../models';

// function which checks if user already saved given image
async function imageExists(id: number, imageHash: string): Promise<boolean> {
  return (await getImage(id, imageHash)) === imageHash;
}

export default imageExists;
