import React from "react";
import "../styles/Board.css";
import { useState } from "react";
import classnames from "classnames";

const Board = () => {
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [resourcesVisible, setResourcesVisible] = useState(false);
  const [newsVisible, setNewsVisible] = useState(false);
  const [noticeClicked, setNoticeClicked] = useState(true);
  const [resourcesClicked, setResourcesClicked] = useState(false);
  const [newsClicked, setNewsClicked] = useState(false);
  const [bonoClicked, setBonoClicked] = useState(false);
  return (
    <div className={classnames("board-total", { ququ: bonoClicked })}>
      <div className="menus">
        <div
          className={classnames("notice", { on: noticeClicked })}
          onClick={() => {
            setNoticeVisible(true);
            setNewsVisible(false);
            setResourcesVisible(false);
            setNoticeClicked(true);
            setResourcesClicked(false);
            setNewsClicked(false);
          }}
        >
          공지사항
        </div>
        <div
          className={classnames("resources", { on: resourcesClicked })}
          onClick={() => {
            setResourcesVisible(true);
            setNoticeVisible(false);
            setNewsVisible(false);
            setNoticeClicked(false);
            setResourcesClicked(true);
            setNewsClicked(false);
          }}
        >
          자료실
        </div>
        <div
          className={classnames("news", { on: newsClicked })}
          onClick={() => {
            setNewsVisible(true);
            setNoticeVisible(false);
            setResourcesVisible(false);
            setNoticeClicked(false);
            setResourcesClicked(false);
            setNewsClicked(true);
          }}
        >
          뉴스
        </div>
      </div>
      <div className="main-contents">
        {noticeVisible && (
          <ol className="notice-main">
            <li>
              공지사항1<span>2022.01.01</span>
            </li>
            <li>
              공지사항2<span>2022.01.02</span>
            </li>
            <li>
              공지사항3 <span>2022.01.03</span>
            </li>
          </ol>
        )}
        {resourcesVisible && (
          <ol className="resources-main">
            <li>
              자료1 <span>2022.01.01</span>
            </li>
            <li>
              자료2 <span>2022.01.02</span>
            </li>
            <li>
              자료3 <span>2022.01.03</span>
            </li>
          </ol>
        )}
        {newsVisible && (
          <ol className="news-main">
            <li>
              뉴스1 <span>2022.01.01</span>
            </li>
            <li>
              뉴스2 <span>2022.01.02</span>
            </li>
            <li>
              뉴스3 <span>2022.01.03</span>
            </li>
          </ol>
        )}
        <div
          className="bonobono"
          onClick={() => {
            bonoClicked === true && setBonoClicked(false);
            bonoClicked === false && setBonoClicked(true);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Board;
