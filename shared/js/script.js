
const checkWIP = (url) => {
    console.warn(url);
    const index = new File(url.concat('index.html'));
    if (index.exists()) {
        console.warn('Exists');
    }
    else{
        console.warn('Does not exist');
    }
    return url;
};
