export class LocalStorageService {
    static saveData(key, value) {
        const stringifiedData = JSON.stringify(value);
        localStorage.setItem(key, stringifiedData);
    }

    static getData(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }
}