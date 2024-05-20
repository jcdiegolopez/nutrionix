import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
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
    async session({ session, token }) {
      // Include user data in the session, excluding the password

      if (token?.user) {
        
        const user = { id: token.user.id, email: token.user.email, username: token.user.username};
        session.user = user;
        
        
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
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
