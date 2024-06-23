import React from "react";
import clx from "classnames";
import styles from "./ArticlesPage.module.scss";
import { Input, InputTheme } from "../../../shared/ui/Input/Input";
import { Modal } from "../../../shared/ui/Modal/Modal";
import Button, { ButtonTheme } from "../../../shared/ui/Button/Button";
import { AuthorizationModal } from "../../../features/Authorization";
import { ArticleList } from "../../../entities/Article/ui/ArticleList/ui/ArticleList";
import { Article, ArticleType } from "../../../entities/Article/modal/types/ArticleSchema";
import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleReducers } from "../../../entities/Article";
import { useSelector } from "react-redux";
import { getArticles } from "../../../entities/Article/modal/slices/ArticleSlice";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleService } from "../../../entities/Article/modal/service/Article/ArticleService";

interface ArticlesPageProps {
  className?: string;
}

const article = {
  id: "1",
  title: "We are profoundly disappointed...",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, distinctio...",
  image: "https://www.doctorswithoutborders.ca/wp-content/uploads/2024/05/MSB194653_Medium.jpg",
  createdAt: "2024-03-25T12:00:00Z",
  type: [ArticleType.EDUCATION, ArticleType.BUSINESS, ArticleType.SCIENCE_FICTION],
  blocks: [
    {
      id: "block1",
      type: "TEXT",
      paragraphs: [
        "The Government of Canada recently issued a formal response to a petition supported by international medical organization Doctors Without Borders/Médecins Sans Frontières (MSF) calling on Canada to increase its humanitarian assistance for Democratic Republic of Congo (DRC), where millions of people are in desperate need as a result of a violent armed conflict and the failure of the international humanitarian system to adequately respond.",
        "MSF is profoundly disappointed that Canada’s response indicates it will not increase its support to millions of women, girls and displaced people who are currently exposed to unfathomable levels of suffering in eastern DRC. In its response to the petition, Canada does not announce any new or additional funding for this crisis. Given the outsized impact of this emergency on women and girls – including through shocking levels of sexual and gender-based violence (SGBV) – it is all the more disappointing for such a response to come from a government with a Feminist International Assistance Policy and a stated commitment to addressing the needs of the most vulnerable in conflict.",
      ],
      title: "Introduction",
    },
    {
      id: "block2",
      type: "IMAGE",
      imageUrl:
        "https://s.france24.com/media/display/c528b65c-a164-11ed-bd93-005056bfb2b6/w:980/p:16x9/congo-1.webp",
      caption:
        "File photo of residents flee fighting between rebels and Congolese forces near Goma, Democratic Republic of Congo, taken on October 29, 2022.",
    },
    {
      id: "block3",
      type: "TEXT",
      paragraphs: [
        "For more than a year now, MSF has been raising the alarm about the massive humanitarian crisis unfolding in the eastern DRC provinces of North Kivu, South Kivu and Ituri, where fighting between state and non-state armed groups has driven millions of people from their homes and left them in urgent need of safety, shelter, food, water and other assistance.",
        "As an almost entirely independently financed organization, MSF has been able to scale up its own pre-existing humanitarian medical activities in the region, and since 2022 we have significantly increased our response for people affected by this crisis, including increasing our capacity to provide comprehensive care to survivors of sexual violence.",
        "But we cannot do it all on our own. Without additional humanitarian assistance funding for other organizations, people displaced by violence in eastern DRC will continue to face harrowing and life-threatening situations.",
      ],
      title: "Crisis in Eastern DRC",
    },
    {
      id: "block4",
      type: "IMAGE",
      imageUrl: "https://gdb.voanews.com/00eb0000-0aff-0242-6df2-08dac8026bde_w1023_r1_s.jpg",
      caption: "MSF providing medical assistance in North Kivu.",
    },
    {
      id: "block5",
      type: "TEXT",
      paragraphs: [
        "That is why MSF began calling on the Government of Canada last year to allocate new and additional emergency funding for the humanitarian response in eastern DRC, so that other organizations can also scale up. When that did not materialize, we supported the launch of a Parliamentary petition in January 2024 calling on Canada to: 1) commit to increasing its humanitarian assistance budget for DRC in 2024 over the amount spent in 2023, so that additional funds can be directed to this crisis without reallocating from other acute needs in DRC, and 2) to use all Canada’s available diplomatic and political tools to help alleviate the suffering of those affected by this crisis.",
        "Canada has now issued its response to these calls. Although it highlights much of Canada’s previous support for DRC, including many development commitments, it fails to address the petition’s specific call for more lifesaving humanitarian assistance right now. This matters, because humanitarian assistance is fundamentally different from development support, in that it is directed towards meeting the immediate survival needs – food, water, shelter, safety, medical care – of people in acute crisis situations, such as the one currently putting lives at risk in eastern DRC.",
      ],
      title: "Canada's Response",
    },
    {
      id: "block6",
      type: "IMAGE",
      imageUrl: "https://gdb.voanews.com/01000000-0aff-0242-53c0-08dc4e646232_w1023_r1_s.jpg",
      caption: "Children in a refugee camp in Ituri.",
    },
    {
      id: "block7",
      type: "TEXT",
      paragraphs: [
        "While the government’s response does refer to Canada’s increased commitment to global humanitarian assistance overall, which was announced in April as part of the 2024 federal budget (an announcement that MSF has publicly welcomed), it gives no indication that this will result in additional support for DRC specifically. Of the funding for DRC announced by International Development Minister Ahmed Hussen in April, which is referenced in the government’s response, only a small portion can be described as being for humanitarian assistance needs, and that portion appears to be less than the total of Canada’s international humanitarian assistance spending on DRC in 2023.",
        "Beyond funding, Canada’s response also highlights some of the other diplomatic and political tools Canada has used to help address the emergency in North Kivu, South Kivu and Ituri, and across the DRC as a whole. As a front-line humanitarian responder bearing witness to the appalling consequences of this crisis on the people of eastern DRC, MSF appreciates the efforts Canada has undertaken to alleviate some of the immense human suffering that continues to affect so many. However, we encourage Canada to focus less on its past engagements and to play an active role in finding new solutions that can better meet people’s urgent humanitarian needs right now.",
      ],
      title: "Conclusion",
    },
  ],
} as Article;

console.log(article);

const reducers: ReducersList = {
  article: ArticleReducers,
};

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const articlespageClasses = clx(styles.ArticlesPage, {
    [className!]: className,
  });

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);

  React.useEffect(() => {
    dispatch(ArticleService());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={articlespageClasses}>
        <ArticleList articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
