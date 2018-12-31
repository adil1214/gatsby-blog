import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
	return (
		<Layout>
			<div>
				<h1>Latest Posts</h1>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id} className="article-box">
						<h3 className="title">{node.frontmatter.title}</h3>
						<p className="author">{node.frontmatter.author}</p>
						<p className="date">{node.frontmatter.date}</p>
						<p className="excerpt">{node.excerpt}</p>
						<Link to={node.frontmatter.path}>Read more...</Link>
					</div>
				))}
				<p />
			</div>
		</Layout>
	);
};

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			# sort by date desc
			edges {
				node {
					frontmatter {
						title
						path
						date
						author
					}
					excerpt
				}
			}
		}
	}
`;

export default BlogPage;
