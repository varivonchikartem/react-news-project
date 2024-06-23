import { EntityState } from "@reduxjs/toolkit";
import { User } from "../../../User";

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = "ALL",
  IT = "IT",
  NEWS = "NEWS",
  SCIENCE = "SCIENCE",
  TECHNOLOGY = "TECHNOLOGY",
  CULTURE = "CULTURE",
  POLITICS = "POLITICS",
  HEALTH = "HEALTH",
  ENVIRONMENT = "ENVIRONMENT",
  ECONOMY = "ECONOMY",
  EDUCATION = "EDUCATION",
  SPORTS = "SPORTS",
  LIFESTYLE = "LIFESTYLE",
  OPINION = "OPINION",
  ENTERTAINMENT = "ENTERTAINMENT",
  HISTORY = "HISTORY",
  TRAVEL = "TRAVEL",
  SOCIAL_ISSUES = "SOCIAL-ISSUES",
  BUSINESS = "BUSINESS",
  SCIENCE_FICTION = "SCIENCE-FICTION",
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  //   user: User;
  image: string;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export enum ArticleView {
  LARGE_CARD = "LARGE_CARD",
  MEDIUM_CARD = "MEDIUM_CARD",
  SMALL_CARD = "SMALL_CARD",
}

export interface ArticleSchema extends EntityState<Article, string> {
  isLoading: boolean;
  isError?: string;
}
