export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnStudentRoute = nextUrl.pathname.startsWith("/student");
            const isOnProfessorRoute = nextUrl.pathname.startsWith("/professor");
            
            if (isLoggedIn) {
                if (auth?.user.isStudent === true) {
                    return true;
                }
                else if (auth?.user.isStudent === false) {
                    return true;
                }

                return true;
            } 

            return false;
        },
    },
    providers: [],
};