const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // throw error if any crediential fields are missing
        // look up user in database with email
        // if user is found
            // compare the submitted password to the one in the database
            // if there is a match
                // return the user
        // else (user is not found)
            // throw an error
        throw new UnauthorizedError("Incorrect email or password")
    }

    static async register(credentials) {
        // throw error if any credential fields are missing

        // if someone already has access to the system with the email
            // throw an error
        
        // take the password and hash it
        // take the email and lowercase it

        // create a new user in the database with their info
        // return the user
    }
}