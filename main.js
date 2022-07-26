let money = 500000;
amount = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(money - 10000);
        console.log(amount);
    }, 1000);

});

amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua cá là " + (amount - 100000));
    }, 2000);
});
amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua gà là " + (amount - 120000));
    }, 3000);
});
amount.then(amount => {
    setTimeout(() => {
        console.log("Số tiền còn lại sau khi mua lợn là " + (amount - 70000));
    }, 2000);
})