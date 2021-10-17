const shuffleArray = (o: string[]) => {
    for (
        var j, x, i = o.length;
        i;
        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
};

export default shuffleArray;