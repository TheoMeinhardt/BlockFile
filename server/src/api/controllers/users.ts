import { Request, Response } from 'express';
import { dbuser } from '../types';
import * as db from '../models';
import * as helpers from '../helpers';

//
// function which reads user with given id from database and sends to client
//
async function getUserData(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const userData: dbuser = await db.getDbuserData(id);

  if (userData !== undefined) {
    res.status(200).json(userData);
  } else {
    res.status(404).send('User not found!');
  }
}

//
// function which posts user sent from client to database
//
async function addUser(req: Request, res: Response): Promise<void> {
  const userData: dbuser = req.body;
  userData.password = await helpers.hashPassword(userData.password);

  await db.postDbuserData(userData);

  res.status(200).send(`added user ${userData.firstname} ${userData.lastname}`);
}

//
// function which updates a user in the database with id sent by client
//
async function updateUser(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);
  const userData: dbuser = req.body;

  if (await helpers.userExists(id)) {
    // get user with id from database
    const user: dbuser = await db.getDbuserData(id);

    // check if new user property is set, if not set to old user property
    if (userData.firstname === undefined) userData.firstname = user.firstname;
    if (userData.lastname === undefined) userData.lastname = user.lastname;
    if (userData.password === undefined) userData.password = user.password;
    if (userData.email === undefined) userData.email = user.email;

    // update old user with new user data
    user.firstname = userData.firstname;
    user.lastname = userData.lastname;
    user.password = await helpers.hashPassword(userData.password);
    user.email = userData.email;

    await db.patchDbUser(id, user);
    res.status(200).send(`updated user ${user.firstname} ${user.lastname}`);
  } else {
    res.status(404).send('User not found!');
  }
}

//
// function which deletes a user in the database with id from sent by client
//
async function deleteUser(req: Request, res: Response): Promise<void> {
  const id: number = Number(req.params.id);

  if (await helpers.userExists(id)) {
    await db.delDbuser(id);
    res.status(200).send(`User with id ${id} deleted!`);
  } else {
    res.status(404).send('User not found!');
  }
}

//
// functions which gets users email and password from client an checks if credentials are valid
//
async function checkCredentials(req: Request, res: Response): Promise<void> {
  const userData: { uid: number; email: string; password: string } = req.body;

  // check if user exists
  if (await helpers.userExists(userData.uid)) {
    // get user with id from database
    const user: dbuser = await db.getDbuserData(userData.uid);

    // check if password is valid
    if (userData.email === user.email && (await helpers.checkPassword(userData.password, user.password))) {
      // create jwt and send to client
      const token: string = await helpers.createToken(String(userData.uid), `${user.firstname} ${user.lastname}`);
      res.status(200).send(token);
    } else {
      res.status(401).send('Credentials are not valid!');
    }
  } else {
    res.status(404).send('User not found!');
  }
}

export { getUserData, addUser, deleteUser, updateUser, checkCredentials };
