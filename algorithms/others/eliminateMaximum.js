const eliminateMaximum = (dist, speed) => {
    const lens = dist.length;
    const arriveTime = [];
    for (let i = 0; i < lens; i++) {
        arriveTime[i] = Math.ceil(dist[i] / speed[i]);
    }
    arriveTime.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < lens; i++) {
        if (arriveTime[i] <= i) {
            return i;
        }
    }
    return lens;
};

const dist = [1, 4, 4];
const speed = [1, 9, 10];

console.log(eliminateMaximum(dist, speed));
