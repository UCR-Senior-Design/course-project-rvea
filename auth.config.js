export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            
            if (isLoggedIn) {
                const isStudent = auth?.user.isStudent;
                
                if (auth.user.isStudent == true) {
                    // Redirect to student profile URL
                    return {
                        redirect: {
                            destination: "/student/profile",
                            permanent: false,
                        },
                    };
                } else if (auth.user.isStudent == false) {
                    // Redirect to professor profile URL
                    return {
                        redirect: {
                            destination: "/professor/profile",
                            permanent: false,
                        },
                    };
                } else {
                    // Handle other user types or scenarios
                    console.error("Unknown user type:", auth.user.userType);
                    // Redirect to a default URL or display an error message
                    return {
                        redirect: {
                            destination: "/",
                            permanent: false,
                        },
                    };
                }
            }
            return {
                props: {},
            };
        },
    },
    providers: [],
};