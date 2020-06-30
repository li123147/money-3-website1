let id = parseInt(window.localStorage.getItem('index')||'0');
const createId = () => {
    id += 1;
    window.localStorage.setItem('idMax',JSON.stringify(id))
    return id;
};
export { createId };