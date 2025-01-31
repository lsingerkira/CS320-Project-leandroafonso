import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function LogIn({signOut, user}) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100vh",
                justifyContent: "top"
            }}>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
            </div>
        </>
    );
}

export default withAuthenticator(LogIn);