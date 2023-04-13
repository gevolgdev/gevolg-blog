import { useRef, useState, ChangeEvent } from 'react';

import { Header } from "../../components";
import { DashboardContainer, DashboardContent } from "./style";
import { BsImage, BsFillFileEarmarkCheckFill } from 'react-icons/bs';

interface ArticleProps {
  subject: string;
  image: string;
  title: string;
  articleBody: string;
};

const Dashboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const INITIAL_ARTICLE: ArticleProps = {
    subject: '',
    image: '',
    title: '',
    articleBody: '',
  };
  const [article, setArticle] = useState<ArticleProps>(INITIAL_ARTICLE);

  const handleSaveImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.files) {
      const imageFile = event.target.files[0];
      const imageURL = URL.createObjectURL(imageFile);
      setArticle(prev => ({...prev, image: imageURL}));
    };
  };

  const handleSaveForms = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value} = event.target;
    setArticle(prev => ({...prev, [id]: value}))
  }

  return (
    <DashboardContainer>
      <Header feed/>

      <DashboardContent>
        <h1>Novo Artigo</h1>
        <div className="forms-container">

          <div className="flex-row">
            <div className="input-container">
              <span>Assunto</span>
              <input id='subject' type='text' onChange={handleSaveForms}/>
            </div>
            <div className="input-container">
              <span>Imagem</span>
              <button onClick={() => inputRef.current?.click()} className='button-file'>
                { article.image 
                ? <><BsFillFileEarmarkCheckFill style={{marginRight: 5}}/> Imagem selecionada!</>
                : <><BsImage style={{marginRight: 5}}/> Selecione uma imagem</>
                }
              </button>
              <input ref={inputRef} onChange={handleSaveImage} type='file' style={{display: 'none'}}/>
            </div>
          </div>

          <div className="input-container">
            <span>Título</span>
            <input id="title" type='text' onChange={handleSaveForms}/>
          </div>

          <div className="input-container">
            <span>Artigo</span>
            <textarea id='articleBody' onChange={handleSaveForms}/>
          </div>

          <button className="post">Publicar</button>
        </div>
      </DashboardContent>

    </DashboardContainer>
  )
}

export default Dashboard;