'use server'
import { signIn } from "@/auth";
import connectToNeo4j from "../neo4j";
import { handleError } from "../utils";
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';

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

export const createUser = async ({ username, password, email, name }: createUserParams) => {
    try {
        const driver = await connectToNeo4j();
        const session = driver.session();
        const user = await getUser(email);
        if(user) throw new Error('User already exists');
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await session.run(
            `CREATE (u:User {name: $name, email: $email, username: $username, password: $password}) RETURN u`,
            { username, hashedPassword, email, name }
        );
        session.close();
        return result.records[0].get('u').properties;
    } catch (error) {
        handleError(error);
    }
    
}

export const getALlUsers = async () => {
    try {
        const driver = await connectToNeo4j();
        const session = driver.session();
        const result = await session.run(
            `MATCH (u:User) RETURN u`
        );
        session.close();
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
        session.close();
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
        session.close();
        return result.records.map(( record: any ) =>  { return {...record.toObject().u.properties, id: record.toObject().u.identity.toNumber()}});
    } catch (error) {
        handleError(error);
    }
}



