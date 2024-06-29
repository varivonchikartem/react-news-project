import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { Rating } from "../../../../../entities/Rating/model/types/RatingSchema";

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
}

export const GetArticleRatingService = createAsyncThunk<Rating[], GetArticleRatingArg, ThunkConfig<string>>(
  "GetArticleRating/GetArticleRatingService",
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    const { userId, articleId } = props;

    try {
      const response = await extra.api.get<Rating[]>("/article-ratings", {
        params: {
          userId,
          articleId,
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
