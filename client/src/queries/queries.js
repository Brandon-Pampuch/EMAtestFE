import { gql } from "apollo-boost"

const userQuery = gql`
{
    user {
        name
        sub
    }
}
`
const addUser = gql`
mutation($email: String!,$sub: String!){
    addUser(email: $email, sub: $sub) {
        name
        sub
    }
}
`
export { userQuery, addUser }
