import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Rating } from "../../../../../entities/Rating/model/types/RatingSchema";

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

export const RateArticleService = createAsyncThunk<void, RateArticleArg, ThunkConfig<string>>(
  "RateArticle/RateArticleService",
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const { userId, articleId, rate, feedback } = props;

    try {
      const response = await extra.api.post("/article-ratings", {
        params: {
          userId: userId,
          articleId: articleId,
          rate: rate,
          feedback: feedback,
        },
      });

      if (!response.data) {
        throw new Error("No data found");
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue("Failed to fetch article ratings");
    }
  }
);
