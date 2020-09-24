var NonEmptyString = (function () {
    function NonEmptyString(nonEmptyString, exceptionMessage) {
        if (nonEmptyString !== undefined && /^(?!\s*$).+/.test(nonEmptyString)) {
            this.nonEmptyString = nonEmptyString;
        }
        else {
            throw exceptionMessage;
        }
    }
    NonEmptyString.prototype.value = function () {
        return this.nonEmptyString;
    };
    return NonEmptyString;
}());
export default NonEmptyString;
//# sourceMappingURL=NonEmptyString.js.map