export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnStudentRoute = nextUrl.pathname.startsWith("/student");
            const isOnProfessorRoute = nextUrl.pathname.startsWith("/professor");
            
            //Must check if users are logged in first b4 being able to access urls
            if (isOnStudentRoute) {
                if (isLoggedIn && auth?.user.email.includes("student")) return true;
                return false;
            }
            else if (isOnProfessorRoute) {
                if (isLoggedIn && auth?.user.email.includes("prof")) return true;
                return false;
            }

            //Redirecting to appropriate urls after logging in
            else if (isLoggedIn) {
                //Redirect to student url
                console.log(auth?.user)
                if (auth?.user.email.includes("student")) {
                    return Response.redirect(new URL("/student/profile", nextUrl));
                }
                //Redirect to professor url
                else if (auth?.user.email.includes("prof")) {
                    return Response.redirect(new URL("/professor/profile", nextUrl));
                }
            }
            return true;
        },
    },
    providers: [],
};