export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isStudent = auth?.user?.isStudent;
            const isOnStudentRoute = nextUrl.pathname.startsWith("/student");
            const isOnProfessorRoute = nextUrl.pathname.startsWith("/professor");

            // Allow access to the registration page ("/register") if not authenticated
            if (nextUrl.pathname === "/register") {
                return true;
            }

            // Continue with your existing logic for authenticated users
            if (isLoggedIn) {
<<<<<<< HEAD
                console.log("IS STUDENT???  ", isStudent);

                if (isStudent === true) {
                    return Response.redirect(new URL("/student/profile", nextUrl));
                }
                if (isStudent === false) {
                    return Response.redirect(new URL("/professor/profile", nextUrl));
                }
=======

                if (auth?.user.isStudent === true) {
                    return Response.redirect(new URL("/student/profile", nextUrl));
                }
                if (auth?.user.isStudent === false) {
                    return Response.redirect(new URL("/professor/profile", nextUrl));
                }
                return true;
>>>>>>> d9c3f8f1aaca9170d34fd9935f700473e49aeeb4
            }

            return false;
        },
    },
    providers: [],
};
