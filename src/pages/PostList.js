import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { actionCreators as postActions } from '../redux/modules/post'

import {Grid} from '../elements'
import PostItem from '../components/PostItem'
import InfinityScroll from '../shared/InfinityScroll'
import { useDispatch, useSelector } from 'react-redux'

const PostList = (props) => {
  const dispatch = useDispatch()
  const post_data = useSelector(state => state.post)
  console.log('[PostList]', post_data)

  const dummy = [
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },

    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
    {
      "_id": "61b30442c6f4cab99d92c452",
      "userID": "hana222",
      "description": "숲속 강 Rive",
      "imgUrl": "uploads/1639121986092_dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840×2400-wallpaper-thumb.jpg",
      "viewsCnt": 0,
      "commentCnt": 0,
      "postLikeCnt": 0,
      "createdAt": "2021-12-10T07:39:46.121Z",
      "__v": 0
    },
  ]

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
    425: 1
  }

  const getPostList = () => {
    dispatch(postActions.getPostAction(post_data.page))
  }

  useEffect(() => {
    if (post_data.posts.length < 2) {
      dispatch(postActions.getPostAction(1))
    }
  }, [])

  return (
  <PostListWrap> 
    <InfinityScroll callNext={getPostList} paging={{next: post_data.has_next}}>
      <Grid is_container="is_container">
          <Masonry breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

            {
              post_data.posts.map((post, index)=> {
                return <PostItem post={post} key={'post' + index}/>
              })
            }

          </Masonry>
      </Grid>
    </InfinityScroll>
  </PostListWrap>
  )
}

export default PostList

const PostListWrap = styled.div`
  padding: 16px;
  padding-top: 100px;

  .my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -10px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 10px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: transparent !important;
  margin-bottom: 10px;
}
`
