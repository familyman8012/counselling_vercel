import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const options = {
  providers: [
    Providers.Kakao({
      clientId: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
    Providers.Google({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
      redirect_uri: process.env.Google_REDIRECT_URL,
    }),
    Providers.Credentials({
      name: "Custom Provider",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john@doe.com" },
        userpwd: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          credentials
        );
        var t = response.data;
        if (t.data.status !== 0) {
          const user = {
            uid: t.data._id,
            name: t.data.name,
            email: t.data.email,
            phone: t.data.phone,
          };
          return user;
        }
      },
    }),
  ],
  pages: {
    error: "/signin",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user;
      session.user = user.user;
      session.user.uid ? session.user.uid : (session.user.uid = user.user.id);
      session.user.role
        ? session.user.role
        : (session.user.role = user.user.role);
      return Promise.resolve(session);
    },
  },
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
