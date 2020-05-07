const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return typeof(Storage) !== undefined;
}

function putHistory(data) {
    if (checkForStorage()) {
        let history
    }
}