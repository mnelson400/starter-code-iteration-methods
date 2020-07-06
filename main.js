// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

// Kata 0: An example kata:
//  Filter the users array to show only the users with an eyeColor property of "green".

// const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata (0, greenEyes2)


// Kata 1: Use the .filter() method:
//  Filter the users array to show only the users with an isActive property of true.
const userActive = users.filter (function (user) {
    return user.isActive === true;
});
printKata (1, userActive);
// console.log ('KATA 1: ', userActive);


// Kata 2: Use the .map() method:
//  Map over the users array to show only the email addresses of the users.
const userEmail = users.map (function (user) {
    return user.email;
});
printKata (2, userEmail);
// console.log ('KATA 2: ', userEmail);


// Kata 3: Use the .some() method:
//  Check whether at least one user in the users array has a company property of "OVATION".
const hasOvation = users.some (function (user) {
    return user.company === 'OVATION';
});
printKata (3, hasOvation);
// console.log ('KATA 3: ', hasOvation);


// Kata 4: Use the .find() method:
//  Find the first user in the array over the age of 38.
const overThirtyEight = users.find (function (user) {
    return user.age > 38;
});
printKata (4, overThirtyEight);
// console.log ('KATA 4: ', overThirtyEight);


// Kata 5: Use the .filter() and .find() methods:
//  Find the first user in the array over the age of 38 who is active.
const firstActiveOverThirtyEight = users.filter (function (user) {
    return user.age > 38;
})
.find (function (user) {
        return user.isActive === true;
});
printKata (5, firstActiveOverThirtyEight);
// console.log ('KATA 5: ', firstActiveOverThirtyEight);


// Kata 6: Use the .filter() and .map() methods:
//  Show the balance of every user in the array from the "ZENCO" company.
const zencoBalance = users.filter (function (user) {
    return user.company === 'ZENCO';
})
.map (function (user) {
    return user.balance;
});
printKata (6, zencoBalance);
// console.log ('KATA 6: ', zencoBalance);


// Kata 7: Use the .filter() method with .includes() and the .map() method:
//  Show the age of every user with the "fugiat" tag.
const fugiatTag = users.filter (function (user) {
    return user.tags.includes ('fugiat');
})
.map (function (user) {
    return user.age;
});
printKata (7, fugiatTag);
// console.log ('KATA 7: ', fugiatTag);


// *Example demo: https://github.com/mnelson400/iterationMethodsDemo
// *Example demo video:(2020-07-03 10-36-48)
// *Assessment explanation video:(2020-07-03 13-50-08)

// VVVVVV Code from assessment page.(Leave at the bottom.) VVVVVV
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
