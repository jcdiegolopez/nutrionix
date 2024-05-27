'use server'
import { signIn, auth, signOut} from "@/auth";
import connectToNeo4j from "../neo4j";
import { handleError } from "../utils";
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { UserCa, UserPass, createUserParams, updateProfileParams} from '@/types';
import { redirect } from "next/navigation";

export async function signUp(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;

    console.log(email  + " " + password + " " + username);
    // Check if user already exists
    const existingUser = await getUser(email);
    if (existingUser.length > 0) {
      return 'User already exists.';
    }

    // Create a new user
    const newUser = await createUser({ username, password, email});

    // Sign in the user after successful registration
    await signIn('credentials', { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

export const createUser = async ({ username, password, email }: createUserParams) => {
  try {
    const driver = await connectToNeo4j();
    const session = driver.session();
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await session.run(
      `CREATE (u:User {email: $email, username: $username, password: $hashedPassword}) RETURN u`,
      {email, username, hashedPassword}
    );
    session.close();
    return result.records[0].get('u').properties;
  } catch (error) {
    handleError(error);
  }
}

export const updateProfile = async (
  prevState: string | undefined,
  formData: FormData,) => {
  try {
    const driver = await connectToNeo4j();
    const session = driver.session();
    const userObj = await auth();
    const userEmail = userObj?.user?.email;
    const currentPassword = formData.get("password") as string;

    const name = formData.get("name") as string;
    const gender = formData.get("gender") as string;
    const age = formData.get("age") as string;
    const weight = formData.get("weight") as string;
    const height = formData.get("height") as string;
    const objective = formData.get("objective") as string;
    const activity = formData.get("activity") as string;
    console.log("Changing profile for user: " + userEmail);
    console.log(name);
    console.log(gender);
    console.log(age);
    console.log(weight);
    console.log(height);
    console.log(objective);
    console.log(activity);
    console.log("--------------------");

    const result = await session.run(
      `
      MATCH (u:User {email: $userEmail})
      SET u.name = $name, u.gender = $gender, u.age = $age, u.weight = $weight, u.height = $height, u.objective = $objective, u.activity = $activity
      RETURN u
      `,
      { userEmail, name, gender, age, weight, height, objective, activity }
    );

    console.log("Profile updated.");
    await session.close();
    console.log("Session closed.");
    console.log("Signed out.");

    // Re-authenticate the user after profile update
    console.log("Re-authenticating user...");
    console.log("User email: " + userEmail);
    console.log("Current password: " + currentPassword);
    await signIn('credentials', { email: userEmail, password: currentPassword });
    console.log("Re-authenticated user.");

    return result.records[0].get('u').properties;
  } catch (error) {
    console.log("Error updating profile: " + error);
  }
};



export const getAllUsers = async () => {
    try {
        const driver = await connectToNeo4j();
        const session = driver.session();
        const result = await session.run(
            `MATCH (u:User) RETURN u`
        );
        await session.close();
        return result.records.map(( record: any ) =>  { return {...record.toObject().u.properties, id: record.toObject().u.identity.toNumber()}});
    } catch (error) {
        handleError(error);
    }
}

export const getUserById = async (id: number) => {
    try {
        const driver = await connectToNeo4j();
        const session = driver.session();
        const result = await session.run(
            `MATCH (u:User) WHERE ID(u) = $id RETURN u`,
            { id }
        );
        await session.close();
        return result.records.map(( record: any ) =>  { return {...record.toObject().u.properties, id: record.toObject().u.identity.toNumber()}});
    } catch (error) {
        handleError(error);
    }
}

export const getUser = async (email: string) => {
    try {
        const driver = await connectToNeo4j();
        const session = driver.session();
        const result = await session.run(
            `MATCH (u:User) WHERE u.email = $email RETURN u`,
            { email }
        );
        console.log("User found: ");
        console.log(result.records);
        await session.close();
        return result.records.map(( record: any ) =>  { return {...record.toObject().u.properties, id: record.toObject().u.identity.toNumber()}});
    } catch (error) {
        handleError(error);
    }
}


