import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h1>Hi people</h1>
		<p>Welcome to your blog for news related to that subject.</p>
		<p>
			Check <Link to="blog">blog</Link> for articles.
		</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
	</Layout>
);

export default IndexPage;
