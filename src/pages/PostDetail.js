import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { API, BASE_URL } from '../shared/api'
import moment from 'moment'
import _ from 'lodash'

import { Grid, Button } from '../elements'
import { HiDownload, HiTrash } from 'react-icons/hi'

const PostDetail = (props) => {
	const history = props.history
	const { user, is_login } = useSelector(state => state.user)
	const { post_id } = useParams()
	const [detail_data, setDetailData] = useState(null)
	const [ta_content, setTa] = useState('')
	const [write_disabled, setWriteDisabled] = useState(true)
	const [comment_data, setComentData] = useState([])

	const addRecentItem = (post) => {
		const string_data = `${post._id}|${post.imgUrl}|${post.description}`
		const recentData = sessionStorage.getItem('recent_list')
		if (recentData) {
			const list = `${string_data},${recentData}`
			sessionStorage.setItem('recent_list', list)
		} else {
			sessionStorage.setItem('recent_list', `${string_data}`)
		}
	}

	const renderRecentList = () => {
		const recentData = sessionStorage.getItem('recent_list')
		if (recentData) {
			const recent_arr = recentData.split(',')
			const parts = recent_arr.map((post, idx) => post.split('|'))
			const filtered = _.uniqBy(parts, 0);
			return filtered.map((info, idx) => {
				const id = info[0]
				const url = BASE_URL + info[1]
				const tags = info[2]
				return (
					<li className='recent-item' onClick={() => window.location.href = `/detail/${id}`}>
						<div className='item-img'>
							<img src={url} alt="" />
						</div>
						<div className='item-tags'>#{tags.split(' ').join(' #')}</div>
					</li>
				)
			})
		} else {
			return <div className='empty-recent-list'>최근 본 짤이 없어요.</div>
		}
	}

	const fetchPostDetail = async () => {
		const post_data = {
			postId: post_id
		}
		const res = await API.post.getDetail(post_data)
		setDetailData(res.data.post)
		addRecentItem(res.data.post)
	}

	const changeDateFormat = () => {
		const formatted = moment(detail_data?.createdAt).format('YYYY-MM-DD HH:mm:ss')
		return formatted
	}

	const handleChangeTa = (e) => {
		setTa(e.target.value)
	}

	const getCommentWriteData = () => {
		if (!user) return
		if (!is_login) return
		if (!post_id) return
		if (ta_content === '') return

		const comment_obj = {
			userID: user,
			postId: post_id,
			commentVal : ta_content
		}

		console.log('코멘트 객체: ', comment_obj)

		return comment_obj
	}

	const sendCommentData = async (comment) => {
		const res = await API.comment.writeComment(comment)
		console.log(res)
		return res.data
	}

	const handleWriteComment = async () => {
		setWriteDisabled(true)
		const comment = getCommentWriteData()
		const result = await sendCommentData()
		console.log('코멘트 작성 결과: ', result)

		// TODO  코멘트 작성에 성공 할 경우 textarea 비우기 
		setTa('') 
		setWriteDisabled(false)
	}

	useEffect(() => {
		ta_content === '' ? setWriteDisabled(true) : setWriteDisabled(false)
	}, [ta_content])

	useEffect(() => {
		fetchPostDetail()
	}, [])

	return (
		<PostDetailWrap>
			<Grid is_container is_flex>
				<div className='details-box'>

					<div className='detail-header'>

						<div className='detail-info'>
							<div className='user-id'>{ detail_data?.userID }</div>
							<div className='statistics'>
								<span>조회수 { detail_data?.viewsCnt }</span>
								<span>{ changeDateFormat() }</span>
							</div>
						</div>

						<div className='btn-group'>
							<a download href={`${BASE_URL}${detail_data?.imgUrl}`} className='download-btn'>
								<HiDownload />
							</a>
							<HiTrash className='delete-btn'/>
						</div>
					</div>

					<div className='detail-body'>
						<img className='post-img' src={`${BASE_URL}${detail_data?.imgUrl}`} alt=""/>
						
						<div className='tag-list'>
						{

							detail_data?.description && detail_data?.description.split(' ').map((tag, idx) => {
								return <Button key={`tag-u-${idx}`} _type="button" _className='tag-item' version="cobalt-blue">{tag}</Button>
							})

						}
						</div>
					</div>

					<div className='detail-footer'>
						{
							user && is_login 
								? (
									<div className='comment-adder after'>
										<textarea value={ta_content} onChange={handleChangeTa} className='adder-ta' placeholder="댓글을 입력하세요"></textarea>
										<div className='adder-bottom'>
											<span className='guide-text'>짤에 대한 느낌을 남겨보세요.</span>
											<Button _onClick={handleWriteComment} _disabled={write_disabled} _type="button" _className="write-btn">작성</Button>
										</div>
									</div>
								)
								: (
									<div className='comment-adder before'>
										<div className='guide-text'>댓글 작성은 회원만 가능합니다.</div>
										<div className='btn-group'>
											<Button _type="button">로그인</Button>
											<Button _type="button" version="green">회원가입</Button>
										</div>
									</div>
								)
						}

						<div className='comment-area'>
							<div className='comment-header'>
								댓글 10
							</div>
							<div className='comment-body'>
								<ul className='comment-list'>
									<li className='comment-item'>
										<div className='item-info'>
											<span className='user-id'>유저아이디</span>
											<span className='datetime'>2021-12-10 10:00:00</span>
										</div>
										<div className='item-content'>
											댓글 작성 내용 하하하하하하!
										</div>
										<div className='btn-group'>
											<Button _type="button" _className="modify-btn">수정</Button>
											<Button _type="button" _className="delete-btn">삭제</Button>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='recent-box'>
					<div className='recent-header'>최근 본 짤</div>
					<div className='recent-body'>
						<ul className='recent-list'>
							{renderRecentList()}
						</ul>
					</div>
				</div>
			</Grid>
		</PostDetailWrap>
	)
}

