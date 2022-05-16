export const metaReact = (newtitle = 'Compra de vivienda en Colombia desde el exterior | Compra tu casa en Colombia desde cualquier parte del mundo | colombianos en el exterior | Colraices') => {
    return (document.querySelector('meta[name="description"]').content = newtitle);
};
