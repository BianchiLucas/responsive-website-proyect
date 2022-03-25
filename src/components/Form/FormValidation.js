
export default function validateForm({ name, email, password, confirmPassword }) {
    if (!name.trim()) {
        return 'Name required'
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email) {
        return 'email required'
    } else if (regex.test(email.toLocalLowerCase)) {
        return 'email adress is invalid'
    }

    if (!password) {
        return 'password required'
    } else if (password.length < 6 ) {
        return 'password needs to be 6 characters or more'
    }

    if (!confirmPassword) {
        return 'Enter confirm password is required'
    } else if (confirmPassword !== password) {
        return 'passwords do not match'
    }
    
    return null
}