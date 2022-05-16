
export const createCanonical = (hrefCont) => {
    document.querySelector('link[rel="canonical"]').href = hrefCont;
}
