import { Request, Response } from 'express';
import { dbuser } from '../types';
import * as db from '../database';

// function which uses id handed over as a parameter to check if a user exists and returns a boolean
async function userExists(id: number): Promise<boolean> {
  const userData: dbuser = await db.getDbuserData(id);

  return userData !== undefined;
}

//
// function which reads user with given id from database and sends to client
//
async function getUserData(req: Request, res: Response): Promise<void> {
  try {
    const id: number = Number(req.params.id);
    const userData: dbuser = await db.getDbuserData(id);

    if (userData !== undefined) {
      res.status(200).json(userData);
    } else {
      res.status(404).send('User not found!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error!');
  }
}

//
// function which posts user sent from client to database
//
async function addUser(req: Request, res: Response): Promise<void> {
  try {
    const userData: dbuser = req.body;
    await db.postDbuserData(userData);

    res.status(200).send(`added user ${userData.firstname} ${userData.lastname}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error!');
  }
}

//
// function which deletes a user in the database with id from sent by client
//
async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const id: number = Number(req.params.id);

    if (await userExists(id)) {
      await db.delDbuser(id);
      res.status(200).send(`User with id ${id} deleted!`);
    } else {
      res.status(404).send('User not found!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error!');
  }
}

export { getUserData, addUser, deleteUser };
