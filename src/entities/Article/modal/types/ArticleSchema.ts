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
  SCIENCE = "SCIENCE",
  TECHNOLOGY = "TECHNOLOGY",
  CULTURE = "CULTURE",
  POLITICS = "POLITICS",
  SOCIAL_ISSUES = "SOCIAL-ISSUES",
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
  SMALL_CARD = "SMALL_CARD",
  LARGE_CARD = "LARGE_CARD",
}

export interface ArticleSchema extends EntityState<Article, string> {
  isLoading: boolean;
  isError?: string;
}
