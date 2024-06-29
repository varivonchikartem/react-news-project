// src/entities/Rating/model/slices/ratingSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Rating } from "../../../../entities/Rating/model/types/RatingSchema";
import { GetArticleRatingService } from "../services/GetArticleRatingService/GetArticleRatingService";
import { RateArticleService } from "../services/RateArticleService/RateArticleService";

export interface RatingState {
  ratings: Rating[];
  isLoading: boolean;
  isError?: string;
}

const initialState: RatingState = {
  ratings: [],
  isLoading: false,
  isError: "",
};

const ArticleRatingSlice = createSlice({
  name: "ArticleRating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetArticleRatingService.pending, (state, action) => {
        state.isLoading = true;
        state.isError = action.payload;
      })
      .addCase(GetArticleRatingService.fulfilled, (state, action: PayloadAction<Rating[]>) => {
        state.isLoading = false;

        state.ratings = action.payload;
      })
      .addCase(GetArticleRatingService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(RateArticleService.pending, (state, action) => {
        state.isLoading = true;
        state.isError = action.payload;
      })
      .addCase(RateArticleService.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(RateArticleService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleRatingActions, reducer: ArticleRatingReducers } = ArticleRatingSlice;
