import type { NextAuthConfig } from 'next-auth';
import type { UserCa } from '@/types';
import { getUser } from './lib/actions/user.actions';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnNashe = nextUrl.pathname.startsWith('/private');
      const isOnAuth = nextUrl.pathname.startsWith('/auth');
      if (isOnNashe) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isOnAuth && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
    async session({ session, token } : { session: any, token: any }) {
      if (token?.user) {
        session.user = {
          id: token.user.id,
          email: token.user.email,
          username: token.user.username,
          gender: token.user.gender,
          name: token.user.name,
          weight: token.user.weight,
          height: token.user.height,
          age: token.user.age,
          objective: token.user.objective,
          activity: token.user.activity
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    }
  },
  providers: [] // Add providers as needed
};
