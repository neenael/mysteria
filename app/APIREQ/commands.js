import ROOT_PATH from "@/app/api/rootPath";
const API_BASE = `${ROOT_PATH}/wp-json/wp/v2`;


// import useSWR from 'swr';
//
// const fetcher = url => fetch(url).then(res => res.json());
//
// export function usePosts(category = 'all') {
//     // Формируем URL в зависимости от категории
//     const url = category === 'all'
//         ? `${API_BASE}/posts?_fields=slug,id,link,acf,categories`
//         : `${API_BASE}/posts?categories=${category}&_fields=slug,id,link,acf,categories`;
//
//     // Вызываем SWR с ключом (url), fetcher и дополнительными опциями
//     const { data, error, isLoading } = useSWR(url, fetcher, {
//         // Кеш и дедупликация: не повторяем запросы к тому же ключу чаще, чем раз в минуту
//         dedupingInterval: 60000,
//         // (Необязательно) отключаем автоперезапрос на фокус, если не нужен:
//         // revalidateOnFocus: false
//     });
//
//     return {
//         posts: data,      // массив постов или undefined
//         isLoading,        // true, если идёт загрузка
//         error            // ошибка запроса, если есть
//     };
// }
//












export async function getCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error('Categories error');
    return res.json();
}



export async function getPosts(category = 'all') {
    const res = await fetch(category === 'all'
        ? `${API_BASE}/posts?_fields=slug,id,link,acf,categories`
        : `${API_BASE}/posts?categories=${category}&_fields=slug,id,link,acf,categories`,
    );
    if (!res.ok) throw new Error('Posts error');
    return res.json();
}


export async function getPostBySlug(slug) {
    const res = await fetch(`${API_BASE}/posts?slug=${slug}`);
    if (!res.ok) throw new Error('Slug post error');
    const data = await res.json();
    return data[0] || null;
}




export async function getAboutUsPage() {
    const res = await fetch(`${API_BASE}/pages?slug=about-us`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}
export async function getContactsPage() {
    const res = await fetch(`${API_BASE}/pages?slug=contacts`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}

export async function getCooperatePage() {
    const res = await fetch(`${API_BASE}/pages?slug=cooperate`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}

export async function getGalleryPage() {
    const res = await fetch(`${API_BASE}/pages?slug=gallery`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}

export async function getImpresumPage() {
    const res = await fetch(`${API_BASE}/pages?slug=impressum`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}

export async function getDatenschutzerklarungPage() {
    const res = await fetch(`${API_BASE}/pages?slug=datenschutzerklarung`);

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}



