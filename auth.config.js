export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnStudentRoute = nextUrl.pathname.startsWith("/student");
            const isOnProfessorRoute = nextUrl.pathname.startsWith("/professor");

            // Allow access to the registration page ("/register") if not authenticated
            if (nextUrl.pathname === "/register") {
                return true;
            }

            // Continue with your existing logic for authenticated users
            if (isLoggedIn) {
                if (auth?.user.isStudent === true) {
                    return true;
                } else if (auth?.user.isStudent === false) {
                    return true;
                }
                return true;
            }

            return false;
        },
    },
    providers: [],
};
