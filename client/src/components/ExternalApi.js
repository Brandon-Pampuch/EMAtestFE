// src/views/ExternalApi.js
import { useMutation } from '@apollo/react-hooks';
import React from "react";
import { graphql } from 'react-apollo'
import { userQuery, addUser } from '../queries/queries'
import { useAuth0 } from "../react-auth0-spa";

const ExternalApi = (props) => {



    const displayUsers = () => {
        var data = props.data

        if (data.loading) {
            return <div>is loading</div>
        } else {
            return data.user.map(user => {
                return (
                    <>
                        <li>{user.name}</li>
                        <li>{user.sub}</li>

                    </>
                )
            })
        }
    }

    // to add a user
    const { loading, user } = useAuth0();
    const [addUserWithSub, { data }] = useMutation(addUser);
    return (
        <div>
            <ul>
                {displayUsers()}
            </ul>
            <button onClick={() => addUserWithSub({ variables: { name: user.email, sub: "over write me" } })}>add a user</button>
        </div>

    );
};

export default graphql(userQuery)(ExternalApi)

