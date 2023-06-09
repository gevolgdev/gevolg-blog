import { useRef, useState, ChangeEvent } from 'react';

import { Header } from "../../components";
import { DashboardContainer, DashboardContent } from "./style";
import { BsImage, BsFillFileEarmarkCheckFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ArticleProps } from '../../types/types';

import { useDispatch } from 'react-redux';
import { addArticle } from '../../redux/sliceArticles';

const Dashboard: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()

  const INITIAL_ARTICLE: ArticleProps = {
    subject: '',
    image: '',
    title: '',
    articleBody: '',
    time: '',
  };
  const [article, setArticle] = useState<ArticleProps>(INITIAL_ARTICLE);

  const date: Date = new Date();
  const day: string = date.getDay().toString().padStart(2,'0');
  const month: string = date.getMonth().toString().padStart(2,'0');
  const year: string = date.getFullYear().toString();

  const hours: string = date.getHours().toString().padStart(2, '0');
  const minutes: string = date.getMinutes().toString().padStart(2, '0');
  const formattedDate: string = `${day}/${month}/${year} - ${hours}:${minutes}`

  const handleSaveImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.files) {
      const imageFile: File | null = event.target.files[0];
      const imageURL: string = URL.createObjectURL(imageFile);
      setArticle(prev => ({...prev, image: imageURL}));
    };
  };

  const handleSaveForms = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value} = event.target as HTMLInputElement | HTMLTextAreaElement;
    setArticle(prev => ({...prev, [id]: value, time: formattedDate}))
  };

  
  const publishArticle = (): void => {
    setArticle(INITIAL_ARTICLE);
    dispatch(addArticle(article));
    toast('Seu artigo foi publicado!');
  };
  console.log(article)

  return (
    <DashboardContainer>
      <Header feed/>

      <ToastContainer theme="light"/>
      <DashboardContent>
        <h1>Novo Artigo</h1>
        <div className="forms-container">

          <div className="flex-row">
            <div className="input-container">
              <span>Assunto</span>
              <input id='subject' value={article.subject} type='text' onChange={handleSaveForms}/>
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
            <input id="title" value={article.title} type='text' onChange={handleSaveForms}/>
          </div>

          <div className="input-container">
            <span>Artigo</span>
            <textarea id='articleBody' value={article.articleBody} onChange={handleSaveForms}/>
          </div>

          <button onClick={publishArticle} className="post">Publicar</button>
        </div>
      </DashboardContent>

    </DashboardContainer>
  )
}

export default Dashboard;