export default PostDetail

const PostDetailWrap = styled.section`
	padding: 16px;
	padding-top: 100px;
	padding-bottom: 100px;

	.details-box {
		flex: 1;
		margin-right: 40px;
	}

	.recent-box {
		position: sticky;
		top: 100px;
		max-width: 500px;
		flex: 1;
		height: 400px;

		.recent-header {
			font-size: 14px;
			padding-bottom: 5px;
			margin-bottom: 10px;
			border-bottom: 1px solid #585d6a;
		}

		.recent-list {
			height: 367px;
			overflow-y: auto;

			.empty-recent-list {
				padding: 20px 0;
				text-align: center;
			}

			.recent-item {
				cursor: pointer;
				display: flex;
				align-items: center;
				margin-bottom: 10px;

				.item-img {
					width: 64px;
					height: 64px;
					margin-right: 10px;
					border-radius: 6px;
					overflow: hidden;
					position: relative;

					img {
						width: 100%;
						min-height: 64px;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
					}
				}

				.item-tags {
					font-size: 12px;
				}
			}
		}
	}

	.detail-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30px;

		.detail-info {
			font-size: 12px;

			.user-id {
				font-size: 17px;
				color: #1bb762;
				margin-bottom: 3px;
				font-family: 'BMJUA';
			}

			.statistics {
				color: #b4b9c2;

				span {
					margin-right: 10px;
				}
			}
		}

		.btn-group {
			display: flex;
			align-items: center;

			.delete-btn,
			.download-btn {
				display: flex;
				align-items: center;
				cursor: pointer;
				color: #b4b9c2;
				font-size: 20px;
				margin-left: 10px;

				&:hover {
					color: #fff;
				}
			}
		}
	}

	.detail-body {
		margin-bottom: 20px;

		.post-img {
			width: 100%;
			margin-bottom: 20px;
		}

		.tag-list {
			.tag-item {
				border-radius: 30px;
				padding: 10px 24px 12px 24px;
				margin-right: 10px;
			}
		}
	}

	.detail-footer {
		.comment-adder {
			margin-bottom: 40px;
			padding: 10px 16px;
			border-radius: 6px;
			border: 1px solid #585d6a;
		}

		.before {
			color: #b4b9c2;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.guide-text {
				font-size: 12px;
			}

			.btn-group {
				button {
					font-size: 12px;
				}
			}
		}

		.after {
			padding: 0;
			display: flex;
			flex-direction: column;

			.adder-ta {
				color: #fff;
				resize: none;
				outline: none;
				border: 0;
				border-radius: 5px 5px 0 0;
				padding: 10px;
				width: 100% !important;
				flex: 1;
				background-color: #33353b;
				font-family: 'BMJUA';
				min-height: 90px;
			}

			.adder-bottom {
				color: #ccc;
				font-size: 11px;
				padding: 9px 16px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.write-btn {
					display: flex;
					align-items: center;
					height: 26px;
					color: #fff;
					background-color: #1bb76e;

					&:disabled {
						color: #b4b9bc;
						background-color: #464b57;
					}
				}
			}
		}
	}

	.comment-area {

	}

	.comment-header {
			font-size: 15px;
			padding-bottom: 14px;
			border-bottom: 1px solid #585d6a;
	}

	.comment-body {
		.comment-list {}

		.comment-item {
			margin: 5px 0;
			padding: 8px 0;
			border-bottom: 1px solid #585d6a;

			.item-info {
				.user-id {
					font-size: 11px;
					color: #1bb762;
					margin-right: 10px;
				}

				.datetime {
					font-size: 11px;
					color: #b4b9c2;
				}
			}

			.item-content {
				font-size: 13px;
				padding: 8px 0;
				margin-bottom: 5px;
			}

			.btn-group {
				display: flex;

				button {
					font-size: 12px;
					display: flex;
					align-items: center;
					height: 24px;
					padding: 0 14px;
				}

				.modify-btn {
					color: #b4b9bc;
					background-color: #464b57;
					margin-right: 10px;
				}

				.delete-btn {
					color: #fff;
					background-color: #f44336;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.recent-box {
			display: none;
		}

		.details-box {
			margin-right: 0;
		}
	}
`