export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnStudentRoute = nextUrl.pathname.startsWith("/student");
            if (isOnStudentRoute) {
                if (isLoggedIn) return true;
                return false;
            }
            else if (isLoggedIn) {
                return Response.redirect(new URL("/student/profile", nextUrl));
            }
            return true;
        },
    },
    providers: [],
};