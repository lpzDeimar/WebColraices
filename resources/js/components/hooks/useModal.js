import { useState} from 'react';

const useModal = () => {
  const [activeModalBlog, setActiveModalBlog] = useState(false);
  const [activeModalVivienda, setActiveModalVivienda] = useState(false);

  const activarModalBlog = () => {
      setActiveModalBlog(!activeModalBlog);
  }

  const activarModalVivienda = () => {
      setActiveModalVivienda(!activeModalVivienda);
  }
  return [
    activeModalBlog,
    activarModalBlog,
    activeModalVivienda,
    activarModalVivienda
  ]
}

export default useModal
