

function isValidEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

function isDRCCongoPhoneNumber(phoneNumber) {
    return /^(\+243|0)(\d{9})$/.test(phoneNumber);
}
export {isValidEmail, isDRCCongoPhoneNumber}