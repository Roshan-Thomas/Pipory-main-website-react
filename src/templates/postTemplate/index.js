import React from 'react'
import { Route } from 'react-router-dom'
import ErrorPage from '../../pages/404'
import Layout from '../MarkdownLayout'
import postlist from '../../JSON/posts.json'
import {
    PostContainer,
    PostTitle,
    PostDetails,
    MarkdownStyles
} from './TemplateElements'
import gfm from 'remark-gfm'


const PostTemplate = (props) => {
    const validId = parseInt(props.match.params.id)
    if(!validId) {
        return <Route component={ErrorPage} />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : 'No title given'
            fetchedPost.date = post.date ? post.date : 'No date given'
            fetchedPost.author = post.author ? post.author : 'No author given'
            fetchedPost.content = post.content ? post.content : 'No content given'
            postExists = true
        }
    })
    if(postExists === false) {
        return <Route component={ErrorPage} />
    }


    return (
        <Layout>
            <PostContainer>
                <PostTitle>{fetchedPost.title}</PostTitle>
                <PostDetails>Published on {fetchedPost.date} by {fetchedPost.author}</PostDetails>
                <hr />
                <MarkdownStyles 
                    source={fetchedPost.content} 
                    escapeHtml={false} 
                    plugins={[gfm]}
                />
            </PostContainer>
        </Layout>
    )
}

export default PostTemplate
