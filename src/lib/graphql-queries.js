import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetAuthors {
		authors {
			name
			intro
			bio
			slug
			picture {
				url
			}
		}
	}
`;

export const projectsQuery = gql`
	query GetProjects {
		projects {
			name
			slug
			description
			tags
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;

export const projectQuery = gql`
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			name
			slug
			description
			tags
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;

export const postsQuery = gql`
	query GetPosts {
		posts {
			title
			slug
			date
			content
			tags
			coverImage {
				url
			}
			authors {
				name
			}
		}
	}
`;

export const postQuery = gql`
	query GetPost ($slug: String!) {
		post(where: { slug: $slug }) {
			title
			slug
			date
			content
			tags
			coverImage {
				url
			}
			authors {
				name
			}
		}
	}
`;
