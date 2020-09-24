var EmailAddress = (function () {
    function EmailAddress(email) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            this.email = email;
        }
        else {
            throw "Please enter valid Email Address";
        }
    }
    EmailAddress.prototype.value = function () {
        return this.email;
    };
    return EmailAddress;
}());
export default EmailAddress;
//# sourceMappingURL=email-address.js.map