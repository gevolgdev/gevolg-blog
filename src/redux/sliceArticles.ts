import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ArticleProps } from '../types/types';

const initialState: ArticleProps[] = [{
  subject: '',
  image: '',
  title: '',
  articleBody: '',
}];

const sliceArticle = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addArticle(state, {payload}: PayloadAction<ArticleProps>) {
      return [
        ...state,
        {
          subject: payload.subject,
          image: payload.image,
          title: payload.title,
          articleBody: payload.articleBody,
        }
      ]
    }
  }
});

export default sliceArticle.reducer;
export const { addArticle } = sliceArticle.actions;

export const useArticle = (state: any) => {
  return state.article as ArticleProps[]
};