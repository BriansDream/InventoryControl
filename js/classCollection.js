// Custom pesan error
// Concept of inheritance
class EmptyData extends Error {

    constructor(message) {
        // menurunkan property / constructor dari parent class
        super(message);
    }
}

class noData extends Error {
    constructor(message) {
        super(message);
    }
}
export {EmptyData,noData};