import axios from "axios";

export async function getAllPokemon(url){
    return new Promise((resolve, reject) => {
        let cancel;
        axios
            .get(url, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then(res => {
                resolve(res.data);
        });

        return () => cancel();
    })
}

export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        let cancel;
        axios
            .get(url, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then(res => {
                resolve(res.data);
        });

        return () => cancel();
    })
}