import styled from 'styled-components'
import Markdown from 'react-markdown'

export const PostContainer = styled.div`
    margin-right: 150px;
    margin-left: 150px;
    padding: 30px; 
`

export const PostTitle = styled.h1`
    font-family: 'Integral CF';
	font-weight: bold;
	font-size: 80px;

	@media screen and (max-width: 768px) {
		font-size: 60px;
	}

	@media screen and (max-width: 480px) {
		font-size: 50px;
	}
`

export const PostDetails = styled.p`
    font-weight: medium;
	font-size: 20px;
	margin-top: 10px;
	margin-bottom: 30px;
`

export const MarkdownStyles = styled(Markdown)`
    h1:not(:first-child), h2, h3, h4, h5, h6 {
		margin-top: 2rem;
	}

	h1 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 400;
	}
	h2 {
		font-size: 2.25rem;
		line-height: 1.875rem;
		font-weight: 400;
	}
	h3 {
		font-size: 1.375rem;
		line-height: 1.625rem;
		font-weight: 700;
	}
	h4 {
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 400;
	}
	h5 {
		font-size: 1.125rem;
		line-height: 1.375rem;
		font-weight: 700;
	}
	h6 {
		font-size: 1rem;
		line-height: 1.125rem;
		font-weight: 700;
	}

	p{
		font-size: 1.125rem;
		line-height: 1.875rem;
		font-weight: 400;
	}

	blockquote p {
		font-style: italic;
		font-size: 1.5rem;
		line-height: 2.125rem;
		text-align: center;
		max-width: 36rem;
		margin: 3rem auto;
	}

	a{
		text-decoration: none;
	}

	ul, ol {
		margin: 1rem 0 1rem 2rem;
	}
	li {
		margin: 0.25rem 0;
	}

	code {
		font-family: 'Ubuntu';
		font-size: 1rem;
		line-height: 1.875rem;
		padding: 0 0.3rem;
	}

	hr {
		border: 0;
		height: 1px;
		background: #000;
		opacity: 0.1;
		margin-top: 2rem;
	}

	strong {
		font-weight: 700;
	}

	img {
		width: 50%;
		height: 50%;
	}

	table {
		width: 100%;
		border-spacing: 0.25rem;
		border-collapse: collapse;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 400;
	}

	th {
		font-weight: 700;
	}

	table, th, td {
		border: 1px solid #000;
	}

	th, td {
		padding: 0.5rem;
	}
`

