const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey!");
        } else {
            reject("Whoops!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("True");
            }, 3000);
        } else {
            const error = new Error("Whoops!");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))
    .then(() => console.log("Como"))
    .then(() => console.log("Estás?"))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of Results", response);
    })
    .catch(err => {
        console.error(err);
    });
