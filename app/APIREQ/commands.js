import ROOT_PATH from "@/app/APIREQ/rootPath";
const API_BASE = `${ROOT_PATH}/wp-json/wp/v2`;

export async function getCategories() {
    const res = await fetch(`${API_BASE}/categories?per_page=100&hide_empty=true`);
    if (!res.ok) throw new Error('Categories error');
    return res.json();
}


export async function getPosts(category = 'all') {
    const res = await fetch(category === 'all'
        ? `${API_BASE}/posts?_fields=slug,id,link,acf,categories&per_page=100`
        : `${API_BASE}/posts?categories=${category}&_fields=slug,id,link,acf,categories`,
        {
            cache: "force-cache",
            next: { revalidate: 30 }
        });
    if (!res.ok) throw new Error('Posts error');
    return res.json();
}


export async function getPostBySlug(slug) {
    const res = await fetch(`${API_BASE}/posts?slug=${slug}`,
        {
            cache: "force-cache",
            next: { revalidate: 60 }
        });
    if (!res.ok) throw new Error('Slug post error');
    const data = await res.json();
    return data[0] || null;
}


export async function getAboutUsPage() {
    const res = await fetch(`${API_BASE}/pages?slug=about-us`, {
        cache: "force-cache",
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();
    return data[0];
}
export async function getContactsPage() {
    const res = await fetch(`${API_BASE}/pages?slug=contacts`,
        {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();
    return data[0];
}

export async function getCooperatePage() {
    const res = await fetch(`${API_BASE}/pages?slug=cooperate`,
        {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();
    return data[0];
}

export async function getGalleryPage() {
    const res = await fetch(`${API_BASE}/pages?slug=gallery`,
        {
            cache: "force-cache",
            next: { revalidate: 60 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();
    return data[0];
}

export async function getImpresumPage() {
    const res = await fetch(`${API_BASE}/pages?slug=impressum`,
        {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();
    return data[0];
}

export async function getRulesPage() {
    const res = await fetch(`${API_BASE}/pages?slug=rules`,
        {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    return data[0];
}



export async function getDatenschutzerklarungPage() {
    const res = await fetch(`${API_BASE}/pages?slug=datenschutzerklarung`,
        {
            cache: "force-cache",
            next: { revalidate: 86400 }
        });

    if (!res.ok) {
        throw new Error('Не удалось получить страницу "О нас"');
    }

    const data = await res.json();

    // Обычно возвращается массив из одного элемента
    return data[0];
}




export async function getPostLinkByID(id) {
    const res = await fetch(`${API_BASE}/posts/${id}?_fields=link`);
    if (!res.ok) throw new Error('ID post error');
    const data = await res.json();


    return data.link || null;
}

export async function getPageBySlugD(slug) {
    const res = await fetch(`${API_BASE}/pages?slug=${slug}`);
    if (!res.ok) throw new Error('Slug page error');
    const data = await res.json();


    return data[0] || null;
}
