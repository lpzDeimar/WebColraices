import { useState } from "react";

const useModal = () => {
    const [activeModalBlog, setActiveModalBlog] = useState(false);
    const [activeModalVivienda, setActiveModalVivienda] = useState(false);
    const [activeModalForm, setActiveModalForm] = useState(false);

    const activarModalBlog = () => {
        setActiveModalBlog(!activeModalBlog);
    };

    const activarModalVivienda = () => {
        setActiveModalVivienda(!activeModalVivienda);
    };

    const activarModalForm = () => {
        setActiveModalForm(!activeModalForm);
    };

    const apiW = (e) => {
        e.preventDefault();
        window.open("https://api.whatsapp.com/send/?phone=573105653998");
    };
    return [
        activeModalBlog,
        activarModalBlog,
        activeModalVivienda,
        activarModalVivienda,
        activeModalForm,
        activarModalForm,
        apiW,
    ];
};

export default useModal;
